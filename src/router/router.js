import Vue from 'vue'
import VueRouter from 'vue-router'
import routerItem from './routerItem'


Vue.use(VueRouter)

const routes = new VueRouter({
    mode: 'history',
    routes: routerItem,
})


export default routes