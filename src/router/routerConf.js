import MainLayout from '../layout/mainLayout';
import Page404 from '../pages/error/404';
import Home from '../../src/pages/home';
import HhhM from '../../src/pages/hhhM';
import HelloW from '../../src/pages/helloW';

const routerConf = [
    { 
        path: '/hello-w',
        layout: null,
        component: HelloW,
    }, 
    { 
        path: '/hhh-m',
        layout: null,
        component: HhhM,
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
