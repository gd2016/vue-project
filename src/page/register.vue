<template>
    <div class="registerPage">
        <header-top headtitle="入网申请" goback="true"></header-top>
        <div class="content">
            <div class="forminfo">
                <mt-field label="申请人姓名：" placeholder="请输入申请人姓名" type="text"></mt-field>
                <mt-field label="联 系 方 式：" placeholder="请输入联系方式" type="text"></mt-field>
                <mt-field label="地　　　址：" placeholder="请输入地址" type="text"></mt-field>
                <mt-field label="身 份 证 号：" placeholder="请输入身份证号" type="text"></mt-field>
                <mt-field label="所属农商行：" placeholder="请输入身份证号" type="text"></mt-field>
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
    .registerPage{
        padding-top: 1.6rem;
    }
    .regBtn{
        padding: 0 1.3rem;
    }
    .confirmBtn{
        margin-top: 2.1rem;
        background: $bgColor;
    }
    .forminfo{
        .mint-field{
            .mint-cell-wrapper{
                .mint-cell-value{
                    padding-right: 2rem;
                }
            }

        }
    }
</style>