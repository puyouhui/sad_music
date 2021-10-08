import Vue from 'vue'
import VueRouter from 'vue-router'
// import { component } from 'vue/types/umd'
// import Home from '../views/Home.vue'

Vue.use(VueRouter)

const Home = () =>
  import ('@/views/home/Home')

const Search = () =>
  import ('@/views/search-view/SearchView')

const Profile = () =>
  import ('@/views/profile/Profile')

const RanKing = () =>
  import ('@/views/ranking/RanKing')

const Recommended = () =>
  import ('@/views/day-recommended/DayRecommended')

const LoginHome = () =>
  import ('@/views/loginHome/LoginHome')

const Play = () =>
  import ('@/views/paly/Play')

const PlayList = () =>
  import ('@/views/playlist/PlayList')

const PlayListSquare = () =>
  import ('@/views/playlist/PlayListSquare')

const AuthorList = () =>
  import ('@/views/author/AuthorList')

const Author = () =>
  import ('@/views/author/author')

const LikeMusicList = () =>
  import ('@/views/profile/LikeMusicList')
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
    path: '/ranking',
    component: RanKing
  },
  {
    path: '/search',
    component: Search
  },
  {
    path: '/profile',
    component: Profile
  },
  {
    path: '/login',
    component: LoginHome
  },
  {
    path: '/play',
    component: Play
  },
  {
    path: '/recommended',
    component: Recommended
  },
  {
    path: '/playlist',
    component: PlayList
  },
  {
    path: '/playlistsquare',
    component: PlayListSquare
  },
  {
    path: '/authorlist',
    component: AuthorList
  },
  {
    path: '/author',
    component: Author
  },
  {
    path: '/likemusiclist',
    component: LikeMusicList
  }

]

const router = new VueRouter({
  routes,
  mode: 'history'
})

export default router
