# historyMode-generateHtml
 vue-router set mode 'history'  without nginx setting

##问题
#####在用vue-router的时候，mode设置成history，上线之后会出现404的问题
##原因
#####vue-router有两种模式
1.hash

hash模式，H5的API，hashchange变化监听来动态渲染当前路由对应的Dom

hash的变化不会触发浏览器向服务器请求对应的html

2.history

history模式，利用了H5的API，pushState/replaceState

history模式在当前页面路由的变化也不会触发浏览器向服务器请求对应的html

###hash和history的区别是什么？
hash模式下，当刷新当前页面，请求的html文件的路径会忽略#后面的内容

history模式下，当刷新当前页面，请求的html文件的路径会带着当前路由的路径

当history模式下，带着当前路由地址访问html文件，毫无疑问，服务器会返回404的页面，因为在服务器上，这个路由路径根本不存在。

###那么如何解决这个问题呢？
通常我们都会在服务器上配置，在这个项目路径下，如果找不到路由的路径就会重定向到入口的html。

#####那么如果不在服务器设置，怎么解决这个问题呢？
##解决办法

上面我们分析了问题原因，在history模式下，找不到文件会返回404。
那么我们把这个html文件放到这个路由路径下，不就解决这个问题了吗？
所以，我做了这个根据路由来动态生成路由目录下的html文件，解决了这个问题。

不过这个方式只适用于目录结构比较简单的项目。

##API

###generate.config.js

useHistory: [boolean]  default:true

routePath: [Array] default:[]

###在vue-cli3里面的vue.config.js的配置
` configureWebpack: config => {
     if (process.env.NODE_ENV === 'production') {
       const { htmlToBeInsert } = generateEntry()
       config.plugins = [...config.plugins, ...htmlToBeInsert]
     }
   }`
   
详见DEMO



