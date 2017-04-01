<template>
    <div class="settingsPage">
        <header-top headtitle="设置" goback="true"></header-top>
        <div class="content">
            <ul class="listbox">
                <li>
                    <span class="iconfont icon-lianjie"></span>
                    <span>绑定终端</span>
                    <b class="iconfont icon-youjiantou"></b>
                </li>
                <router-link :to="{path: '/settings/changePwd'}" tag="li" >
                    <span class="iconfont icon-xiugaimima"></span>
                    <span>修改密码</span>
                    <b class="iconfont icon-youjiantou"></b>
                </router-link>
                <li>
                    <span class="iconfont icon-shengji"></span>
                    <span>固件升级</span>
                    <b class="iconfont icon-youjiantou"></b>
                </li>
                <li>
                    <span class="iconfont icon-guanyu"></span>
                    <span>版本更新</span>
                    <b class="iconfont icon-youjiantou"></b>
                </li>
                <li>
                    <span class="iconfont icon-tuichu"></span>
                    <span @click="exit()">退出</span>
                    <b class="iconfont icon-youjiantou"></b>
                </li>
            </ul>
        </div>
        <router-view></router-view>
    </div>
</template>
<script>
    import Vue from 'vue'
    import headerTop from '../../components/header'
    import {removeStore,setparams} from '@/config/utils'
    import axios from 'axios'
    export default {
        data(){
            return {

            }
        },
        components:{
            headerTop
        },
        methods:{
            exit:function(){
                var params=setparams({})
                axios ({
                    method:'post',
                    data:params,
                    url:'/mss/api/logoutByMobile.do'
                })
                .then((Response) => {
                    removeStore('sessionId');
                    this.$router.push({path:'login'})
                })
            }
        }
    }
    
</script>
<style scoped lang="scss">
@import '../../style/mixin.scss';
.settingsPage{
    padding-top: 1.6rem;
}
.content{
    .listbox{
        background: white;
        li{
            height: 1.7rem;
            border-bottom: solid 1px $lineColor;
            line-height: 1.7rem;
            padding-left: 0.4rem;
            @include sc(0.4rem,$fontColor);
            b.iconfont{
                float: right;
                margin-right: 0.8rem;
                @include sc(0.45rem,#a8a8a8)
            }
            span.iconfont{
                font-size: 0.7rem;
                vertical-align: middle;
                margin-right: 0.3rem;
            }
            .icon-xiugaimima{
                color:#0cacd5;  
            }
            .icon-lianjie{
                color:#64a800;
            }
            .icon-guanyu{
                color: #dd4a38;
            }
            .icon-tuichu{
                color: red;
            }
            .icon-shengji{
                color: mediumaquamarine;
            }
        }
    }
}
</style>