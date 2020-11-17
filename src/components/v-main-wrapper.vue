<template>
    <div class="v-main-wrapper">
        <p>{{ title }}</p>
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
        return {
            title: 'Main wrapper'
        }
    },
    computed: {},
    methods: {},
    watch: {},
}
</script>

<style>

.v-main-wrapper {
    width: 100%;
    height: 90vh;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
}

</style>