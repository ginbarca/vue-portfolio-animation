<template>
    <div>
        <app-header/>
        <div v-scroll-spy>
            <!--START HOME-->
            <section class="section bg-home height-100vh" id="home" ref="home">
                <div class="bg-overlay"></div>
                <canvas class="webgl"></canvas>
                <div class>
                    <div class>
                        <div class="container slidero">
                            <div class="row">
                                <div class="col-lg-8 offset-lg-2 text-white text-center">
                                    <h4 class="home-small-title">Welcome to my website</h4>
                                    <vue-typed-js class="home-title" :strings="strings" :loop="true" :start-delay="1000" :back-speed="100">
                                        <h1 class="typing home-title"></h1>
                                    </vue-typed-js>
                                    <p class="padding-t-15 home-desc mx-auto">
                                        Maecenas class semper class semper sollicitudin lectus lorem iaculis imperdiet
                                        aliquam vehicula tempor auctor curabitur pede aenean ornare.
                                    </p>
                                    <p class="play-shadow margin-t-30 margin-l-r-auto">
                                        <a v-b-modal.modal class="play-btn video-play-icon">
                                            <i class="mdi mdi-play text-center"></i>
                                        </a>
                                        <b-modal id="modal" hide-footer size="lg" centered header-close-variant="white">
                                            <youtube video-id="RnDC9MXSqCY" ref="youtube" width="900"
                                                     height="500"></youtube>
                                        </b-modal>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- Particles -->
<!--                <vue-particles class="position-relative"-->
<!--                               color="#FFF"-->
<!--                               :particles-number="25"-->
<!--                               :line-linked="false"/>-->
            </section>
            <apple-quote />
            <!--END HOME-->
<!--            <section class="section-sm bg-light">-->
<!--                <div class="container">-->
<!--                    <div class="row">-->
<!--                        <div class="col-md-3">-->
<!--                            <div class="client-images my-3 my-md-0">-->
<!--                                <img-->
<!--                                    src="@/assets/images/clients/1.png"-->
<!--                                    alt="logo-img"-->
<!--                                    class="mx-auto img-fluid d-block"-->
<!--                                />-->
<!--                            </div>-->
<!--                        </div>-->

<!--                        <div class="col-md-3">-->
<!--                            <div class="client-images my-3 my-md-0">-->
<!--                                <img-->
<!--                                    src="@/assets/images/clients/2.png"-->
<!--                                    alt="logo-img"-->
<!--                                    class="mx-auto img-fluid d-block"-->
<!--                                />-->
<!--                            </div>-->
<!--                        </div>-->

<!--                        <div class="col-md-3">-->
<!--                            <div class="client-images my-3 my-md-0">-->
<!--                                <img-->
<!--                                    src="@/assets/images/clients/3.png"-->
<!--                                    alt="logo-img"-->
<!--                                    class="mx-auto img-fluid d-block"-->
<!--                                />-->
<!--                            </div>-->
<!--                        </div>-->

<!--                        <div class="col-md-3">-->
<!--                            <div class="client-images my-3 my-md-0">-->
<!--                                <img-->
<!--                                    src="@/assets/images/clients/4.png"-->
<!--                                    alt="logo-img"-->
<!--                                    class="mx-auto img-fluid d-block"-->
<!--                                />-->
<!--                            </div>-->
<!--                        </div>-->
<!--                    </div>-->
<!--                </div>-->
<!--            </section>-->
            <app-footer/>
        </div>
    </div>
</template>
<script>
import {AppHeader, AppFooter} from '@components';

import * as THREE from "three";
import AppleQuote from "~/home/apple-quote/apple-quote";

export default {
    name: 'AppHome',
    components: {
        AppleQuote,
        AppHeader,
        AppFooter
    },
    data() {
        return {
            camera: null,
            scene: null,
            renderer: null,
            controls: null,
            loader: null,
            plane: null,
            clock: new THREE.Clock(),
            mouseY: 0,
            strings: ['Viet Anh dep trai ', 'Viet Anh developer ', 'Viet Anh superman boiz!!! '],
            sizes: {
                width: window.innerWidth,
                height: window.innerHeight
                // width: this.$refs.home.clientWidth,
                // height: this.$refs.home.clientHeight,
            }
        }
    },
    mounted() {
        this.init();
        window.addEventListener('resize', () => {
            // Update sizes
            this.sizes.width = this.$refs.home.clientWidth;
            this.sizes.height = this.$refs.home.clientHeight;

            // Update camera
            this.camera.aspect = this.sizes.width / this.sizes.height
            this.camera.updateProjectionMatrix()

            // Update renderer
            this.renderer.setSize(this.sizes.width, this.sizes.height)
            this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
        });
        window.addEventListener('mousemove', this.animateTerrain);
    },
    methods: {
        init() {
            const canvas = document.querySelector('canvas.webgl');

            this.scene = new THREE.Scene();

            this.loader = new THREE.TextureLoader();
            const texture = this.loader.load('/images/texture.jpeg');
            const height = this.loader.load('/images/height.png');
            const alpha = this.loader.load('/images/alpha.png');
            const geometry = new THREE.PlaneBufferGeometry(4, 4, 38, 38);
            const material = new THREE.MeshStandardMaterial({
                color: 'gray',
                map: texture,
                displacementMap: height,
                alphaMap: alpha,
                transparent: true,
                displacementScale: .6,
                depthTest: false
            });
            this.plane = new THREE.Mesh(geometry, material);
            this.plane.rotation.x = 181;
            this.scene.add(this.plane);

            const pointLight = new THREE.PointLight(0x00b3ff, 3);
            pointLight.position.x = 2
            pointLight.position.y = 3
            pointLight.position.z = 4
            this.scene.add(pointLight)

            this.camera = new THREE.PerspectiveCamera(75, this.sizes.width / this.sizes.height, 0.1, 100)
            this.camera.position.x = 0
            this.camera.position.y = 0
            this.camera.position.z = 3
            this.scene.add(this.camera)

            this.renderer = new THREE.WebGLRenderer({
                canvas: canvas
            })
            this.renderer.setSize(this.sizes.width, this.sizes.height)
            this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
            this.animate();
        },
        animate() {
            const elapsedTime = this.clock.getElapsedTime();

            // Update objects
            this.plane.rotation.z = .5 * elapsedTime;
            this.plane.material.displacementScale = 1 + this.mouseY * 0.001;

            // Update Orbital Controls
            // controls.update()

            // Render
            this.renderer.render(this.scene, this.camera)

            // Call tick again on the next frame
            window.requestAnimationFrame(this.animate);
        },
        animateTerrain(e) {
            this.mouseY = e.clientY;
        }
    }
};
</script>

<style scoped lang="scss">
::v-deep .modal-content {
    background-color: #000000;
    color: white;
    background: none;
    border: none;
}

::v-deep .modal-header {
    border: none;
}

::v-deep .modal-backdrop {
    opacity: 0.5;
}

::v-deep .typed-element {
    justify-content: center;
}

.webgl {
    opacity: 0.95;
    position: absolute;
    height: 100%;
    width: 100%;
    right: 0;
    bottom: 0;
    left: 0;
    top: 0;
}
</style>