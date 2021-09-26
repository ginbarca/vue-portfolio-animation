<template>
    <transition>
        <div class="preloader">
            <h1>Loading...</h1>
        </div>
    </transition>
</template>

<script>
export default {
    name: "AppPreloader"
}
</script>

<style lang="scss" scoped>
.preloader {
    position: absolute;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 9999;
}
</style>