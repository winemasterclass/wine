// Website Pages
import Home from './views/Home.vue'
import NotFound from './views/NotFound.vue'

// Landing Pages
import Register1 from './views/Register/Register1.vue'

// Router Import
/** @type {import('vue-router').RouterOptions['routes']} */

// Router Configuration
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
    // example of route level code-splitting
    // this generates a separate chunk (About.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('./views/Contact.vue')
  },
  {
    path: '/videos',
    name: 'Videos',
    meta: { title: 'Videos' },
    // example of route level code-splitting
    // this generates a separate chunk (About.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('./views/Videos/Videos.vue')
  },
  {
    path: '/video/:slug',
    name: 'Video',
    meta: { title: 'Video' },
    props: true,
    // example of route level code-splitting
    // this generates a separate chunk (About.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('./views/Videos/Video.vue')
  },
  {
    path: '/courses',
    name: 'Courses',
    meta: { title: 'Courses' },
    // example of route level code-splitting
    // this generates a separate chunk (About.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('./views/Courses/Courses.vue')
  },
  {
    path: '/course/:slug',
    name: 'Course',
    meta: { title: 'Course' },
    props: true,
    // example of route level code-splitting
    // this generates a separate chunk (About.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('./views/Courses/Course.vue')
  },
  {
    path: '/register/wine-tasting-crash-course',
    name: 'Wine Tasting Crash Course',
    meta: { title: 'Wine Tasting Crash Course' },
    props: true,
    component: Register1,
    // example of route level code-splitting
    // this generates a separate chunk (About.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () => import('./views/Register/Register1.vue'),
    meta: {
      hideNavbar: true,
     }
  },
  { 
    path: '/:path(.*)',
    name: 'NotFound',
    component: NotFound },
]
