import Cart from '~p/Cart';
import Order from '~p/Order';
import Result from '~p/Result';
import Post from '~p/post';

import Page404 from '~c/inputs/error/404';

let routes = [
    {
        name:'home',
        url:'/',
        component: Cart,
        exact: true
    },
    {
        name:'order',
        url:'/order',
        component: Order,
        exact: true
    },
    {
        name:'result',
        url:'/result',
        component: Result,
        exact: true
    },
    {
        name:'blogPost',
        url:'/news/:id',
        component: Post,
        exact:true
    },
    {
        url:'**',
        component: Page404
    },
]

let routesMap = {}

routes.forEach(route => {
    if(route.hasOwnProperty('name')){
        routesMap[route.name] = route.url
    }
});

export default routes
export {routesMap}