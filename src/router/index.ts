import {
    createRouter,
    createWebHistory,
} from 'vue-router'
import type {RouteRecordRaw} from 'vue-router'
import MainLayout from "../layouts/Layout.vue"
import Login from "../components/Login.vue";
import SignUp from "../components/SignUp.vue";
import HomeViews from "../views/HomeViews.vue";
import NotFound from "../components/NotFound.vue";
import AboutViews from "../views/AboutViews.vue";
import ContactViews from "../views/ContactViews.vue";


const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'Home',
        redirect: "/dashboard",
        component: MainLayout,
        meta: {requiresAuth: true},
        children: [
            {
                path: "/dashboard",
                name: "HomeViews",
                component: HomeViews,
                meta: {requiresAuth: true},
            },
            {
                path: "/about",
                name: "AboutView",
                component: AboutViews,
                meta: {requiresAuth: true},
            },
            {
                path: "/contact",
                name: "Contact",
                component: ContactViews,
                meta: {requiresAuth: true},
            }
        ]
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
    }, {
        path: '/:pathMatch(.*)*',
        name: 'NotFound',
        component: NotFound
    }
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
