import {createStore} from 'vuex'

const store =createStore({
    state: {
        user: null
    },
    getters:{
        getUser(state){
            return state.user
        }
    },
    mutations:{
        setUser(state, user){
            state.user = user
        }
    }
})

export default store;