<template>
    <div class="childPage">
        <header-top headtitle="会员详情" closed="true"></header-top>
        <div class="content">
            <mt-field disabled v-model="vipInfo.vipName" label="会员姓名："></mt-field>
            <mt-field disabled v-model="vipInfo.integral" label="会员积分："></mt-field>
            <mt-field disabled v-model="datefomat" label="入会时间："></mt-field>
            <p class="warninfo" v-if="isClick">请修改一下信息</p>
            <mt-field :disabled="mobileDisabled" v-model="vipInfo.mobileNo" label="会员手机号："></mt-field>
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
            <div class="buttons">
                <mt-button v-if="!isClick" class="btn" @click="vipEdit()" size="normal" type="danger">修改信息</mt-button>
                <mt-button v-if="isClick" class="btn" @click="confirm()" size="normal" type="danger">确定修改</mt-button>
                <mt-button class="btn" @click="vipDelete()" size="normal" type="danger">会员注销</mt-button>
            </div>
            <div :class="{hide:popupVisibel==false}" class="levelSelectBox" @click="popupVisibel=false">
            <mt-popup    v-model="popupVisibel"  position="bottom">
                <mt-picker @change="levelChange" :slots="vipInfo.lv"></mt-picker>
            </mt-popup>
            </div>
        </div>
        
    </div>
</template>
<script>
    import Vue from 'vue'
    import {mapMutations,mapState} from 'vuex'
    import headerTop from '@/components/header'
    import { Field,Popup,Picker,Toast,MessageBox } from 'mint-ui'
    import {getData,dateformat} from '@/config/utils'
    Vue.component(Field.name, Field)
    Vue.component(Popup.name, Popup);
    Vue.component(Picker.name, Picker);
    export default {
        data(){
            return {
                popupVisibel:false,
                formatLevel:'',
                isClick:false,
                mobileDisabled:true,
            }
        },
        watch:{
            vipInfo(value,old){
                console.log(value,old)
            }
        },
        methods:{
            ...mapMutations([
                'VIP_DETAIL_CANCEL'
            ]),
            selectLevel(){
                if(this.isClick){
                    this.popupVisibel=true;
                }
            },
            levelChange(picker,values){
                if(this.isClick){
                    this.formatLevel=values[0]
                    this.vipInfo.vipLevel=this.levelAnitformat
                }
            },
            vipEdit(){
                this.isClick=true;
                this.mobileDisabled=false
            },
            confirm(){
                var data={
                    "vipId":this.vipInfo.vipId,
                    "vipName":this.vipInfo.vipName,
                    "vipLevel":this.vipInfo.vipLevel,
                    "mobileNo":this.vipInfo.mobileNo
                }
                getData(this,data,'/mss/api/updateVip.do',(data)=>{
                    Toast({
                        message: '修改会员成功',
                        position: 'bottom',
                        duration: 1500
                    });
                    this.VIP_DETAIL_CANCEL();
                    this.$emit('confirm',true);
                })
            },
            vipDelete(){
                MessageBox.confirm('确定删除此会员?').then(action => {
                    var data={
                        "vipId":this.vipInfo.vipId
                    }
                    getData(this,data,'/mss/api/closeVip.do',(data)=>{
                        Toast({
                            message: '删除会员成功',
                            position: 'bottom',
                            duration: 1500
                        });
                        this.VIP_DETAIL_CANCEL();
                        this.$emit('confirm',true);
                    })
                });
            }
        },
        computed:{
            ...mapState([
                'vipInfo'
            ]),
            datefomat:function(){
                return dateformat(this.vipInfo.createDatetime)
            },
            levelformat(){
                if(this.vipInfo.vipLevel=="3"){
                    return "白银"
                }else if(this.vipInfo.vipLevel=="2"){
                    return "黄金"
                }else if(this.vipInfo.vipLevel=="1"){
                    return "铂金"
                }else if(this.vipInfo.vipLevel=="0"){
                    return "钻石"
                }
            },
            levelAnitformat(){
                if(this.formatLevel=="白银"){
                    return "3"
                }else if(this.formatLevel=="黄金"){
                    return "2"
                }else if(this.formatLevel=="铂金"){
                    return "1"
                }else if(this.formatLevel=="钻石"){
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
@import '../style/mixin.scss';
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