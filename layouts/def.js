import Login from '../Pages/login'
import Call from '../Pages/call';
import Map from '../Pages/map';
import Application from '../layouts/application';
import Statistics from '../Pages/statisics';
import Users from '../Pages/users';

export const def=[
    {
        name:'Home',
        img:'data',
        comp : Call
    },
    {
        name:'Map',
        img:'data3',
        comp : Map,
    },
    {
        name:'Statistics',
        img:'data2',
        comp : Statistics,
    },
    {
        name:'User',
        img:'data3',
        comp : Users,
    },
    {
        name:'Login',
        img:'data4',
        comp : Login,
    },
]