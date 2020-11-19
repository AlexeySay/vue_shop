<template>
    <div class="v-cart">
        <router-link :to="{name: 'catalog'}">
            <div class="router__link"> Back to catalog </div>
        </router-link>
        
        <h3 class="cart__title">Cart</h3>
        <p v-if="!cart_data.length">There are no products in your cart</p>

        <div class="cart__inner">
            <v-cart-item 
                v-for="(item, index) in cart_data"
                :key="item.article"
                :cart_item_data="item"
                @deleteFromCard="deleteFromCard(index)"
            />
        </div>

    </div>
</template>

<script>
import vCartItem from './v-cart-item'
import {mapActions} from 'vuex'

export default {
    name: 'v-cart',
    components: {
        vCartItem,
    },
    props: {
        cart_data: {
            type: Array,
            default() {
                return {}
            }
        }
    },
    data() {
        return {}
    },
    methods: {
        ...mapActions([
            'DELETE_FROM_CART'
        ]),
        deleteFromCard(index) {
            this.DELETE_FROM_CART(index)
        }
    }
}
</script>

<style lang="scss">
    .v-cart {
        display: flex;
        flex-direction: column;

    .cart__title {
        margin: 30px 0;
        font-size: 40px;
    }
    .cart__inner {
        width: 100%;
        display: flex;
        justify-content: space-around;
        flex-wrap: wrap;
    }
}
    
</style>