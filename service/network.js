// 写法一
// export default function request(options) {
//     return new Promise((resolve, reject) => {
//         wx.request({
//             url: options.url,
//             method:options.method || 'GET',
//             data: options.data || {},
//             success: function(res) {
//                 resolve(res)
//             },
//             fail: function(err){
//                 reject(err)
//             }
//           })
//     })
// }

// 写法二
export default function request(options) {
    return new Promise((resolve, reject) => {
        wx.request({
            url: options.url,
            method:options.method || 'GET',
            data: options.data || {},
            success: resolve,
            fail: reject
          })
    })
}