import {createRouter, createWebHistory} from 'vue-router'
import Login from "../components/Login.vue";
import SignUp from "../components/SignUp.vue";
import HomeViews from "../views/HomeViews.vue";
import Auth from "../components/Auth.vue";


const routes = [
    {
        path: "/auth",
        name: "Auth",
        component: Auth
    },
    {
        path: '/',
        name: 'Home',
        component: HomeViews,
        meta: {
            requiresAuth: true
        }
    },
    {
        path: '/login',
        name: 'Login',
        component: Login
    },
    {
        path: '/signup',
        name: 'Signup',
        component: SignUp
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})
router.beforeEach((to, _, next) => {
    const isLoggedIn = !!localStorage.getItem("token")
    if (to.meta.requiresAuth && !isLoggedIn) {
        next('/login')
    } else {
        next()
    }
})

export function logout() {
    localStorage.removeItem("token")
}

export default router
