// pages/home/home.js
import {
    getMutliData,
    getGoodsData
} from '../../service/home.js'
Page({
    data: {
        banners: [],
        recommends: [],
        titles:['流行','新款','精选'],
        goods:{
            pop:{page:0,list:[]},
            new:{page:0,list:[]},
            shell:{page:0,list:[]}
        }
    },
    onLoad: function (options) {
        // 1.请求轮播图和推荐数据
       this._getMultidata()
        // 2.请求商品数据
        this._getGoodsData('pop')
        
    },

    _getMultidata(){
        getMutliData().then(res => {
            const banners = res.data.data.banner.list;
            const recommends = res.data.data.recommend.list;
            this.setData({
                banners,
                recommends
            })
        })
    },
    _getGoodsData(type){
        const page = this.data.goods[type].page + 1;
        
        getGoodsData(type, page).then(res => {
            const list = res.data.data.list;
            const oldList = this.data.goods[type].list;
            oldList.push(...list)
            console.log(oldList)
            const typeKey = "goods." + type + ".list"
            const pageKey = "goods." + type + ".page"
            this.setData({
                [typeKey]:oldList,
                [pageKey]:page + 1
            })
        })
    },

    handleTabClick(event){
        const index = event.detail.index;
    }
})