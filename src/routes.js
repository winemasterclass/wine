import Home from './views/Home.vue'
import About from './views/About.vue'
import Classes from './views/Classes/Classes.vue'
import Class from './views/Classes/Class.vue'
import Register from './views/Register.vue'
import Courses from './views/Courses/Courses.vue'
import Course from './views/Courses/Course.vue'
import NotFound from './views/NotFound.vue'

/** @type {import('vue-router').RouterOptions['routes']} */

export const routes = [
  { 
    path: '/', 
    name: 'Home',
    component: Home,
    meta: { title: 'Home' } 
  },
  {
    path: '/about',
    name: 'About',
    meta: { title: 'About' },
    component: About,
    // example of route level code-splitting
    // this generates a separate chunk (About.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () => import('./views/About.vue')
  },
  {
    path: '/classes',
    name: 'Classes',
    meta: { title: 'Classes' },
    component: Classes,
    // example of route level code-splitting
    // this generates a separate chunk (About.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () => import('./views/Classes/Classes.vue')
  },
  {
    path: '/class/:slug',
    name: 'Class',
    meta: { title: 'Class' },
    component: Class,
    props: true
    // example of route level code-splitting
    // this generates a separate chunk (About.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () => import('./views/Classes/Class.vue')
  },
  {
    path: '/register/:slug',
    name: 'Register',
    meta: { title: 'Register' },
    component: Register,
    // example of route level code-splitting
    // this generates a separate chunk (About.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () => import('./views/Register.vue')
  },
  {
    path: '/courses',
    name: Courses,
    meta: { title: 'Courses' },
    component: Courses,
    // example of route level code-splitting
    // this generates a separate chunk (About.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () => import('./views/Courses/Courses.vue')
  },
  {
    path: '/course/:slug',
    name: 'Course',
    meta: { title: 'Course' },
    component: Course,
    props: true
    // example of route level code-splitting
    // this generates a separate chunk (About.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () => import('./views/Courses/Course.vue')
  },
  { 
    path: '/:path(.*)',
    name: 'NotFound',
    component: NotFound },
]
