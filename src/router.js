import {createWebHistory, createRouter} from 'vue-router'
import Home from '@/views/Home.vue'
import About from './views/About.vue';
import Todo from './views/Todo.vue';

const routes = [
    {
        path:"/",   //-http://localhost:5174/
        name:"Home",
        component:Home
    },
    {
        path:'/about',   //-http://localhost:5174/about
        name:'About',
        component:About
    },
    {
        path:'/todo',   //-http://localhost:5174/todo
        name:'Todo',
        component:Todo
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes //routes:routes
})

export default router