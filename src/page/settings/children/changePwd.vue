<template>
    <div class="changePwdPage">
        <header-top headtitle="修改密码" goback="true"></header-top>
        <div class="content">
            <mt-field v-model="oldLoginPwd" label="原密码" placeholder="请输入原始密码"></mt-field>
            <mt-field v-model="newLoginPwd" label="新密码" placeholder="请输入新密码" type="password"></mt-field>
            <mt-field v-model="reNewLoginPwd" label="再次输入" placeholder="请输入再次输入新密码" type="password"></mt-field>
        </div>
        <div class="buttons">
            <mt-button class="btn" @click="change()" size="normal" type="danger">确定</mt-button>
            <mt-button class="btn" @click="$router.go(-1)" size="normal" type="danger">取消</mt-button>
        </div>
    </div>
</template>
<script>
    import Vue from 'vue'
    import headerTop from '@/components/header'
    import { Field , Button , Toast } from 'mint-ui'
    import axios from 'axios'
    import {getStore,errorhandle,setparams,removeStore} from '@/config/utils'
    Vue.component(Field.name, Field)
    Vue.component(Button.name, Button)
    export default {
        data(){
            return {
                oldLoginPwd:'',
                newLoginPwd:'',
                reNewLoginPwd:''
            }
        },
        components:{
            headerTop
        },
        methods:{
            change:function(){
                if(this.oldLoginPwd==""){
                    Toast({
                        message: '请输入原始密码',
                        position: 'bottom',
                        duration: 1500
                    });
                    return
                }
                if(this.newLoginPwd==""){
                    Toast({
                        message: '请输入新密码',
                        position: 'bottom',
                        duration: 1500
                    });
                    return
                }
                if(this.reNewLoginPwd==""){
                    Toast({
                        message: '请再次输入新密码',
                        position: 'bottom',
                        duration: 1500
                    });
                    return
                }
                var params=new URLSearchParams();
                params.append('json', '{sessionId:"'+getStore('sessionId')+'",data:{oldLoginPwd:'+this.oldLoginPwd+',newLoginPwd:'+this.newLoginPwd+',reNewLoginPwd:'+this.reNewLoginPwd+'}}');
                axios ({
                    method:'post',
                    data:params,
                    url:'/mss/api/updatePwdByMobile.do'
                })
                .then((response) => {
                    if(errorhandle(response,this)){
                        Toast({
                            message: '密码修改成功,请重新登陆',
                            position: 'bottom',
                            duration: 1000
                        });
                        this.exit();
                    }
                })
            },
            exit:function(){
                var params=setparams({})
                axios ({
                    method:'post',
                    data:params,
                    url:'/mss/api/logoutByMobile.do'
                })
                .then((Response) => {
                    removeStore('sessionId');
                    this.$router.push({path:'/login'})
                })
            }
        }
    }
</script>
<style scoped lang="scss">
    @import '../../../style/mixin.scss';
    .changePwdPage{
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: 4;
        background: $pageBg;
        padding-top: 1.6rem;
    }
    .btn{
        background: $bgColor;
        height: 1rem;
        @include sc(0.38rem,white);
        margin-top: 1rem;
        width: 35%;
        margin-left: 1rem;
    }
</style>