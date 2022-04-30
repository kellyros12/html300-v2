import { createRouter, createWebHashHistory } from "vue-router";
import Home from '../pages/Home.vue';
import Schedule from '../pages/Schedule.vue';
import Images from '../pages/Images.vue';
import About from '../pages/About.vue';


const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: '/schedule',
    name: 'schedule',
    component: Schedule,
  },
  {
    path: '/images',
    name: 'images',
    component: Images,
  },
  {
    path: '/about',
    name: 'about',
    component: About,
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router;
