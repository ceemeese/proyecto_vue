import { createStore } from 'vuex'
import axios from 'axios'



export default createStore({

    state: {
        entradas: [],
    },

    getters: {

    },

    actions: {
        getEntradas({ commit }) {
            axios.get('https://jsonplaceholder.typicode.com/posts')
                .then(response => {
                    commit('SET_ENTRADAS', response.data)
            })
        }
    },

    mutations: {
        SET_ENTRADAS(state, entradas) {
            state.entradas = entradas
        }
    }
})