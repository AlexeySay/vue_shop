<template>
  <div class="v-cart-item">
      
    <img class="v-cart-item__image" :src=" require('../assets/images/' + cart_item_data.image) " alt="img">
    
    <div class="v-cart-item__info">
        <p>{{ cart_item_data.name }}</p>
        <p>{{ cart_item_data.price }}$</p>
        <p>Artricle:{{ cart_item_data.article }}</p>
    </div>

    <div>
        Quantity:
        <button @click="quantityPlus">+</button>
        {{ cart_item_data.quantity }}
        <button @click="quantityMinus">-</button>
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
    width: 100%;
    height: 280px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    padding: 20px;
    margin: 20px;
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
    height: 50px;
    font-family: consolas;
    padding: 5px 10px;
    background-color: #e23d;
    transition: .2s linear;
    border: 0;
    color: #fff;
    font-size: 1.6vw;
    border-radius: 3px;
}
img {
    object-fit: cover;
    min-width: 9vw;
    width: 9vw;
    max-height: 100%;
}
@media (max-width: 1270px) {
    .v-cart-item {
        font-size: 2.2vw;
    }
    .btn__delete {
        font-size: 2.5vw;
    }
}
</style>