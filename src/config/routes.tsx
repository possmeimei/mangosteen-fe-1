import {First} from '../components/welcome/first';
import {Second} from '../components/welcome/second';
import {Third} from '../components/welcome/third';
import {Fourth} from '../components/welcome/fourth';
import {Welcome} from '../views/Welcome';

export const routes = [
    {path: '/', redirect:'/welcome'},
    {path: '/welcome', component: Welcome,
        children:[
            {path:'',redirect:'/welcome/1'},
            {path: '1', component: First},
            {path: '2', component: Second},
            {path: '3', component: Third},
            {path: '4', component: Fourth},
        ]}
];