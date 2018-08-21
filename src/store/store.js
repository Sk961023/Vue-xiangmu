import Vue from 'vue'
import Vuex from 'vuex'
import login from './modules/login'

export default new Vuex.Store({
    modules:{
        login:login
    }
})