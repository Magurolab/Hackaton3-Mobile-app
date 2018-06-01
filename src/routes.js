import HomePage from './pages/home.vue';
import AboutPage from './pages/about.vue';

import DynamicRoutePage from './pages/dynamic-route.vue';
import NotFoundPage from './pages/Authenticate/not-found.vue';

import PanelLeftPage from './pages/panel-left.vue';
import PanelRightPage from './pages/panel-right.vue';

import SigninPage from './pages/Authenticate/signin'
import SignupPage from './pages/Authenticate/signup'

import AddItemPage from './pages/Items/AddItem.vue';
import WishListPage from './pages/Items/WishList';
import BuyPage from './pages/Items/buy';

import InboxPage from './pages/Messages/Inbox';
import ChatboxPage from './pages/Messages/Chatbox';

import ProfilePage from './pages/User/Profile';
import UploadPhoto from './pages/TestUploadPhoto'

export default [
  {
    path: '/',
    component: HomePage,
  },
  {
    path: '/signin/',
    component: SigninPage,
  },
  {
    path: '/signup/',
    component: SignupPage,
  },
  {
    path: '/panel-left/',
    component: PanelLeftPage,
  },
  {
    path: '/panel-right/',
    component: PanelRightPage,
  },
  {
    path: '/about/',
    component: AboutPage,
  },
  {
    path: '/add-item/',
    component: AddItemPage,
  },
  {
    path: '/wish-list/',
    component: WishListPage,
  },
  {
    path: '/home/',
    component: BuyPage,
  },
  {
    path: '/inbox/',
    component: InboxPage,
  },
  {
    path: '/chatbox/',
    component: ChatboxPage,
  },
  {
    path: '/profile/',
    component: ProfilePage,
  },
  {
    path: '/photo/',
    component: UploadPhoto,
  },
  {
    path: '/dynamic-route/blog/:blogId/post/:postId/',
    component: DynamicRoutePage,
  },
  {
    path: '(.*)',
    component: NotFoundPage,
  },
];
