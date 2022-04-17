//防抖（debounce）
//定义：  对于短时间内连续触发的事件（上面的滚动事件），防抖的含义就是让某个时间期限（如上面的1000毫秒）内，事件处理函数只执行一次。
//实际运用：按钮频繁点击，页面resize
export const debounce = (fn:any,wait:number) => {
    let timeid:number,flag:boolean = true;
    return function(){
        clearTimeout(timeid);
        if(flag){
        fn();
        flag = false;
        }else{
        timeid = setTimeout(function(){
            flag = true;
        },wait);  
        }
    }
}

//节流（throttle）
//让事件在一定时间内只执行一次
//实际运用：搜索框input事件，例如要支持输入实时搜索可以使用节流方案。
export const throttle = (fn:any,wait:number) => {
    let timeid:any = null;
    return function(){
        if(!timeid){
        timeid = setTimeout(function(){
            fn();
            timeid = null;
        },wait)
        }
    }
}

export default {
    debounce,
    throttle
}

