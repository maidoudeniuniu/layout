import {createStore,Store} from 'vuex'
import {InjectionKey} from 'vue'
import nav from './modules/nav'

export const key: InjectionKey<Store<state>> = Symbol('key')

export type state ={
  count:number
}
export default createStore({
    state:{
      count:0
    },
    mutations:{
      add(state){
        state.count +=1
      }
    },
    modules:{
      nav
    }
  })