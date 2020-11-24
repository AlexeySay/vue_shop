<template>
    <div class="v-catalog">
        <router-link :to="{name: 'cart', params: {cart_data: CART}}">
            <div class="router__link">You cart {{ CART.length }} </div>
        </router-link>

        <vNotification 
            :messages="messages"
            :timeout="4000"
        />
        <div class="container">
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
    </div>
</template>

<script>
import vCatalogItem from './v-catalog-item'
import {mapActions, mapGetters} from 'vuex'
import vNotification from './v-notification'

export default {
    name: 'v-catalog',
    props: {},
    data() {
        return {
            messages: []
        }
    },
    components: {
        vCatalogItem,
        vNotification
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
            .then(() => {
                let timekey = Date.now().toLocaleString()
                this.messages.unshift(
                    { name: 'Товар добавлен', bgc: 'add', icon: '✔', id: timekey}
                )
            })
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

    .container {
        max-width: 1200px;
        margin: 0 auto;
    }
    .catalog__title {
        margin: 1.5vw 0;
        font-size: 3vw;
    }
    .catalog__inner {
        width: 100%;
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
    }
}

</style>