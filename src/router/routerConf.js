import MainLayout from '../layout/mainLayout';
import Page404 from '../pages/error/404';

const routerConf = [
    { 
        path: '*',
        layout: MainLayout,
        component: Page404,
    }, 
];

export default routerConf;
