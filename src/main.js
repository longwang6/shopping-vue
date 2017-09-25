// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Layout from './components/layout'
import VueRouter from 'vue-router'
import indexPage from './pages/index'
import detailPage from './pages/detail'
import CouPage from './pages/detail/count'
import ForPage from './pages/detail/forecast'
import AnaPage from './pages/detail/analysis'
import PubPage from './pages/detail/publish'
import VueResource from 'vue-resource'
Vue.use(VueRouter)
Vue.use(VueResource)
let router = new VueRouter({
        mode: 'history',
        routes: [{
            path: '/',
            component: indexPage
        }, {
            path: '/detail',
            component: detailPage,
            redirect: '/detail/count',
            children: [{
                path: 'count',
                component: CouPage
            }, {
                path: 'forecast',
                component: ForPage
            }, {
                path: 'analysis',
                component: AnaPage
            }, {
                path: 'publish',
                component: PubPage
            }, ]
        }]
    })
    // Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    template: '<layout/>',
    components: { Layout }
})