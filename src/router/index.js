import Vue from 'vue'
import VueRouter from 'vue-router'

// Маршруты
import Login from '@/views/LoginPage.vue'
import Home from '@/views/HomePage.vue'

Vue.use(VueRouter)

const routes = [
        {
        path: '/login',
        name: 'Login',
        component: Login
    },
    {
        path: '/',
        name: 'Home',
        component: Home
    },

]

const router = new VueRouter({
    mode: 'history',
    routes    
})

export default router
