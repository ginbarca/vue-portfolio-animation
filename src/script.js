// import * as THREE from 'three'
// import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls.js'
// import {GLTFLoader} from 'three/examples/jsm/loaders/GLTFLoader.js';
// import {EffectComposer} from 'three/examples/jsm/postprocessing/EffectComposer.js';
// import {RenderPass} from 'three/examples/jsm/postprocessing/RenderPass.js';
// import {UnrealBloomPass} from 'three/examples/jsm/postprocessing/UnrealBloomPass.js';
// import {GUI} from 'three/examples/jsm/libs/dat.gui.module.js';
//
// import {gsap, Power1} from 'gsap'
// import {ScrollTrigger} from "gsap/ScrollTrigger";
//
//
// // // Debug
// // const gui = new dat.GUI()
//
// // Canvas
// const canvas = document.querySelector('canvas.webgl')
//
// // Scene
// const scene = new THREE.Scene();
//
// const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
// // directionalLight.castShadow = true;
// scene.add(directionalLight);
// const ambientLight = new THREE.AmbientLight(0xffffff, 0.95)
// scene.add(ambientLight);
//
// /**
//  * Sizes
//  */
// const sizes = {
//     width: window.innerWidth,
//     height: window.innerHeight
// }
//
// /**
//  * Camera
//  */
// // Base camera
// const camera = new THREE.PerspectiveCamera(100, sizes.width / sizes.height, 0.5, 1000);
// camera.position.x = -2
// camera.position.y = 20
// camera.position.z = 75
// scene.add(camera)
//
// // Controls
// const controls = new OrbitControls(camera, canvas)
// controls.enableDamping = true
// controls.enableZoom = false
// scene.add(new THREE.AxesHelper(20));
// /**
//  * Renderer
//  */
// const renderer = new THREE.WebGLRenderer({
//     canvas: canvas,
//     alpha: true,
//     gammaOutput: true,
// });
// renderer.outputEncoding = THREE.sRGBEncoding;
// renderer.setSize(sizes.width, sizes.height)
// renderer.setClearColor(0x0D1319, 0)
//
// const clock = new THREE.Clock()
//
// window.addEventListener('resize', onWindowResize);
//
// function onWindowResize() {
//
//     renderer.setSize(sizes.width, sizes.height);
//     camera.aspect = sizes.width / sizes.height;
//
//     camera.updateProjectionMatrix();
//     renderer.render(scene, camera)
// }
//
// let mixer;
//
// const loader = new GLTFLoader().setPath('robot/');
// const params = {
//     exposure: 1,
//     bloomStrength: 1.5,
//     bloomThreshold: 0,
//     bloomRadius: 0
// };
//
// const renderScene = new RenderPass(scene, camera);
// const bloomPass = new UnrealBloomPass(new THREE.Vector2(window.innerWidth, window.innerHeight), 1.5, 0.4, 0.85);
// bloomPass.threshold = params.bloomThreshold;
// bloomPass.strength = params.bloomStrength;
// bloomPass.radius = params.bloomRadius;
//
// const composer = new EffectComposer(renderer);
// composer.addPass(renderScene);
// composer.addPass(bloomPass);
//
// loader.load('scene.gltf', function (gltf) {
//     gltf.scene.children[0].position.set(-1, 0, 0);
//     scene.add(gltf.scene);
//     mixer = new THREE.AnimationMixer(gltf.scene);
//     mixer.clipAction(gltf.animations[0]).play();
//     gltf.scene.traverse(c => {
//         c.castShadow = true;
//         c.receiveShadow = true;
//     })
//     animate();
//
// }, undefined, function (error) {
//     console.error(error);
// });
//
// const gui = new GUI();
//
// gui.add(params, 'exposure', 0.1, 2).onChange(function (value) {
//
//     renderer.toneMappingExposure = Math.pow(value, 4.0);
//
// });
//
// gui.add(params, 'bloomThreshold', 0.0, 1.0).onChange(function (value) {
//
//     bloomPass.threshold = Number(value);
//
// });
//
// gui.add(params, 'bloomStrength', 0.0, 3.0).onChange(function (value) {
//
//     bloomPass.strength = Number(value);
//
// });
//
// gui.add(params, 'bloomRadius', 0.0, 1.0).step(0.01).onChange(function (value) {
//
//     bloomPass.radius = Number(value);
//
// });
//
// function animate() {
//     requestAnimationFrame(animate);
//     const delta = clock.getDelta();
//     mixer.update(delta);
//     renderer.render(scene, camera)
// }
//
//
// gsap.registerPlugin(ScrollTrigger);
// // scene.rotation.set(0, 1.88, 0);
// // camera.position.set(3, 0, 5);
// let car_anim = gsap.timeline();
//
// // Full Height
//
// car_anim.to(scene.rotation, {
//     y: 0,
//     ease: Power1.easeInOut,
//     scrollTrigger: {
//         trigger: ".section-two",
//         scrub: 1,
//
//         endTrigger: ".section-four",
//         end: "top bottom"
//     }
// });
// // Slide 2
//
// car_anim.to(camera.position, {
//     x: -0.1,
//     ease: Power1.easeInOut,
//     scrollTrigger: {
//         trigger: ".section-two",
//         scrub: 1,
//
//         start: "top bottom",
//         end: "top top"
//     }
// });
//
// // Slide 3
//
// car_anim.to(scene.rotation, {
//     z: 0,
//     ease: Power1.easeInOut,
//     scrollTrigger: {
//         trigger: ".section-three",
//         scrub: 1,
//
//         start: "top bottom",
//         end: "top top"
//     }
// });
//
// // // Slide 4 - The problem child
//
// car_anim.to(scene.rotation, {
//     z: 0.02,
//     y: 2,
//     ease: Power1.easeInOut,
//     scrollTrigger: {
//         trigger: ".section-four",
//         scrub: 1,
//
//         start: "top 50%",
//         end: "top top"
//     }
// });
//
// car_anim.to(camera.position, {
//     x: 0.16,
//     ease: Power1.easeInOut,
//     scrollTrigger: {
//         trigger: ".section-four",
//         scrub: 1,
//
//         start: "top top",
//         end: "bottom top"
//     }
// });