<template>
    <div class="v-main-wrapper">
        <v-catalog />
        <v-cart />
    </div>
</template>

<script>
import vCatalog from './v-catalog'
import vCart from './v-cart'

export default {
    name: "v-main-wrapper",
    components: {
        vCatalog,
        vCart
    },
    props: {},
    data() {
        return {}
    },
    computed: {},
    methods: {},
    watch: {},
}
</script>

<style lang="scss">
body {margin: 0;} :focus {outline: none;} *{box-sizing: border-box;}

.v-main-wrapper {
    width: 100%;
    max-width: 85vw;
    margin: 0 auto;

    display: flex;
    flex-direction: column;
    justify-content: flex-start;
}

</style>