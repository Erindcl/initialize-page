import MainLayout from '../layout/mainLayout';
import Page404 from '../pages/error/404';
import Home from '../../src/pages/home';

const routerConf = [
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
