<template>
    <div class="page">
        <header-top headtitle="短信找回密码" goback="true"></header-top>
        <div class="content">
            <div class="forminfo">
                <mt-field label="用户名：" v-model="mchntName" placeholder="请输入用户名或者商户号" type="text"></mt-field>
                <mt-field label="手机号码：" v-model="mobileNo" placeholder="请输入手机号码" type="text"></mt-field>
                <mt-field v-model="verifySms" class="yzminput" label="验证码：" placeholder="请输入验证码" type="text">
                <mt-button v-show="!computedTime" @click="getyzm()" class="getyzm" size="small" type="danger">{{message}}</mt-button>
                <mt-button v-show="computedTime" class="getyzm" size="small" type="danger">已发送({{computedTime}}s)</mt-button>
                </mt-field>
                <mt-field v-model="newLoginPwd" label="设置新密码：" placeholder="6-12位组合字母、数字" type="password"></mt-field>
                <mt-field v-model="reNewLoginPwd" label="确认密码：" placeholder="请再次输入密码" type="password"></mt-field>
            </div>
            <div class="regBtn">
                 <mt-button @click="confirm()" class="confirmBtn" size="large" type="danger">确认</mt-button>
            </div>
        </div>
    </div>
</template>
<script>
    import Vue from 'vue'
    import headerTop from '../components/header'
    import { Field ,Button,Toast} from 'mint-ui';
    import {getData} from '@/config/utils'
    Vue.component(Field.name, Field);
    Vue.component(Button.name, Button);
     export default {
        data(){
          return{
            message:'获取验证码',
            computedTime:0,
            mobileNo:'',
            verifySms:'',
            newLoginPwd:'',
            reNewLoginPwd:'',
            mchntName:''
          }  
        },
        components:{
            headerTop
        },
        methods:{
            getyzm(){
                getData(this,{'mobileNo':this.mobileNo},'/mss/api/verifySmsByMobile.do',(data)=>{
                    this.computedTime=10;
                    var timer=setInterval(() => {
                        this.computedTime--;
                        if(this.computedTime==0){
                            clearInterval(timer)
                        }
                    },1000)
                })
            },
            confirm(){
                var data={
                    mobileNo:this.mobileNo,
                    verifySms:this.verifySms,
                    newLoginPwd:this.newLoginPwd,
                    reNewLoginPwd:this.reNewLoginPwd,
                    mchntName:this.mchntName
                };
                getData(this,data,'/mss/api/retrievePwdByMobile.do',(data)=>{
                    Toast({
                        message: '密码重置成功',
                        position: 'bottom',
                        duration: 1500
                    });
                    this.$router.push({path:'login'})
                })
            }
        }
    }
</script>

<style scoped lang="scss">
    @import '../style/mixin.scss';
    .getyzm{
        background: #f2d9d6;
        color:$bgColor;
        @include wh(3rem,0.8rem);
        margin-top:0.3rem;
        margin-right: 0.5rem;
    }
    .regBtn{
        padding: 0 1.3rem;
    }
    .confirmBtn{
        margin-top: 2.1rem;
        background: $bgColor;
    }
</style>