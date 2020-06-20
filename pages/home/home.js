// pages/home/home.js
Page({
    data: {

    },
    handleShowToast(){
        wx.showToast({
          title: '加载中...',
          duration: 3000,
          icon: 'loading',
          mask: true
        })
    },
    handleShowModal(){
        wx.showModal({
          title: '啦啦啦',
          content: '哈哈哈',
          cancelText: '退出',
          success: function(res){
              console.log(res)
              if (res.confirm) {
                console.log('用户点击了确定')
              }
              if(res.cancel){
                  console.log('用户点击了取消')
              }
          }
        })
    },
    handleShowLoading(){
        wx.showLoading({
          title: '加载中...',
          mask: true,
        })

        setTimeout(() => {
            wx.hideLoading()
        }, 1000);
    }  ,
    handleShowActionSheet(){
        wx.showActionSheet({
          itemList: ['相册','拍照'],
          itemColor: 'red',
          success: function(res){
            console.log(res)
          }
        })
    } ,
    onShareAppMessage(){
        return{
            title:'你好鸭',
            path: 'pages/about/about',
            imageUrl: 'https://tse2-mm.cn.bing.net/th/id/OIP.nKeAU-E5_dhMJiaQo909CQHaEo?pid=Api&rs=1'
        }
    }
})