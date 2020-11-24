<template>
  <div class="v-catalog-item">
      <img class="v-cart-item__image" :src=" require('../assets/images/' + product__data.image) " alt="img">
      <p>{{ product__data.name }}</p>
      <p>{{ product__data.price }}$</p>
      <button class="btn" @click="addToCart">Add to cart</button>
  </div>
</template>

<script>


export default {
    name: 'v-catalog-item',
    props: {
        product__data: {
            type: Object,
            default() {
                return {}
            }
        }
    },
    data() {
        return {}
    },
    methods: {
        addToCart() {
            this.$emit('addToCart', this.product__data)
        }
    },
}
</script>

<style lang="scss">

.v-catalog-item {
    min-width: 25%;
    padding: 1vw;
    margin: 2vw;
    background-color: transparent;
    box-shadow: 0px 0px 4px 1px #ccc;
    transition: .2s linear;
    cursor: pointer;
    border-radius: 3px;
    font-size: 1.8vw;
    &:hover {
        box-shadow: 0px 0px 8px 1px #999;
    }
    .btn {
        cursor: pointer;
        font-family: consolas;
        border: 0;
        padding: 5px 10px;
        background-color: #1f9c3a;
        color: #fff;
        margin: 1vw 0;
        font-size: 1.4vw;
        border-radius: 3px;
        transition: .2s linear;
    }
}

</style>