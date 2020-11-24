<template>
    <div class="v-cart">

        <div class="button">
            <router-link :to="{name: 'catalog'}">
                <div class="router__link"> Back to catalog </div>
            </router-link>
        </div>
        
        <header class="header">
            <h3 class="cart__title">Cart</h3>
        </header>

        <div class="v-cart__total">
            <div>Total</div>
            <div>{{ cartTotalCost }} $</div>
        </div>

        <div class="cart__inner">
            <p v-if="!cart_data.length">There are no products in your cart</p>

            <v-cart-item 
                v-for="(item, index) in cart_data"
                :key="item.article"
                :cart_item_data="item"
                @deleteFromCard="deleteFromCard(index)"
                @quantityPlus="quantityPlus(index)"
                @quantityMinus="quantityMinus(index)"
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
    computed: {
        cartTotalCost() {
            let result = []
            if (this.cart_data.length) {
                for (let item of this.cart_data) {
                    result.push(item.price * item.quantity)
                }
                result = result.reduce(function (sum, el) {
                    return sum + el; 
                })
                return result.toFixed(2);
            } else {
            return 0
            }
        }
    },
    methods: {
        ...mapActions([
            'DELETE_FROM_CART',
            'QUANTITY_PLUS',
            'QUANTITY_MINUS'
        ]),
        quantityPlus(index) {
            this.QUANTITY_PLUS(index)
        },
        quantityMinus(index) {
            this.QUANTITY_MINUS(index)
        },
        deleteFromCard(index) {
            this.DELETE_FROM_CART(index)
        }
    }
}
</script>

<style lang="scss">

.v-cart {
    width: 100vw;
    display: grid;
    grid-template-columns: 75vw 25vw;
    grid-template-rows: 10vh 90vh;
    grid-template-areas: 
    "header button"
    "items total";
    .header {
        grid-area: header;
        border-bottom: 1px solid #ccc;
        .cart__title {
            margin: 10px 0;
            font-size: 40px;
        }
    }
    .button {
        grid-area: button;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        .router__link {
            margin: 0;
            position: unset;
        }
    }
    .cart__inner {
        grid-area: items;
        width: 100%;
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        overflow: auto;
        &::-webkit-scrollbar {
            width: 10px;
            border: 1px solid #ccc;
            border-radius: 5px;
            margin: 10px 0;
        }
        &::-webkit-scrollbar-thumb {
            background-color: #ccc;
            border-radius: 5px;
        }
    }
    .v-cart__total {
        grid-area: total;
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        font-size: 2vw;
    }
}
a {
    text-decoration: none;
}
</style>