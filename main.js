import Vue from 'vue'
import App from './App'
import Api from './Api/Api.js'
Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
Vue.prototype.checkLogin=function(){
	return uni.getStorageSync('token')==''?false:true;
}