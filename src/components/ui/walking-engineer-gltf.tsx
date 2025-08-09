"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import type { GLTF } from "three/examples/jsm/loaders/GLTFLoader";
import type { AnimationClip } from "three";

// GLTF engineer model with walk animation; steps only when user scrolls.
export function WalkingEngineerGLTF() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const mixerRef = useRef<THREE.AnimationMixer | null>(null);
  const modelRef = useRef<THREE.Object3D | null>(null);
  const clock = useRef(new THREE.Clock());
  const lastScrollRef = useRef(0);

  useEffect(() => {
    const scene = new THREE.Scene();
    scene.fog = new THREE.Fog(0x0a0a0a, 20, 120);
    const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 500);
    camera.position.set(0, 1.6, 7);

    const renderer = new THREE.WebGLRenderer({ canvas: canvasRef.current!, alpha: true, antialias: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(window.innerWidth, window.innerHeight);

    scene.add(new THREE.AmbientLight(0xffffff, 0.6));
    const dir = new THREE.DirectionalLight(0xffffff, 0.9);
    dir.position.set(5, 10, 7);
    scene.add(dir);

    // Ground + grid
    const ground = new THREE.Mesh(new THREE.PlaneGeometry(500, 500), new THREE.MeshStandardMaterial({ color: 0x0f1012, roughness: 1 }));
    ground.rotation.x = -Math.PI / 2;
    scene.add(ground);
    const grid = new THREE.GridHelper(400, 80, 0x2a2a2a, 0x1f1f1f);
    grid.position.y = 0.001;
    scene.add(grid);

    // Lazy-initialize loader on first scroll
    // Humanoid model with walk animation from three.js examples
    const engineerUrl = "https://threejs.org/examples/models/gltf/Soldier.glb";
    const lazyLoad = () => {
      const loader = new GLTFLoader();
      loader.load(engineerUrl, (gltf: GLTF) => {
      const model = gltf.scene;
      model.scale.set(1.2, 1.2, 1.2);
      model.position.set(0, 0, 0);
      // Turn the character 180 degrees around the vertical (Y) axis
      model.rotation.y = Math.PI;
      model.traverse((o: any) => {
        if (o.isMesh) o.castShadow = o.receiveShadow = true;
      });
      scene.add(model);
      modelRef.current = model;

      const mixer = new THREE.AnimationMixer(model);
      mixerRef.current = mixer;
      // Try to find a walking clip, otherwise play first
        const clip = gltf.animations.find((a: AnimationClip) => a.name.toLowerCase().includes("walk")) || gltf.animations[0];
        if (clip) {
          const action = mixer.clipAction(clip);
          action.play();
        }
      });
    };
    // Defer until first scroll
    const onFirstScroll = () => {
      window.removeEventListener("scroll", onFirstScroll);
      lazyLoad();
    };
    window.addEventListener("scroll", onFirstScroll, { passive: true });

    function onResize() {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    }
    window.addEventListener("resize", onResize);

    let rafId = 0;
    function loop() {
      const sy = window.scrollY;
      const deltaScroll = sy - lastScrollRef.current;
      lastScrollRef.current = sy;

      // Advance mixer time proportionally to scroll delta (only moves when scrolling)
      if (mixerRef.current) {
        const speed = 0.002; // decreased sensitivity
        const animAdvance = Math.abs(deltaScroll) * speed;
        mixerRef.current.update(animAdvance);
      }

      // Decrease forward displacement sensitivity
      const distance = sy * 0.005;
      if (modelRef.current) modelRef.current.position.z = -distance;
      camera.position.z = 7 + distance * 0.03;

      renderer.render(scene, camera);
      rafId = requestAnimationFrame(loop);
    }
    loop();

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("resize", onResize);
      renderer.dispose();
    };
  }, []);

  return <canvas ref={canvasRef} className="pointer-events-none fixed inset-0 -z-10 h-screen w-screen" />;
}


