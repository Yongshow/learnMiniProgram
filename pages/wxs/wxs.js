// pages/wxs/wxs.js
Page({
    data: {
        price:"25.666666",
        time:1560598160,
        nowTime :new Date().toLocaleString()
    },
    onLoad(){
        setInterval(()=>{
            this.setData({
                nowTime:new Date().toLocaleString()
            })
        },1000)
    }
})