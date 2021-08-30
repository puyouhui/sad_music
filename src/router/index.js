import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'

Vue.use(VueRouter)

const Home = () =>
  import ('../views/home/Home')

const Search = () =>
  import ('../views/search-view/SearchView')

const Profile = () =>
  import ('../views/profile/Profile')
const routes = [
  //主页
  {
    path: '',
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home
  },
  {
    path: '/search',
    component: Search
  },
  {
    path: '/profile',
    component: Profile
  }
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

export default router