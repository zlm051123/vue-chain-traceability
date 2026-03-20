import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.config.productionTip = false
Vue.use(ElementUI)

//模拟区块链账户信息（ 实际项目需对接钱包）
Vue.prototype.$account = {
  address: ''   //模拟地址
  //isOwner: true // 模拟是否为合约拥有者
}

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
