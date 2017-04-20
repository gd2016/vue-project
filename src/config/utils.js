import {  Toast ,Indicator} from 'mint-ui'
import axios from 'axios'
import qs from 'qs'
/**
 * 存储localStorage
 */
export const setStore = (name, content) => {
	if (!name) return;
	if (typeof content !== 'string') {
		content = JSON.stringify(content);
	}
	window.localStorage.setItem(name, content);
}

/**
 * 获取localStorage
 */
export const getStore = name => {
	if (!name) return;
	return window.localStorage.getItem(name);
}

/**
 * 删除localStorage
 */
export const removeStore = name => {
	if (!name) return;
	window.localStorage.removeItem(name);
}


export const setCookie = (key,value,t) => {
	var myDate=new Date();
	myDate.setDate(myDate.getDate()+t)
	document.cookie=key+"="+encodeURI(value)+";expires="+myDate.toGMTString();
}

export const getCookie = key =>{
		var str=document.cookie;
		var arr=str.split("; ");
		for(var i=0;i<arr.length;i++){
			var newArr=arr[i].split("=");
			if(newArr[0]==key){
				return decodeURI(newArr[1]);
			}
		};
}

export const removeCookie = key => {
	setCookie(key,"",-1);
}

export const getData = (_this,para,url,call) => {
    var params=setparams(para)
    axios ({
        method:'post',
        data:params,
        url:url,
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    })
    .then((response) => {
        if(errorhandle(response,_this)){
            call && call(response)
        }
    })
}

export const setparams = par => {//  axios 需要qs来让请求数据序列化
    var params=qs.stringify({'json': '{sessionId:"'+getStore('sessionId')+'",data:'+JSON.stringify(par)+'}'});
    return params
}

export const errorhandle = (response,_this) => {
    if(response.data.returnCode=="0"){
        if(response.data.errCode=="0001"||response.data.errCode=="0002"){
            Toast({
                message: '登陆超时，请重新登陆',
                position: 'bottom',
                duration: 1000
            });
            _this.$router.push({path:'/login'})
            Indicator.close()
        }else{
            Toast({
                message: response.data.errMessage,
                position: 'bottom',
                duration: 1000
            });
            Indicator.close()
            return false
        }
    }else{
        return true
    }
}

export const getMonth = () => {
    var dateNow=new Date();
	var yearNow=dateNow.getFullYear();
	var monthNow=dateNow.getMonth();
	if(monthNow==0){
		var newMonth=12;
		var newYear=yearNow-1;
	}else{
		var newMonth=monthNow<10?"0"+monthNow:monthNow;
		var newYear=yearNow;
	}
	return newYear+"-"+newMonth;
}

export const moneyformat = (value) => {
    var s=parseFloat((value/100+"").replace(/[^\d.-]/g,"")).toFixed(2)+"",
        l = s.split(".")[0].split("").reverse(), 
        r = s.split(".")[1],
        t = ""; 
    for (var i = 0; i < l.length; i++) { 
        t += l[i] + ((i + 1) % 3 == 0 && (i + 1) != l.length ? "," : ""); 
    } 
    return "￥"+ t.split("").reverse().join("") + "." + r; 
}

export const dateformat = (value) => {
    return value.substring(0,4)+"-"+value.substring(4,6)+"-"+value.substring(6,8)+" "+value.substring(8,10)+":"+value.substring(10,12)
}