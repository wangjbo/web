import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import 'muse-ui/lib/styles/base.less';
import { Button, Select, AppBar, Icon, Menu, List, Popover, Avatar, BottomSheet, Pagination, Paper } from 'muse-ui';
import 'muse-ui/lib/styles/theme.less';


import './global.less'
import "lib-flexible"


Vue.use(Button);
Vue.use(Select);
Vue.use(AppBar);
Vue.use(Icon);
Vue.use(Menu);
Vue.use(List);
Vue.use(Popover);
Vue.use(Avatar);
Vue.use(BottomSheet);
Vue.use(Paper);
Vue.use(Pagination);


Vue.config.productionTip = false

new Vue({
    router,
    store,
    beforeCreate() {
        Vue.prototype.$bus = this //安装全局事件总线
    },
    render: h => h(App)
}).$mount('#app')