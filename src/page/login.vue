<template>
    <div class="loginPage">
        <header-top headtitle="用户登陆" ></header-top>
        <div class="content">
            <section class="imgBox">
                <div class="img"></div>
            </section>
            <section class="inputBox">
                <div class="userName">
                    <span class="iconname iconfont icon-yonghuming"></span>
                    <input type="text" placeholder="请输入商户号或用户名" v-model="mobileNo" autofocus />
                </div>
                <div class="userPwd">
                    <span class="iconpwd iconfont icon-mima"></span>
                    <input type="password" placeholder="请输入密码"  v-model="loginPwd" />
                </div>
            </section>
            <section class="login">
                <mt-button class="loginBtn" @click="login()" size="large" type="danger">登录</mt-button>
            </section>
            <section class="remember clear">
                <div class="left">
                    <span @click="remember=!remember" :class="{'icon-fuxuankuang':!remember,'icon-fuxuankuangy':remember}" class="checkbox iconfont "></span>
                    <span class="cue">5天内记住账号</span>
                </div>
                <div class="right">
                    <router-link :to="{path: '/register'}" tag="span">注册</router-link>
                    <div class="line"></div>
                    <router-link :to="{path: '/findpwd'}" tag="span">忘记密码？</router-link>
                </div>
            </section>
        </div>
    </div>
   
    
</template>
<script>
    import Vue from 'vue'
    import headerTop from '../components/header'
    import { Button,Toast,Indicator } from 'mint-ui'
    import axios from 'axios'
    import {getStore, setStore,setCookie,getCookie,removeCookie,setparams} from '@/config/utils'
    Vue.component(Button.name, Button)
    Vue.component(Toast.name, Toast)
    export default {
        data(){
            return{
                remember:false,
                mobileNo:'',
                loginPwd:''
            }
        },
        created:function(){
            if(getCookie('username')){
                this.mobileNo=getCookie('username')
            }
        },
        methods:{
            login:function(){
                if(this.mobileNo==""){
                    Toast({
                        message: '请输入用户名或商户号',
                        position: 'bottom',
                        duration: 1500
                    });
                    return
                }
                if(this.loginPwd==""){
                    Toast({
                        message: '请输入密码',
                        position: 'bottom',
                        duration: 1500
                    });
                    return 
                }
                var params=setparams({
                    mobileNo:this.mobileNo,
                    loginPwd:this.loginPwd,
                })
                // var params=new URLSearchParams();
                // params.append('json', '{data:{mobileNo:'+this.mobileNo+',loginPwd:'+this.loginPwd+'}}');
                axios ({
                    method:'post',
                    data:params,
                    url:'/mss/api/loginByMobile.do'
                })
                .then((response) => {
                    if(response.data.returnCode!=="1"){
                        Toast({
                            message: response.data.errMessage,
                            position: 'bottom',
                            duration: 1000
                        });
                    }else{
                        if(this.remember){
                            setCookie('username',this.mobileNo,5)
                        }
                        setStore('sessionId',response.data.data.sessionId)
                        Indicator.open('正在登陆...');
                        this.$router.push({path:'index'})
                    }
                })
            }
        },
        components:{
            headerTop
        }
    }
</script>
<style scoped lang="scss">
    @import '../style/mixin.scss';
    .loginPage{
        padding-top: 1.6rem;
    }
    .content{
        width: 7.6rem;
        margin: 0 auto;
        .imgBox{
            .img{
                margin: 1.15rem auto;
                @include wh(3.2rem,2.7rem);
                @include bg('../images/login_logo_top.png')
            }
        }
        .inputBox{
            input{
                background: none;
                display: inline-block;
                height: 1rem;
                width: 85%;
                padding-left: 0.3rem;
            }
            .userName{
                border-bottom:solid 0.01rem $lineColor;
                padding-left:0.3rem;
                .iconname{
                    @include sc(0.55rem,$bgColor)
                }
            }
            .userPwd{
                border-bottom:solid 0.01rem $lineColor;
                padding-left:0.3rem;
                margin-top: 0.3rem;
                .iconpwd{
                    @include sc(0.55rem,$bgColor)
                }
            }
        }
        .loginBtn{
            margin-top: 1.2rem ;
            background: $bgColor;
        }
        .remember{
            margin-top: 1rem;
            span{
                @include sc(0.3rem,$bgColor);
                margin:0 0.1rem;
            }
            .line{
                display: inline-block;
                background: $bgColor;
                height: 0.3rem;
                width: 0.035rem;
            }
            .checkbox{
                @include sc(0.5rem,$bgColor);
            }
            .cue{
                @include sc(0.3rem,$fontColor);
                
            }
        }
    }
    
</style>

