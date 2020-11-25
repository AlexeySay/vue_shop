<template>
  <div class="v-cart-item">
      
    <img class="v-cart-item__image" :src=" require('../assets/images/' + cart_item_data.image) " alt="img">
    
    <div class="v-cart-item__info">
        <p>{{ cart_item_data.name }}</p>
        <p>{{ cart_item_data.price }}$</p>
        <p>Artricle:{{ cart_item_data.article }}</p>
    </div>

    <div class="item__quantity">
        <p>Quantity</p>
        <div>
            <button class="quantity__btn" @click="quantityPlus">+</button>
            {{ cart_item_data.quantity }}
            <button class="quantity__btn" @click="quantityMinus">-</button>
        </div>
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
.v-cart-item {
    height: 300px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin: 35px 25px;
    background-color: transparent;
    box-shadow: 0px 0px 4px 1px #ccc;
    transition: .2s linear;
    cursor: pointer;
    border-radius: 3px;
    font-size: 1.6vw;
    &:hover {
        box-shadow: 0px 0px 8px 1px #999;
    }
}
.btn__delete {
    cursor: pointer;
    height: 45px;
    width: 120px;
    font-family: consolas;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 5px 10px;
    background-color: #e23d;
    transition: .2s linear;
    border: 0;
    color: #fff;
    font-size: 20px;
    border-radius: 3px;
}
img {
    min-width: 9vw;
    width: 9vw;
    max-height: 100%;
}
@media(max-width: 650px) {
    .v-cart-item {
        margin: 35px 0;
        height: 30vw;
    }
    .btn__delete {
        height: 25px;
        width: 80px;
        font-size: 16px;
    }
    .v-cart-item__info {
        font-size: 18px;
    }
    .item__quantity {
        font-size: 18px;
    }
    .quantity__btn {
        max-width: 25px;
        max-height: 25px;
    }
}
@media(max-width: 460px) {
    .v-cart-item {
        margin: 15px 0;
        height: 30vw;
    }
    .btn__delete {
        margin-top: 10px;
    }
}
</style>