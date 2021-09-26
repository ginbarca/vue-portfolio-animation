<template>
    <div id="app">
        <keep-alive>
<!--            <app-preloader/>-->
            <router-view/>
        </keep-alive>
    </div>
</template>

<script>
// import AppPreloader from "@components/app-preloader/app-preloader";

export default {
    name: 'App',
    // components: {AppPreloader},
    data() {
        return {
            preload: true
        }
    },
    created() {
        this.preload = true;
    },
    mounted() {
        this.preload = false;
    }
};
</script>
