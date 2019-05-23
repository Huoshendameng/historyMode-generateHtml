import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/*路由懒加载*/
const home = resolve => require(['@/pages/home/home'], resolve);
const routes = [
    {path: '*', redirect: '/home'},
    {
        path: '/home',
        name: 'home',
        component: home,
        meta:{
            title:'我的保障',
            keepAlive: false
        }
    }
    ];


let baseUrl = process.env.NODE_ENV == 'production' ? '/insurance/myInsurance/1.0.0/' : '/'; //
const pageRouter = new Router({
    mode: 'history',
    base: baseUrl,
    routes: routes
});
export default pageRouter;
