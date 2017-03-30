<template>
    <div class="findPwdPage">
        <header-top headtitle="短信找回密码" goback="true"></header-top>
        <div class="content">
            <div class="forminfo">
                <mt-field label="手机号码：" placeholder="请输入手机号码" type="text"></mt-field>
                <mt-field class="yzminput" label="验证码：" placeholder="请输入验证码" type="text">
                    <mt-button class="getyzm" size="small" type="danger">获取验证码</mt-button>
                </mt-field>
                <mt-field label="设置新密码：" placeholder="6-12位组合字母、数字" type="password"></mt-field>
                <mt-field label="确认密码：" placeholder="请再次输入密码" type="password"></mt-field>
            </div>
            <div class="regBtn">
                 <mt-button class="confirmBtn" size="large" type="danger">确认</mt-button>
            </div>
        </div>
    </div>
</template>
<script>
    import Vue from 'vue'
    import headerTop from '../components/header'
    import { Field ,Button} from 'mint-ui';
    Vue.component(Field.name, Field);
    Vue.component(Button.name, Button);
     export default{
        components:{
            headerTop
        }
    }
</script>

<style scoped lang="scss">
    @import '../style/mixin.scss';
    .findPwdPage{
        padding-top: 1.6rem;
    }
    .getyzm{
        background: #f2d9d6;
        color:$bgColor;
        @include wh(3rem,0.8rem);
        margin-top:0.35rem;
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