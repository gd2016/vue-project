<template>
    <div class="page">
        <header-top headtitle="入网申请" goback="true"></header-top>
        <div class="content">
            <div class="forminfo">
                <mt-field v-model="applyName" label="申请人姓名：" placeholder="请输入申请人姓名" type="text"></mt-field>
                <mt-field v-model="mobileNo" label="手 机 号 码：" placeholder="请输入联系方式" type="text"></mt-field>
                <mt-field v-model="address" label="联 系 地 址：" placeholder="请输入地址" type="text"></mt-field>
                <mt-field v-model="certifId" label="身 份 证 号：" placeholder="请输入身份证号" type="text"></mt-field>
                <a class="mint-cell mint-field">
                    <div class="mint-cell-wrapper">
                        <div class="mint-cell-title">
                            <span class="mint-cell-text">选 择 地 区：</span> 
                        </div> 
                        <div class="mint-cell-value" @click="selectArea()">
                            <span></span>
                            <input style="background:white" disabled v-model="area"  placeholder="选择所在地区" type="text" class="mint-field-core"> 
                        </div>
                    </div>
                    <input type="hidden" v-model="proCodeNow" />
                    <input type="hidden" v-model="ctCodeNow" />
                    <input type="hidden" v-model="disCodeNow" />
                </a>
                <a class="mint-cell mint-field">
                    <div class="mint-cell-wrapper">
                        <div class="mint-cell-title">
                            <span class="mint-cell-text">所属农商行：</span> 
                        </div> 
                        <div class="mint-cell-value" @click="selectBank()" >
                            <input style="background:white" v-model="bank" disabled placeholder="选择所属农商行" type="text" class="mint-field-core"> 
                        </div>
                    </div>
                    <input type="hidden" v-model="secondBranchCode" />
                    <input type="hidden" v-model="thirdBranchCode" />
                </a>
            </div>
            <div class="regBtn">
                 <mt-button  @click="confirm()" class="confirmBtn" size="large" type="danger">确认</mt-button>
            </div>
        </div>
        <div :class="{hide:popupVisible==false}" class="areaSelectBox" @click="popupVisible=false">
            <mt-popup v-model="popupVisible"  position="bottom">
                <mt-picker  :slots="slots" @change="onAreaValuesChange"></mt-picker>
            </mt-popup>
        </div>
        <div :class="{hide:bankVisiable==false}" class="branchSelectBox" @click="bankVisiable=false">
            <mt-popup  class="branchA" v-model="bankVisiable"  position="bottom">
                <mt-picker  :slots="slotsBank" @change="onBankValuesChange"></mt-picker>
            </mt-popup>
        </div>
    </div>
    
</template>
<script>
    import Vue from 'vue'
    import headerTop from '../components/header'
    import { Field ,Toast,Button,Picker,Popup,Indicator } from 'mint-ui'
    import {getData} from '@/config/utils'
    Vue.component(Field.name, Field);
    Vue.component(Button.name, Button);
    Vue.component(Popup.name, Popup);
    Vue.component(Picker.name, Picker);
    export default {
        data(){
            return {
                popupVisible:false,//地区弹出层
                bankVisiable:false,
                certifId:'',
                applyName:'',
                mobileNo:'',
                address:'',
                proNow:'',
                cityNow:'',
                latitude:'',
                longitude:'',
                proCode:[],
                ctCode:[],
                disCode:[],
                proCodeNow:'',
                ctCodeNow:'',
                disCodeNow:'',
                area:'',
                initarea:'',
                bank:'',
                initbank:'',
                secondBranch:[],
                thirdBranch:[],
                secondBranchCode:'',
                thirdBranchCode:'',
                thirdBranchCodeNow:'',
                areainitdata:'',
                bankinitdata:'',
                slots: [
                    {
                        flex:1,
                        values: []
                    }, {
                        divider: true,
                        content: '-'
                    },{
                        flex:1,
                        values: []
                    }, {
                        divider: true,
                        content: '-'
                    }, {
                        flex:1,
                        values: []
                    }
                ],
                slotsBank: [
                    {
                        flex:1,
                        values: []
                    }, {
                        divider: true,
                        content: '-'
                    },{
                        flex:1.5,
                        values: []
                    }
                ]
            }
        },
        components:{
            headerTop
        },
        
        created:function (){
            this.initPro();
            this.initBank();
        },
        methods:{
            selectArea(){
                this.popupVisible=true;
                this.initarea=true;
                this.area=this.areainitdata
            },
            selectBank(){
                this.bankVisiable=true;
                this.initbank=true;
                this.bank=this.bankinitdata;
            },
            onAreaValuesChange(picker, values) {
                this.areainitdata=picker.getValues().join('');
                if(this.initarea){
                    this.area=picker.getValues().join('')
                }
                if (picker.getValues(0)[0]){
                    for (var i = 0; i < this.proCode.length; i++) {
                        if(picker.getValues(0)[0]==this.proCode[i].proName){
                            var proCode=this.proCode[i].proCode;
                            this.proCodeNow=this.proCode[i].proCode;
                        }
                    }
                    if(this.proNow!=picker.getValues(0)[0]){
                        getData(this,{proCode:proCode},'/mss/api/getCityByProvince.do', (datas) => {
                            this.ctCode=datas.data.data;
                            var ctArr=[];
                            for (var i = 0; i < datas.data.data.length; i++) {
                                ctArr.push(datas.data.data[i].ctName);
                                this.slots[2].values=ctArr;
                            }
                            this.proNow=picker.getValues(0)[0];
                            
                        })
                    }
                } 
                if(picker.getValues(0)[1]){
                    for (var i = 0; i < this.ctCode.length; i++) {
                        if(picker.getValues(0)[1]==this.ctCode[i].ctName){
                            var ctPara=this.ctCode[i].ctCode
                            this.ctCodeNow=this.ctCode[i].ctCode;
                        }
                    }
                    if(this.cityNow!=picker.getValues(0)[1]){
                        getData(this,{ctCode:ctPara},'/mss/api/getDisByCity.do', (datas) => {
                            var areaArr=[]; 
                            this.disCode=datas.data.data;
                            for (var i = 0; i < datas.data.data.length; i++) {
                                areaArr.push(datas.data.data[i].disName);
                                this.slots[4].values=areaArr;
                            }
                            this.cityNow=picker.getValues(0)[1]
                        })
                    }
                    for (var i = 0; i < this.disCode.length; i++) {
                        if(picker.getValues(0)[2]==this.disCode[i].disName){
                            this.disCodeNow=this.disCode[i].disCode;
                        }
                    }
                    
                }
                
            },
            onBankValuesChange(picker,values){
                this.bankinitdata=picker.getValues().join('');
                if(this.initbank){
                    this.bank=picker.getValues().join('')
                }
                if(picker.getValues(0)[0]){
                    for (var i = 0; i < this.secondBranch.length; i++) {
                        if(picker.getValues(0)[0]==this.secondBranch[i].secondBranchName){
                            var sebranchCode=this.secondBranch[i].secondBranchCode;
                            this.secondBranchCode=this.secondBranch[i].secondBranchCode;
                        }
                    }
                    if(this.thirdBranchCodeNow!=picker.getValues(0)[0]){
                        getData(this,{secondBranchCode:sebranchCode},'/mss/api/getThirdBranch.do', (datas) => {
                            var thirdBranchArr=[];
                            this.thirdBranch=datas.data.data;
                            for (var i = 0; i < datas.data.data.length; i++) {
                                thirdBranchArr.push(datas.data.data[i].thirdBranchName);
                                this.slotsBank[2].values=thirdBranchArr;
                            }
                            this.thirdBranchCodeNow=picker.getValues(0)[0]
                        })
                    }
                }
                if(picker.getValues(0)[1]){
                    for (var i = 0; i < this.thirdBranch.length; i++) {
                        if(picker.getValues(0)[1]==this.thirdBranch[i].thirdBranchName){
                            this.thirdBranchCode=this.thirdBranch[i].thirdBranchCode;
                        }
                    }
                }
            },
            initPro(){
                getData(this,'','/mss/api/getAllProvince.do', (datas) => {
                    this.proCode=datas.data.data;
                    var proarr=[];
                    for (var i = 0; i < datas.data.data.length; i++) {
                        proarr.push(datas.data.data[i].proName)
                        this.slots[0].values=proarr;
                    }
                })
            },
            initBank(){
                getData(this,'','/mss/api/getAllSecondBranch.do', (datas) => {
                    this.secondBranch=datas.data.data;
                    var secondBranchArr=[];
                    for (var i = 0; i < datas.data.data.length; i++) {
                        secondBranchArr.push(datas.data.data[i].secondBranchName);
                        this.slotsBank[0].values=secondBranchArr;                  
                    }
                })
            },
            confirm(){
                if(!this.checkForm()){
                    Toast({
                        message: '信息不能为空',
                        position: 'bottom',
                        duration: 1500
                    });
                    return 
                }
                if (navigator.geolocation){
                    navigator.geolocation.getCurrentPosition(this.getPosition,this.errorhandle,{
                        timeout:20000,
                        enableHighAcuracy:true
                    })
                    Indicator.open('正在获取地理信息')
                }
            },
            getPosition(position){
                this.longitude=position.coords.longitude;
                this.latitude=position.coords.latitude;
                Indicator.close();
                var data={
                    "mobileNo":this.mobileNo,
                    "certifId":this.certifId,
                    "name":this.applyName,
                    "proCode":this.proCodeNow,
                    "ctCode":this.ctCodeNow,
                    "disCode":this.disCodeNow,
                    "address":this.address,
                    "secondBranchCode":this.secondBranchCode,
                    "thirdBranchCode":this.thirdBranchCode,
                    "longitude":this.longitude,
                    "latitude":this.latitude        
                }
                getData(this,data,'/mss/api/merchantApply.do', (datas) => {
                    Toast({
                        message: '入网申请成功',
                        position: 'bottom',
                        duration: 1500
                    });
                    this.$router.go(-1)
                })
            },
            checkForm(){
                if(this.mobileNo==""||this.certifId==""||this.applyName==""||this.address==""||this.area==""||this.bank==""){
                    return false
                }else{
                    return true
                }
            },
            errorhandle(error){
                Indicator.close()
                switch(error.code) 
                { 
                    case 0: 
                        Toast({
                            message: '获取定位信息失败，请稍后再试',
                            position: 'bottom',
                            duration: 1500
                        }); 
                        break; 
                    case 1: 
                        Toast({
                            message: '请授权获取地理信息，或者清除浏览器获取位置信息的权限',
                            position: 'bottom',
                            duration: 1500
                        }); 
                        break; 
                    case 2: 
                        Toast({
                            message: '获取定位信息失败，请稍后再试',
                            position: 'bottom',
                            duration: 1500
                        }); 
                        break; 
                    case 3: 
                        Toast({
                            message: '请求超时',
                            position: 'bottom',
                            duration: 1500
                        }); 
                        break; 
                } 
                
            }
        }
    }
</script>

<style scoped lang="scss">
    @import '../style/mixin.scss';
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
                    // padding-right: 1rem;
                }
            }

        }
    }
    .mint-popup-bottom{
        width: 100%
    }
    .areaSelectBox,.branchSelectBox{
        position: fixed;
        bottom: 0;
        width: 100%;
        height: 180px;
    }
</style>