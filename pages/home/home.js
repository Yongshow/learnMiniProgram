// pages/home/home.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        name:"Yong",
        age:18,
        student:[
            {id:110,name:"张三",age:30},
            {id:111,name:"李四",age:30},
            {id:112,name:"王五",age:30},
            {id:113,name:"杜六",age:30},
        ],
        counter:0
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {

    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function () {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function () {

    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide: function () {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload: function () {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh: function () {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom: function () {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function () {

    },
    /**
     * "+"点击事件
     */
    handleBtnClick1:function(){
        //1.错误做法
        //this.data.counter++
        //console.log(this.data.counter)

        //2.正确操作
        this.setData({
            counter:this.data.counter + 1
        })
    },
    handleBtnClick2:function(){
        this.setData({
            counter:this.data.counter - 1
        })
    }
})