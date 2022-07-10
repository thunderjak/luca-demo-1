import Vue from "vue";
import Button from './Button'
import Icon from './icon'


Vue.component('a-button',Button)
Vue.component('a-icon',Icon)


new Vue({
    el:'#app',
    data:{
        loading1:false,
        loading2:false,
        loading3:false
    }
})