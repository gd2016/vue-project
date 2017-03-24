<template>
    <footer>
        <mt-tabbar>
            <mt-tab-item>
                <router-link to="/index">
                        主页
                </router-link>
            </mt-tab-item>
            <mt-tab-item>
                <router-link to="/settingPage">
                        设置
                </router-link>
            </mt-tab-item>
            <mt-tab-item>
                <router-link to="/friends">
                        朋友圈
                </router-link>
            </mt-tab-item>
            <mt-tab-item>
                <router-link to="/personal">
                        个人中心
                </router-link>
            </mt-tab-item>
        </mt-tabbar>
    </footer>
</template>

<script>
import Vue from 'vue'
import {Tabbar,TabItem} from 'mint-ui'
Vue.component(Tabbar.name,Tabbar)
Vue.component(TabItem.name,TabItem)
export default {
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.router-link-active{
    color:red
}
</style>
