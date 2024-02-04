import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';
import moon_texture from '../img/moon.webp'

const Moon = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    // Базовая настройка сцены, камеры и рендерера
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true }); // alpha: true для прозрачного фона
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.shadowMap.enabled = true;
    mountRef.current.appendChild(renderer.domElement);

    // Добавление света
    const light = new THREE.DirectionalLight(0xffffff, 1);
    light.position.set(5, 5, 5);
    light.castShadow = true; // Позволяем источнику света отбрасывать тени
    scene.add(light);

    const ambientLight = new THREE.AmbientLight(0xCCCCCC);
    scene.add(ambientLight);

    // Текстура Луны
    const textureLoader = new THREE.TextureLoader();
    const moonTexture = textureLoader.load(moon_texture);

    // Создание Луны
    const geometry = new THREE.SphereGeometry(1, 32, 32);
    const material = new THREE.MeshStandardMaterial({ map: moonTexture });
    const moon = new THREE.Mesh(geometry, material);
    scene.add(moon);

    camera.position.z = 5;

    // Функция анимации
    const animate = () => {
      requestAnimationFrame(animate);

      moon.rotation.y += 0.005; // Вращение Луны

      renderer.render(scene, camera);
    };

    animate();

    // Адаптация к изменению размера окна
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', handleResize);

    // Очистка
    return () => {
      mountRef.current.removeChild(renderer.domElement);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return <div ref={mountRef} style={{ position: 'absolute', top: -120, left: 300, width: '100%', height: '100%' }}></div>;
};

export default Moon;