<template>
    <div class="v-catalog">
        <h3>Catalog</h3>
        <v-catalog-item />
    </div>
</template>

<script>
import vCatalogItem from './v-catalog-item'

export default {
    name: 'v-catalog',
    props: {},
    data() {
        return {}
    },
    components: {
        vCatalogItem,
    },
    computed: {}
}
</script>

<style>

</style>