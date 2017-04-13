<template>
        <div class="childPage">
            <header-top headtitle="会员添加" goback="true"></header-top>
            <div class="content">
                <mt-field v-model="vipName" label="姓名" placeholder="请输入会员姓名"></mt-field>
                <mt-field v-model="mobileNo" label="手机号" placeholder="请输入会员手机号"></mt-field>
                <a class="mint-cell mint-field">
                    <div class="mint-cell-wrapper">
                        <div class="mint-cell-title">
                            <span class="mint-cell-text">会员等级</span> 
                        </div> 
                        <div class="mint-cell-value" @click="selectLevel()">
                        <input style="background:white" v-model="level" disabled placeholder="选择会员等级" type="text" class="mint-field-core"> 
                        </div>
                    </div>
                </a>
                <div class="buttons">
                    <mt-button class="btn" @click="vipAdd()" size="normal" type="danger">确定</mt-button>
                    <mt-button class="btn" @click="$router.go(-1)" size="normal" type="danger">取消</mt-button>
                </div>
                <div :class="{hide:popupVisibel==false}" class="levelSelectBox" @click="popupVisibel=false">
                    <mt-popup  v-model="popupVisibel"  position="bottom">
                        <mt-picker @change="levelChange" :slots="vipLevel"></mt-picker>
                    </mt-popup>
                </div>
            </div>
        </div>
</template>
<script>
    import Vue from 'vue'
    import headerTop from '@/components/header'
    import { Field,Popup,Picker,Toast} from 'mint-ui'
    import {getData} from '@/config/utils'
    Vue.component(Field.name, Field)
    Vue.component(Popup.name, Popup);
    Vue.component(Picker.name, Picker);
    export default {
        data(){
            return {
                popupVisibel:false,
                vipName:'',
                level:'',
                initlevel:'',
                mobileNo:'',
                vipLevel:[{
                    values: ['白银','黄金','铂金','钻石']
                }]
            }
        },
        methods:{
            selectLevel(){
                this.popupVisibel=true;
                this.initlevel=true
                this.level="白银"
            },
            levelChange(picker,values){
                if(this.initlevel){
                    this.level=picker.getValues()
                }
            },
            vipAdd(){
                var data={
                    "vipName":this.vipName,
                    "vipLevel":this.levelformat,
                    "mobileNo":this.mobileNo
                }
                getData(this,data,'/mss/api/addVip.do',(datas) => {
                    Toast({
                        message: '新增会员成功',
                        position: 'bottom',
                        duration: 1500
                    });
                    this.$router.go(-1)
                })
            }
        },
        computed:{
            levelformat(){
                if(this.level=="白银"){
                    return "3"
                }else if(this.level=="黄金"){
                    return "2"
                }else if(this.level=="铂金"){
                    return "1"
                }else if(this.level=="钻石"){
                    return "0"
                }
            }
        },
        components:{
            headerTop
        }
    }
</script>
<style scoped lang="scss">
@import '../../../style/mixin.scss';
    .levelSelectBox,.mint-popup-bottom{
        width: 100%;
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