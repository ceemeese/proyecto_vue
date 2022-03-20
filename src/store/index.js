import axios from 'axios'
import Vuex from 'vuex'
import Vue from 'vue'


Vue.use(Vuex);

const state = {
    entradas: []
}

const getters = {}

//to handle actions
const actions = {
    getEntradas({ commit }) {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(response => {
                commit('SET_ENTRADAS', response.data)
        })
    }
}

//to handle mutations
const mutations = {
    SET_ENTRADAS(state, entradas) {
        state.entradas = entradas
    }
}

//export store module
export default new Vuex.Store({
    state,
    getters,
    actions,
    mutations
})