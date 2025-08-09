"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

// Engineer made from primitives (with hardhat), animated only when the user scrolls.
export function WalkingEngineer() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const sceneRef = useRef<THREE.Scene>();
  const cameraRef = useRef<THREE.PerspectiveCamera>();
  const rendererRef = useRef<THREE.WebGLRenderer>();

  // Parts
  const leftLegRef = useRef<THREE.Mesh>();
  const rightLegRef = useRef<THREE.Mesh>();
  const leftArmRef = useRef<THREE.Mesh>();
  const rightArmRef = useRef<THREE.Mesh>();
  const bodyRef = useRef<THREE.Object3D>();
  const propsRef = useRef<THREE.Object3D[]>([]);

  // Scroll-driven phase
  const phaseRef = useRef<number>(0);
  const lastScrollRef = useRef<number>(0);

  useEffect(() => {
    const scene = new THREE.Scene();
    scene.background = null;
    scene.fog = new THREE.Fog(0x0a0a0a, 20, 120);
    const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 500);
    camera.position.set(0, 1.6, 7);

    const renderer = new THREE.WebGLRenderer({ canvas: canvasRef.current!, alpha: true, antialias: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(window.innerWidth, window.innerHeight);

    // Lights
    scene.add(new THREE.AmbientLight(0xffffff, 0.6));
    const dir = new THREE.DirectionalLight(0xffffff, 0.9);
    dir.position.set(5, 10, 7);
    scene.add(dir);

    // Ground + Grid (brought back)
    const ground = new THREE.Mesh(
      new THREE.PlaneGeometry(500, 500),
      new THREE.MeshStandardMaterial({ color: 0x0f1012, roughness: 1 })
    );
    ground.rotation.x = -Math.PI / 2;
    scene.add(ground);

    const grid = new THREE.GridHelper(400, 80, 0x2a2a2a, 0x1f1f1f);
    grid.position.y = 0.001;
    scene.add(grid);

    // Parallax props
    const props: THREE.Object3D[] = [];
    const propMat = new THREE.MeshStandardMaterial({ color: 0x1f2937, metalness: 0.1, roughness: 0.9 });
    for (let i = 0; i < 24; i++) {
      const h = 0.3 + Math.random() * 1.2;
      const box = new THREE.Mesh(new THREE.BoxGeometry(0.35, h, 0.35), propMat);
      box.position.set((Math.random() - 0.5) * 10, h / 2, -i * 6 - 6);
      scene.add(box);
      props.push(box);
    }
    propsRef.current = props;

    // Engineer rig
    const body = new THREE.Group();
    const bodyMat = new THREE.MeshStandardMaterial({ color: 0x4f79ff, metalness: 0.05, roughness: 0.7 });
    const torso = new THREE.Mesh(new THREE.BoxGeometry(0.9, 1.2, 0.4), bodyMat);
    torso.position.y = 1.2;
    body.add(torso);

    const head = new THREE.Mesh(new THREE.BoxGeometry(0.38, 0.4, 0.38), new THREE.MeshStandardMaterial({ color: 0xffd7b0 }));
    head.position.y = 2.1;
    body.add(head);

    // Hardhat (hemisphere + brim)
    const helmet = new THREE.Mesh(
      new THREE.SphereGeometry(0.28, 24, 16, 0, Math.PI * 2, 0, Math.PI / 2),
      new THREE.MeshStandardMaterial({ color: 0xffc300, metalness: 0.2, roughness: 0.6 })
    );
    helmet.position.y = 2.28;
    body.add(helmet);
    const brim = new THREE.Mesh(new THREE.TorusGeometry(0.3, 0.03, 12, 40), new THREE.MeshStandardMaterial({ color: 0xffc300 }));
    brim.rotation.x = Math.PI / 2;
    brim.position.y = 2.12;
    body.add(brim);

    // Laptop in right hand
    const laptop = new THREE.Mesh(new THREE.BoxGeometry(0.35, 0.02, 0.25), new THREE.MeshStandardMaterial({ color: 0x9aa3b2, metalness: 0.4, roughness: 0.4 }));

    const legMat = new THREE.MeshStandardMaterial({ color: 0x243352 });
    const leftLeg = new THREE.Mesh(new THREE.BoxGeometry(0.24, 0.9, 0.24), legMat);
    const rightLeg = new THREE.Mesh(new THREE.BoxGeometry(0.24, 0.9, 0.24), legMat);
    leftLeg.position.set(-0.22, 0.45, 0);
    rightLeg.position.set(0.22, 0.45, 0);
    body.add(leftLeg, rightLeg);
    leftLegRef.current = leftLeg;
    rightLegRef.current = rightLeg;

    const armMat = new THREE.MeshStandardMaterial({ color: 0x90a4c7 });
    const leftArm = new THREE.Mesh(new THREE.BoxGeometry(0.2, 0.9, 0.2), armMat);
    const rightArm = new THREE.Mesh(new THREE.BoxGeometry(0.2, 0.9, 0.2), armMat);
    leftArm.position.set(-0.65, 1.2, 0);
    rightArm.position.set(0.65, 1.2, 0);
    body.add(leftArm, rightArm);
    leftArmRef.current = leftArm;
    rightArmRef.current = rightArm;

    laptop.position.set(0.85, 1.25, 0);
    body.add(laptop);

    scene.add(body);
    bodyRef.current = body;

    function onResize() {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    }
    window.addEventListener("resize", onResize);

    let rafId = 0;
    function loop() {
      // Advance phase only when scroll changes
      const sy = window.scrollY;
      const deltaScroll = sy - lastScrollRef.current;
      lastScrollRef.current = sy;
      const freq = 0.02; // step size per px scrolled
      phaseRef.current += deltaScroll * freq;

      const phase = phaseRef.current;
      if (leftLegRef.current && rightLegRef.current && leftArmRef.current && rightArmRef.current && bodyRef.current) {
        leftLegRef.current.rotation.x = Math.sin(phase) * 0.85;
        rightLegRef.current.rotation.x = Math.sin(phase + Math.PI) * 0.85;
        leftArmRef.current.rotation.x = Math.sin(phase + Math.PI) * 0.6;
        rightArmRef.current.rotation.x = Math.sin(phase) * 0.6;
        // Move forward only based on absolute scroll
        const distance = sy * 0.01;
        bodyRef.current.position.z = -distance;
        camera.position.z = 7 + distance * 0.05;
        propsRef.current.forEach((p, i) => {
          const baseZ = -i * 6 - 6;
          p.position.z = baseZ + distance * 0.7;
        });
      }

      renderer.render(scene, camera);
      rafId = requestAnimationFrame(loop);
    }
    loop();

    sceneRef.current = scene;
    cameraRef.current = camera;
    rendererRef.current = renderer;

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("resize", onResize);
      renderer.dispose();
    };
  }, []);

  return <canvas ref={canvasRef} className="pointer-events-none fixed inset-0 -z-10 h-screen w-screen" />;
}


