import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex);

let store = new Vuex.Store({
    state: {
        products: [],
        cart: []
    },
    mutations: {
        SET_PRODUCTS_TO_STATE: (state, products) => {
            state.products = products;
        },
        SET_CART: (state, product) => {
            let isProductExist = false
            state.cart.map(function (item) {
              if (item.article === product.article) {
                isProductExist = true
                item.quantity++
              }
            })
            isProductExist || state.cart.push({ ...product, quantity: 1 })
        },
        REMOVE_FROM_CART: (state, index) => {
            state.cart.splice(index, 1)
        },
        QUANTITY_PLUS: (state, index) => {
            state.cart[index].quantity++
        },
        QUANTITY_MINUS: (state, index) => {
            if(state.cart[index].quantity > 1) {
                state.cart[index].quantity--
            }
        }
    },
    actions: {
        GET_PRODUCTS_FROM_API({ commit }) {
            return axios('http://localhost:3000/products', {
                method: "GET"
            })
                .then((products) => {
                    commit('SET_PRODUCTS_TO_STATE', products.data)
                    return products;
                })
                .catch((error) => {
                    console.log(error)
                    return error;
                })
        },
        ADD_TO_CART({commit}, product) {
            commit('SET_CART', product);
        },
        DELETE_FROM_CART({commit}, index) {
            commit('REMOVE_FROM_CART', index);
        },
        QUANTITY_PLUS({commit}, index) {
            commit('QUANTITY_PLUS', index);
        },
        QUANTITY_MINUS({commit}, index){
            commit('QUANTITY_MINUS', index)
        }
    },
    getters: {
        PRODUCTS(state) {
            return state.products;
        },
        CART(state) {
            return state.cart;
        }
    }
});

export default store;