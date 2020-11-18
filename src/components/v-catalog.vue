<template>
    <div class="v-catalog">
        <h1 class="catalog__title">Catalog</h1>
        <div class="catalog__inner">
            <v-catalog-item 
                v-for="product in PRODUCTS"
                :key="product.article"
                :product__data="product"
                @sendArticle="consoleLogItems" 
            />
        </div>
    </div>
</template>

<script>
import vCatalogItem from './v-catalog-item'
import {mapActions, mapGetters} from 'vuex'

export default {
    name: 'v-catalog',
    props: {},
    data() {
        return {
            
        }
    },
    components: {
        vCatalogItem,
    },
    computed: {
        ...mapGetters([
            'PRODUCTS'
        ]),
    },
    methods: {
        ...mapActions([
            'GET_PRODUCTS_FROM_API'
        ]),
        consoleLogItems(data) {
            console.log(data);
        }
    },
    mounted() {
        this.GET_PRODUCTS_FROM_API()
    }
}
</script>

<style lang="scss">

.v-catalog {
    display: flex;
    flex-direction: column;

    .catalog__title {
        margin: 20px 0 0;
        font-size: 40px;
    }
    .catalog__inner {
        width: 100%;
        display: flex;
        flex-wrap: wrap;
    }
}

</style>