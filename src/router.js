import Vue from "vue";
import VueRouter from "vue-router";

import formComponent from './components/formComponent.vue'
import usuariosComp from './components/usuariosComp.vue'


Vue.use(VueRouter)

export const router = new VueRouter({
    mode : 'history',
    routes : [
        {path : '/', redirect :  '/formulario'},
        {path : '/formulario', component : formComponent},
        {path : '/usuarios', component : usuariosComp}
        
        
    ] 
})