import Home from './views/Home.vue'
import Contact from './views/Contact.vue'
import Videos from './views/Videos/Videos.vue'
import Video from './views/Videos/Video.vue'
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
    path: '/contact',
    name: 'Contact',
    meta: { title: 'Contact' },
    component: Contact,
    // example of route level code-splitting
    // this generates a separate chunk (About.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () => import('./views/Contact.vue')
  },
  {
    path: '/videos',
    name: 'Videos',
    meta: { title: 'Videos' },
    component: Videos,
    // example of route level code-splitting
    // this generates a separate chunk (About.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () => import('./views/Videos/Videos.vue')
  },
  {
    path: '/video/:slug',
    name: 'Video',
    meta: { title: 'Video' },
    component: Video,
    props: true
    // example of route level code-splitting
    // this generates a separate chunk (About.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () => import('./views/Videos/Video.vue')
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
