<template>
    <div class="v-catalog">
        <router-link :to="{name: 'cart', params: {cart_data: CART}}">
            <div class="router__link">You cart {{ CART.length }} </div>
        </router-link>

        <h1 class="catalog__title">Catalog</h1>

        <div class="catalog__inner">
            <v-catalog-item 
                v-for="product in PRODUCTS"
                :key="product.article"
                :product__data="product"
                @addToCart="addToCart" 
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
            'PRODUCTS',
            'CART'
        ]),
    },
    methods: {
        ...mapActions([
            'GET_PRODUCTS_FROM_API',
            'ADD_TO_CART'
        ]),
        addToCart(data) {
            this.ADD_TO_CART(data)
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
        margin: 30px 0;
        font-size: 40px;
    }
    .catalog__inner {
        width: 100%;
        display: flex;
        justify-content: space-around;
        flex-wrap: wrap;
    }
}

</style>