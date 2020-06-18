// pages/home/home.js
Page({
    data: {
        titles:["衣服","裤子","鞋子"]
    },
    handleBtnClick(){
        console.log("按钮点击")
    },
    handleTouchStart(){
        console.log("handleTouchStart")
    },
    handleTouchMove(){
        console.log("handleTouchMove")
    },
    handleTouchEnd(){
        console.log("handleTouchEnd")
    },
    handleTap(){
        console.log("handleTag")
    },
    handleLongPress(){
        console.log("handleLongPress")
    },
    handleEventClick(event){
        console.log(event)
    },
    handleItemClick(event){
        // console.log(event)
        const dataset = event.target.dataset;
        const title = dataset.item;
        const index = dataset.index;
        console.log(title,index)
    },
    handleCapView1(){
        console.log("handleCapView1")
    },
    handleCapView2(){
        console.log("handleCapView2")
    },
    handleCapView3(){
        console.log("handleCapView3")
    },
    handleBindView1(){
        console.log("handleBindView1")
    },
    handleBindView2(){
        console.log("handleBindView2")
    },
    handleBindView3(){
        console.log("handleBindView3")
    },
})