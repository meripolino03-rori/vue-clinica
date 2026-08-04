import { createRouter, createWebHistory } from 'vue-router'

import HomeView        from '../views/HomeView.vue'
import NosotrosView    from '../views/NosotrosView.vue'
import BlogView        from '../views/BlogView.vue'
import BlogDetailView  from '../views/BlogDetailView.vue'
import ContactoView    from '../views/ContactoView.vue'
import AdultosView     from '../views/servicios/AdultosView.vue'
import InfantilView    from '../views/servicios/InfantilView.vue'

const routes = [
  { path: '/',                    name: 'home',        component: HomeView },
  { path: '/nosotros',            name: 'nosotros',    component: NosotrosView },
  { path: '/blog',                name: 'blog',        component: BlogView },
  { path: '/blog/:slug',          name: 'blog-detail', component: BlogDetailView },
  { path: '/contacto',            name: 'contacto',    component: ContactoView },
  { path: '/servicios/adultos',   name: 'adultos',     component: AdultosView },
  { path: '/servicios/infantil',  name: 'infantil',    component: InfantilView },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior() {
    return { top: 0, behavior: 'smooth' }
  }
})

export default router