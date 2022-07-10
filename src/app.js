import Vue from "vue";
import Button from './Button'
import Icon from './icon'
import ButtonGroup from './button-group.vue'


Vue.component('a-button',Button)
Vue.component('a-icon',Icon)
Vue.component('a-button-group',ButtonGroup)


new Vue({
    el:'#app',
    data:{
        loading1:false,
        loading2:false,
        loading3:false
    }
})