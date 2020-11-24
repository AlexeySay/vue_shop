<template>
    <div class="v-main-wrapper">
        <keep-alive>
            <router-view></router-view>
        </keep-alive>
    </div>
</template>

<script>
import {mapGetters} from 'vuex'

export default {
    name: "v-main-wrapper",
    props: {},
    data() {
        return {}
    },
    computed: {
        ...mapGetters([
            'CART'
        ])
    },
    methods: {},
    watch: {},
}
</script>

<style lang="scss">
body {margin: 0;}  *{box-sizing: border-box;} button {cursor: pointer;} p {margin: 0;}

.router__link {
    position: fixed;
    top: 0;
    right: 0;
    margin: 20px 20px 0 0;
    padding: 5px 10px;
    background-color: #fff;
    border: 3px solid #1f9c3a;
    cursor: pointer;
    transition: .22s linear;
    font-size: 1.6vw;
    &:hover {
        background-color: #1f9c3a;
        color: #fff;
    }
}
a {
    object-fit: cover;
    color: #1f9c3a;
}
.v-main-wrapper {
    width: 100%;
    margin: 0 auto;

    display: flex;
    flex-direction: column;
    justify-content: flex-start;
}
@media(max-width: 650px) {
    .router__link {
        margin: 1vw 1vw 0 0;
        font-weight: 900;
        font-size: 2vw;
    }
}
@media(max-width: 460px) {
    .router__link {
        font-size: 2.4vw;
    }
}

</style>