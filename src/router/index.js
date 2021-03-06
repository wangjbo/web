import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = 
[{
    path: '/',
    // 重定向到index路由组件
    redirect: {
        name: 'index'
    }
},
{
    path: '/index',
    name: 'index',
    component: () =>
        import('../views/Home/Index.vue')
},
{
    path: '/archives',
    name: 'archives',
    component: () =>
        import('../views/Archives/Index.vue')
},
{
    path: '/categories',
    name: 'categories',
    component: () => { return import('../views/Categories/Index.vue') }
},
{
    path: '/categories/details',
    name: 'categoriesDetails',
    component: () => { return import('../views/Categories/Details.vue') }
},
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router