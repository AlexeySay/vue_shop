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
            <div class="total__inner">
                <div>Total</div>
                <div>{{ cartTotalCost }} $</div>
            </div>
            <button class="pay">Pay it</button>
        </div>

        <div class="v-cart__cart">
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
    max-width: 100vw;
    min-height: 100vh;
    display: grid;
    grid-template-columns: 75vw 24vw;
    grid-template-rows: 10vh 90vh;
    grid-template-areas: 
    "header button"
    "items total";
    background-color: #dadada;
    .header {
        grid-area: header;
        display: flex;
        align-items: center;
        justify-content: center;
        .cart__title {
            font-size: 2vw;
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
    .v-cart__cart {
        grid-area: items;
        display: flex;
        height: 100%;
        justify-content: center;
        align-items: center;
        padding: 1vw;
        padding-top: 0;
        .cart__inner {
            width: 100%;
            height: 100%;
            border-radius: 5px;
            overflow: auto;
            background-color: #fff;
            &::-webkit-scrollbar {
                width: 10px;
                border: 1px solid #ccc;
                border-radius: 15px;
            }
            &::-webkit-scrollbar-thumb {
                background-color: #b6b6b6;
                border-radius: 15px;
            }
        }
    }
    .v-cart__total {
        grid-area: total;
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-start;
        padding: 1vw;
        padding-top: 0;
        .total__inner {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            width: 100%;
            height: 30%;
            font-size: 2vw;
            border-radius: 5px;
            background-color: #fff;
        }
        .pay {
            width: 100%;
            border-radius: 5px;
            background-color: #1f9c3a;
            color: #fff;
            border: 0;
            margin-top: 2vw;
            height: 4vw;
            font-family: consolas, serif;
            font-size: 20px;
            transition: .2s linear;
            &:hover {
                box-shadow: 1px 1px 4px 0px #000;
            }
        }
    }
}
a {
    text-decoration: none;
}
@media(max-width: 650px) {
    .cart__title {
        font-size: 4vw !important;
    }
    &::-webkit-scrollbar {
        width: 7px !important;
        border: 1px solid #ccc;
        border-radius: 15px;
    }
}
@media(max-width: 460px) {
    .v-cart {
        grid-template-columns: 75vw 24vw;
        grid-template-rows: 10vh 25vh 1fr;
        grid-template-areas: 
        "header button"
        "total total"
        "items items";
    }
    .total__inner {
        height: 60% !important;
        font-size: 18px !important;
    }
    .pay {
        height: 25% !important;
    }
    .cart__title {
        font-size: 20px !important;
    }
}
</style>