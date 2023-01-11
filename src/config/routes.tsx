import {First} from '../components/welcome/First';
import {FirstAction} from '../components/welcome/FirstAction';
import {Second} from '../components/welcome/Second';
import {SecondAction} from '../components/welcome/SecondAction';
import {Third} from '../components/welcome/Third';
import {ThirdAction} from '../components/welcome/ThirdAction';
import {Fourth} from '../components/welcome/Fourth';
import {FourthAction} from '../components/welcome/FourthAction';
import {Welcome} from '../views/Welcome';
import {Start} from '../views/Start';
import {ItemCreate} from '../components/Items/ItemCreate';
import {ItemPage} from '../views/ItemPage';
import {ItemList} from '../components/Items/ItemList';

export const routes = [
    {path: '/', redirect: '/welcome'},
    {
        path: '/welcome', component: Welcome,
        children: [
            {path: '', redirect: '/welcome/1'},
            {path: '1', name: 'welcome1', components: {main: First, footer: FirstAction}},
            {path: '2', name: 'welcome2', components: {main: Second, footer: SecondAction}},
            {path: '3', name: 'welcome3', components: {main: Third, footer: ThirdAction}},
            {path: '4', name: 'welcome4', components: {main: Fourth, footer: FourthAction}},
        ]
    },
    {
        path:'/start',component: Start,
    },
    {
        path: '/items', component: ItemPage,
        children: [
            { path: '', component: ItemList },
            { path: 'create', component: ItemCreate },
        ]
    }
];