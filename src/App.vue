<template>
    <div id="app">
        <v-main-wrapper />
    </div>
</template>

<script>
import vMainWrapper from './components/v-main-wrapper'

export default {
    name: 'App',
    components: {
        vMainWrapper
    }
}
</script>

<style>
#app {
    font-family: Consolas, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-size: 20px;
    text-align: center;
    color: #2c3e50;
}
</style>
