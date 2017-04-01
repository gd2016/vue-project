import {  Toast } from 'mint-ui'
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

export const setparams = par => {
    var params=new URLSearchParams();
    params.append('json', '{sessionId:"'+getStore('sessionId')+'",data:'+JSON.stringify(par)+'}');
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
        }else{
            Toast({
                message: response.data.errMessage,
                position: 'bottom',
                duration: 1000
            });
            return false
        }
    }else{
        return true
    }
}