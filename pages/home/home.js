// pages/home/home.js
import request from '../../service/network.js'

Page({

    /**
     * 页面的初始数据
     */
    data: {

    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        // 1.原生方法网络请求
        this.get_data_origin()
        // 2.使用封装工具进行网络请求
        request({
            url: 'http://httpbin.org/get',
        }).then(res => {
            console.log(res)
        }).catch(err => {
            console.log(err)
        })
    },

    get_data_origin(){
        // 发送网络请求
        wx.request({
            url: 'http://httpbin.org/post',
            method:"POST",
          //   请求参数
            data:{
              name:"Yong",
              age:18
            },
          //   请求成功的回调函数
            success:function(res){
              console.log(res)
            }
          })
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

    }
})