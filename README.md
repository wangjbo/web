### 使用muse-ui 按需加载
https://muse-ui.org/#/zh-CN/usage

### 首页动画
1. 首页动画是canvas写的
2. lib-flexible 设置rem
3. 设置打字机特效

### Header 
1. header用muse-ui的框架进行渲染
2. 会进行响应式布局  参考https://juejin.cn/post/6984774818088861703

### Footer 
1. 底部居中设置footer

### archives 归档页面
1. 设置路由
2. 设置路由的样式，目前是借鉴的，需要进一步的理解看懂
3. 设置背景图。想要给整个项目设置一个背景图，目前只是给每个样式单独设置的背景图
4. 归档页面存在一个bug，就是从其他页面切换到归档页面的时候页面的格式是错误的---> 需要在style中加一个scoped

### categories 
1. 设置路由
2. 用事件总线进行传递isPC参数来进行响应式布局，手机端不显示底部的信息
3. 目前的图片都是使用的别人服务器的，需要换成自己的图床的图片

### categories/detail
1. 