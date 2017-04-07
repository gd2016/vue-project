<template>
    <div class="vipDetailPage childPage">
        <header-top headtitle="会员详情" goback="true"></header-top>
        <div class="content">
            <mt-field disabled v-model="vipName" label="会员姓名："></mt-field>
            <mt-field disabled v-model="integral" label="会员积分："></mt-field>
            <mt-field disabled v-model="datefomat" label="入会时间："></mt-field>
            <p class="warninfo" v-if="isClick">请修改一下信息</p>
            <mt-field :disabled="mobileDisabled" v-model="mobileNo" label="会员手机号："></mt-field>
            <a class="mint-cell mint-field">
                <div class="mint-cell-wrapper">
                    <div class="mint-cell-title">
                        <span class="mint-cell-text">会员等级：</span> 
                    </div> 
                    <div class="mint-cell-value" @click="selectLevel()">
                        <input style="background:white" v-model="levelformat" disabled  type="text" class="mint-field-core"> 
                    </div>
                </div>
            </a>
        </div>
        <div class="buttons">
            <mt-button v-if="!isClick" class="btn" @click="vipEdit()" size="normal" type="danger">修改信息</mt-button>
            <mt-button v-if="isClick" class="btn" @click="confirm()" size="normal" type="danger">确定修改</mt-button>
            <mt-button class="btn" @click="vipDelete()" size="normal" type="danger">会员注销</mt-button>
        </div>
        <div :class="{hide:popupVisibel==false}" class="levelSelectBox" @click="popupVisibel=false">
          <mt-popup    v-model="popupVisibel"  position="bottom">
                <mt-picker @change="levelChange" :slots="vipLevel"></mt-picker>
            </mt-popup>
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
                mobileNo:'',
                createDatetime:'',
                integral:'',
                level:'',
                formatLevel:'',
                vipId:'',
                isClick:false,
                mobileDisabled:true,
                vipLevel:[{
                    values: ['白银','黄金','铂金','钻石']
                }]
            }
        },
        props: ['vipInfo'],
        created(){
            var info = this.$route.query;
            console.log(this.$route.query)
            for(var attr in info){
                this[attr]=info[attr]
            }
        },
        methods:{
            selectLevel(){
                if(this.isClick){
                    this.popupVisibel=true;
                }
            },
            levelChange(picker,values){
                
            },
            vipEdit(){
                this.isClick=true;
                this.mobileDisabled=false
            },
            confirm(){
                var data={
                    "vipId":this.vipId,
                    "vipName":this.vipName,
                    "vipLevel":this.level,
                    "mobileNo":this.mobileNo
                }
                getData(this,data,'/mss/api/updateVip.do',(data)=>{
                    Toast({
                        message: '添加会员成功',
                        position: 'bottom',
                        duration: 1500
                    });
                    this.$router.push({path:'/mchntVip'})
                    this.$router.go(0)
                })
            }
        },
        computed:{
            datefomat:function(){
                return this.createDatetime.substring(0,4)+"-"+this.createDatetime.substring(4,6)+"-"+this.createDatetime.substring(6,8)+" "+this.createDatetime.substring(8,10)+":"+this.createDatetime.substring(10,12)
            },
            levelformat(){
                if(this.level=="3"){
                    return "白银"
                }else if(this.level=="2"){
                    return "黄金"
                }else if(this.level=="1"){
                    return "铂金"
                }else if(this.level=="0"){
                    return "钻石"
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
    .content{
        .warninfo{
            border-top: solid 1px #cfcfcf;
            padding: 0.2rem 0 0.2rem 0.5rem;
            @include sc(0.38rem,$fontColor);
        }
    }
</style>