<template>
  <div class="v-catalog-item">
      <p>{{ product__data.name }}</p>
      <p>{{ product__data.price }}$</p>
      <button class="btn" @click="sendDataToParent">Add to cart</button>
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
        sendDataToParent() {
            this.$emit('sendArticle', this.product__data.article )
        }
    }
}
</script>

<style lang="scss">

.v-catalog-item {
    min-width: 200px;
    flex: 1 1 0;
    padding: $padding;
    margin: $margin*2;
    background-color: rgba(51, 51, 51, 0.2);
    box-shadow: 1px 1px 3px -1px #000;
    transition: .2s linear;
    cursor: pointer;
    &:hover {
        box-shadow: 1px 1px 6px -1px #000;
    }
    .btn {
        cursor: pointer;
        font-family: consolas;
        border: 1px solid #000;
        padding: 5px 10px;
        background-color: #fff;
        transition: .2s linear;
    }
}

</style>