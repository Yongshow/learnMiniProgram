// pages/wxml/wxml.js
Page({
    data: {
        message:"你好小程序",
        firstname:"kobe",
        lastname:"bryant",
        age:12,
        nowTime:new Date().toLocaleString(),
        isActive:false,
        isShow:true,
        score:45,
        movies:["星际穿越","盗梦空间","大话西游"],
        nums:[
            [10,20,30,40],
            [110,120,130,140],
            [210,220,230,240],
            [310,320,330,340],
        ]
    },
    onLoad(){
        setInterval(()=>{
            this.setData({
                nowTime:new Date().toLocaleString()
            })
        },1000)
    },
    handleSwitchColor(){
        this.setData({
            isActive:!this.data.isActive
        })
    },
    handleSwitchShow(){
        this.setData({
            isShow:!this.data.isShow
        })
    },
    handleIncrement(){
        this.setData({
            score:this.data.score + 6
        })
    }
})