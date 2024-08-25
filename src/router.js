import { createRouter, createWebHashHistory } from 'vue-router';
import Home from "./components/Home.vue"
import Docs from "./components/Docs.vue"
import Projects from "./components/Projects.vue"
import About from "./components/About.vue"

const routes = [
  { path: '/', component: Home },
  { path: '/home', component: Home },
  { path: '/projects', component: Projects },
  { path: '/about', component: About },
  { path: '/docs', component: Docs }
];

const router = createRouter({
  history: createWebHashHistory(), 
  routes
});

export default router;
