import { createRouter,createWebHistory} from "vue-router";
import Home from '../views/home.vue'
import Contact from '../views/contact.vue'

const routerHistory = createWebHistory();

const router = createRouter({
    history: routerHistory,
    routes: [
      {
        path: '/',
        component: Home
      },
      {
        path: '/contact',
        component: Contact
      }
    ]
  })

  export default router