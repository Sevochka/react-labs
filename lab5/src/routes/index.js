import Cart from '~p/Cart';
import Order from '~p/Order';
import Result from '~p/Result';
import Page404 from '~p/error404';
import Post from '~p/post';
import Products from '~p/products'
import Product from '~p/productItemView'

let routes = [
    {
        name: 'home',
        url: '/',
        component: Products,
        exact: true
    },
    {
        name: 'product',
        url: '/product/:id',
        component: Product,
        exact: true
    },
    {
        name: 'cart',
        url: '/cart',
        component: Cart,
        exact: true
    },
    {
        name: 'order',
        url: '/order',
        component: Order,
        exact: true
    },
    {
        name: 'result',
        url: '/done',
        component: Result,
        exact: true
    },
    {
        name: 'blogPost',
        url: '/news/:some',
        component: Post,
        exact: true
    },
    {
        url: '**',
        component: Page404
    }
];

let routesMap = {};

routes.forEach((route) => {
    if(route.hasOwnProperty('name')){
        routesMap[route.name] = route.url;
    }
});

let urlBuilder = function(name, params){
    if(!routesMap.hasOwnProperty(name)){
        return null;
    }
 
    let url = routesMap[name]; // news/:id

    for(let key in params){
        url = url.replace(':' + key, params[key]);
    }

    return url;
}

export default routes;
export {routesMap, urlBuilder};