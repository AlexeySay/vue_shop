<template>
  <div id="v-cart-item">
      
    <div class="v-cart-item__info">
        <p>{{ cart_item_data.name }}</p>
        <p>{{ cart_item_data.price }}$</p>
        <p>Artricle:{{ cart_item_data.article }}</p>

        <p>
            Quantity:
            <button @click="quantityPlus">+</button>
            {{ cart_item_data.quantity }}
            <button @click="quantityMinus">-</button>
        </p>
    </div>

    <button class="btn__delete" @click="deleteFromCard" >Delete</button>
  </div>
</template>

<script>

export default {
    name: 'v-cart-item',
    props: {
        cart_item_data: {
            type: Object,
            default() {
                return {}
            }
        }
    },
    methods: {
        quantityPlus() {
            this.$emit('quantityPlus')
        },
        quantityMinus() {
            this.$emit('quantityMinus')
        },
        deleteFromCard() {
            this.$emit('deleteFromCard')
        }
    },
    data() {
        return {}
    },
    computed: {},
}
</script>

<style lang='scss'>
#v-cart-item {
    width: 30%;
    padding: $padding*2;
    margin: $margin*2;
    background-color: transparent;
    box-shadow: 0px 0px 4px 1px #ccc;
    transition: .2s linear;
    cursor: pointer;
    border-radius: 3px;
    &:hover {
        box-shadow: 0px 0px 8px 1px #999;
    }
}
.btn__delete {
    cursor: pointer;
    font-family: consolas;
    padding: 5px 10px;
    background-color: #e23d;
    transition: .2s linear;
    border: 0;
    color: #fff;
    font-size: 16px;
    border-radius: 3px;
}
</style>