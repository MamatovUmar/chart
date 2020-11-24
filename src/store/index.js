import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
    async getData({}, url) {
      try {
        let res = await axios.get(url)
        return res.data
      } catch (err) {
        console.error(err);
      }
    }
  },
  modules: {
  }
})
