import { useEffect, useRef } from "react";
import Matter from "matter-js";
import MatterAttractors from "matter-attractors";
import MatterWrap from "matter-wrap";

Matter.use(MatterAttractors);
Matter.use(MatterWrap);

export default function HeroBackground() {
  const sceneRef = useRef(null);
  const engineRef = useRef(null);
  const runnerRef = useRef(null);
  const rafRef = useRef(null);

  useEffect(() => {
    const { Engine, Render, Runner, World, Bodies, Body, Events, Common } = Matter;

    const width = window.innerWidth;
    const height = window.innerHeight;

    const engine = Engine.create();
    engine.world.gravity.y = 0;
    engine.world.gravity.x = 0;
    engine.world.gravity.scale = 0.02;
    engineRef.current = engine;

    const render = Render.create({
      element: sceneRef.current,
      engine,
      options: {
        width,
        height,
        wireframes: false,
        background: "transparent",
        pixelRatio: window.devicePixelRatio || 1,
      },
    });

    // Attractor and leader setup
    const attractor = Bodies.circle(width / 2, height / 2, 20, {
      isStatic: true,
      render: { fillStyle: "transparent" },
      plugin: {
        attractors: [
          (bodyA, bodyB) => ({
            x: (bodyA.position.x - bodyB.position.x) * 1e-7,
            y: (bodyA.position.y - bodyB.position.y) * 1e-7,
          }),
        ],
      },
    });
    World.add(engine.world, attractor);

    const leaderSize = 40;
    const leader = Bodies.circle(width / 2, height / 2, leaderSize / 2, {
      isStatic: true,
      render: { fillStyle: "rgba(0,0,0,0.8)" },
    });
    World.add(engine.world, leader);

    // Shapes
    const shades = ["#1a1a1a", "#2b2b2b", "#3a3a3a"];
    const totalShapes = 120;
    for (let i = 0; i < totalShapes; i++) {
      const x = Common.random(-width * 0.25, width * 1.25);
      const y = Common.random(-height * 0.25, height * 1.25);
      const size = Common.random(10, 60);
      const color = shades[Math.floor(Common.random(0, shades.length))];
      const opacity = Common.random(0.3, 0.9);
      const hexOpacity = Math.round(opacity * 255).toString(16).padStart(2, "0");

      const shape =
        Math.random() > 0.5
          ? Bodies.circle(x, y, size / 2, {
              mass: Common.random(0.05, 0.2),
              frictionAir: Common.random(0.04, 0.08),
              render: { fillStyle: `${color}${hexOpacity}` },
            })
          : Bodies.polygon(x, y, Math.round(Common.random(4, 6)), size / 1.3, {
              mass: Common.random(0.05, 0.2),
              frictionAir: Common.random(0.04, 0.08),
              render: { fillStyle: `${color}${hexOpacity}` },
            });
      World.add(engine.world, shape);
    }

    // Pointer
    let target = { x: width / 2, y: height / 2 };
    window.addEventListener("pointermove", (e) => {
      const rect = render.canvas.getBoundingClientRect();
      target.x = e.clientX - rect.left;
      target.y = e.clientY - rect.top;
    });

    const lerp = (a, b, t) => a + (b - a) * t;

    const animate = () => {
      const newX = lerp(leader.position.x, target.x, 0.2);
      const newY = lerp(leader.position.y, target.y, 0.2);
      Body.setPosition(leader, { x: newX, y: newY });
      Body.setPosition(attractor, { x: newX, y: newY });
      rafRef.current = requestAnimationFrame(animate);
    };
    animate();

    // Resize
    const handleResize = () => {
      render.canvas.width = window.innerWidth;
      render.canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", handleResize);

    Render.run(render);
    const runner = Runner.create();
    Runner.run(runner, engine);
    runnerRef.current = runner;

    // Pause/Resume logic using IntersectionObserver
    const observer = new IntersectionObserver(
      (entries) => {
        const isVisible = entries[0].isIntersecting;
        if (isVisible) {
          Runner.run(runnerRef.current, engineRef.current);
          if (!rafRef.current) animate();
        } else {
          Runner.stop(runnerRef.current);
          cancelAnimationFrame(rafRef.current);
          rafRef.current = null;
        }
      },
      { threshold: 0.1 }
    );

    if (sceneRef.current) observer.observe(sceneRef.current);

    return () => {
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener("resize", handleResize);
      observer.disconnect();
      Render.stop(render);
      Runner.stop(runner);
      World.clear(engine.world, false);
      Engine.clear(engine);
      if (render.canvas && render.canvas.parentNode)
        render.canvas.remove();
    };
  }, []);

  return <div ref={sceneRef} className="absolute inset-0 z-0 pointer-events-none" />;
}
