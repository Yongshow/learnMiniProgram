// components/py-prop/my-prop.js
Component({
    /**
     * 组件的属性列表
     */
    properties: {
        // 写法一
        // title:String
        // 写法二 推荐
        title:{
            type:String,
            value:"我是默认标题",
            // observer:function(newVal, oldVal){
            //     console.log(newVal,oldVal)
            // }
        },
        content:{
            type:String,
            value:"我是默认内容"
        },
        
    },
    externalClasses: ['titleclass'],

    /**
     * 组件的初始数据
     */
    data: {

    },

    /**
     * 组件的方法列表
     */
    methods: {

    }
})
