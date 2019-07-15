import MainLayout from '../layout/mainLayout';
import Page404 from '../pages/error/404';
import Home from '../../src/pages/home';
import UserLogin from '../../src/pages/userLogin';
import SideLayout from '../../src/layout/sideLayout';

const routerConf = [
  { 
    path: '/user-login',
    layout: SideLayout,
    component: UserLogin,
  }, 
  { 
    path: '/home',
    layout: null,
    component: Home,
  }, 
  { 
    path: '*',
    layout: MainLayout,
    component: Page404,
  }, 
];

export default routerConf;
