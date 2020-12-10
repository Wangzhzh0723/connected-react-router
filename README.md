## connected-react-router

- 实现路由和仓库的链接
- - 把浏览器地址栏的最新的路劲存放到仓库中 history.action history.location
- - 可以通过派发动作的方式跳转路径 store.dispatch(action)
- - - push 他是一个 ActionCreator, 可以生产 action
- - - routerMiddleware 他是一个中间件工厂方法, 它可识别出上面这个 push 的 action, 然后使用 history 跳转路径
