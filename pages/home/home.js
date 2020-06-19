// pages/home/home.js
Page({
    data: {
        counter:0
    },
    handleIncrement(event){
        // console.log(event)
        this.setData({
            counter:this.data.counter + 1
        })
    },
    handleTabClick(event){
        const titles = event.detail
        const index = titles.index
        const title = titles.title
        console.log(index,title)
    },
    handleIncrementCpn(){
        // 修改组件数据
        // 获取组件对象
        const my_sel = this.selectComponent("#id_sel")
        // 修改组件内部数据，可以但是不规范
        // my_sel.setData({
        //     counter:my_sel.data.counter + 1
        // })
        // 通过方法修改数据
        my_sel.incrementCounter(10)
    }
})