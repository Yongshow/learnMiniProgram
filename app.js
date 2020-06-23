const TOKEN = 'token'

App({
  globalData:{
    token: ''
  },
  /**
   * 当小程序初始化完成时，会触发 onLaunch（全局只触发一次）
   */
  onLaunch: function () {
    // 先从缓冲中取出token
    const token = wx.getStorageSync(TOKEN)
    // 判断token是否有值
    if(token && token.length != 0){
      // 验证token是否过期
      this.check_token(token)
    } else {
      this.login()
    }
  },

  check_token(token){
    wx.request({
      url: 'http://123.207.32.32:3000/auth',
      method:'POST',
      header:{
        token
      },
      success: (res) => {
        if(!res.data.errCode){
          this.globalData.token = token
        } else {
          this.login()
        }
      },
      fail:(err) => {
        console.log(err)
      }
    })
  },

  login(){
    // 登录操作
    wx.login({
      // code只有5分钟的有效期
      success: (res) => {
        // 获取code
        const code = res.code
        // 将code发送服务器
        wx.request({
          url: 'http://123.207.32.32:3000/login',
          method: 'POST',
          data: {
            code
          },
          success:(res) => {
            // 取出token
            const token = res.data.token
            // 将token保存在globalData中
            this.globalData.token = token
            // 进行本地存储
            wx.setStorageSync(TOKEN, token)
          }
        })
      },
    })
  },

  /**
   * 当小程序启动，或从后台进入前台显示，会触发 onShow
   */
  onShow: function (options) {
    
  },

  /**
   * 当小程序从前台进入后台，会触发 onHide
   */
  onHide: function () {
    
  },

  /**
   * 当小程序发生脚本错误，或者 api 调用失败时，会触发 onError 并带上错误信息
   */
  onError: function (msg) {
    
  }
})
