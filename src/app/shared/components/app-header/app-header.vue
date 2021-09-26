<template>
    <!-- STRAT NAVBAR -->
    <nav class="navbar navbar-expand-lg fixed-top navbar-custom sticky sticky-dark" id="navbar">
        <div class="container">
            <!-- LOGO -->
            <a class="navbar-brand logo text-uppercase" href="/">
                <div id="my-loading"></div>
                NVA
            </a>

            <button
                class="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarCollapse"
                aria-controls="navbarCollapse"
                aria-expanded="false"
                aria-label="Toggle navigation"
                @click="toggleMenu()"
            >
                <i class="mdi mdi-menu"></i>
            </button>
            <div class="collapse navbar-collapse" id="navbarCollapse">
                <ul class="navbar-nav navbar-center" id="mySidenav" v-scroll-spy-active="{class: 'active'}">
                    <li class="nav-item">
                        <a
                            v-scroll-to="{ el:'#home'}"
                            class="nav-link"
                            data-scroll-spy-id="home"
                            href="javascript: void(0);"
                        >Home</a>
                    </li>
                    <li class="nav-item">
                        <a
                            v-scroll-to="{ el:'#features', offset: -5}"
                            class="nav-link"
                            data-scroll-spy-id="features"
                            href="javascript: void(0);"
                        >Features</a>
                    </li>
                    <li class="nav-item">
                        <a
                            v-scroll-to="{ el:'#services', offset: -5}"
                            class="nav-link"
                            data-scroll-spy-id="services"
                            href="javascript: void(0);"
                        >Services</a>
                    </li>
                    <li class="nav-item">
                        <a
                            v-scroll-to="{ el:'#about', offset: -5}"
                            class="nav-link"
                            data-scroll-spy-id="about"
                            href="javascript: void(0);"
                        >About</a>
                    </li>
                    <li class="nav-item">
                        <a
                            v-scroll-to="{ el:'#pricing', offset: -5}"
                            class="nav-link"
                            data-scroll-spy-id="pricing"
                            href="javascript: void(0);"
                        >Pricing</a>
                    </li>
                    <li class="nav-item">
                        <a
                            v-scroll-to="{ el:'#blog'}"
                            class="nav-link"
                            data-scroll-spy-id="blog"
                            href="javascript: void(0);"
                        >Blog</a>
                    </li>
                    <li class="nav-item">
                        <a
                            v-scroll-to="{ el:'#contact'}"
                            class="nav-link"
                            data-scroll-spy-id="contact"
                            href="javascript: void(0);"
                        >Contact</a>
                    </li>
                </ul>
                <div class="nav-button ml-auto">
                    <ul class="nav navbar-nav navbar-right">
                        <li>
                            <button type="button" class="btn btn-custom navbar-btn btn-rounded">Try it Free</button>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </nav>
    <!-- END NAVBAR -->
</template>

<script>
/**
 * Navbar component
 */
import * as Vivus from 'vivus';

export default {
    name: 'AppHeader',
    mounted() {
        window.onscroll = function () {
            onwindowScroll();
        };
        new Vivus('my-loading', {
            file: '/images/loading.svg',
            type: 'sync',
            duration: 100,
        }, () => {
            // myVivus.play(myVivus.getStatus() === 'end' ? -1 : 1);
            document.getElementById("my-loading").className = "white";
        });
        let navbar = document.getElementById("navbar");

        function onwindowScroll() {
            if (
                document.body.scrollTop > 40 ||
                document.documentElement.scrollTop > 40
            ) {
                navbar.style.backgroundColor = "#272a33";
                navbar.style.padding = "10px";
            } else {
                navbar.style.backgroundColor = "";
                navbar.style.padding = "20px";
            }
        }
    },
    methods: {
        /**
         * Toggle menu
         */
        toggleMenu() {
            document.getElementById("navbarCollapse").classList.toggle("show");
        }
    }
};
</script>
<style lang="scss" scoped>
.logo {
    display: inline-flex;
}
</style>