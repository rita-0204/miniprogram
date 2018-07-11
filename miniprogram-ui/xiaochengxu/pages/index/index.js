const util = require('../../utils/util.js');
const api = require('../../config/api.js');
const user = require('../../services/user.js');
var QQMapWX = require('../../utils/qqmap-wx-jssdk.js');
var qqmap = new QQMapWX({
  //在腾讯地图开放平台申请密钥 http://lbs.qq.com/mykey.html
  key: 'BFZBZ-EPF36-JUMSO-ESZEE-MCSO3-7GBD6'
});
//获取应用实例
const app = getApp()
Page({
  data: {
    newGoods: [],
    hotGoods: [],
    topics: [],
    brands: [],
    floorGoods: [],
    banner: [],
    channel: []
  },
  onLoad: function () {

  },
  onShareAppMessage: function () {
    return {
      title: 'NideShop',
      path: '/pages/index/index'
    }
  },
  getIndexData: function () {
    let that = this;
    util.request(api.IndexUrl).then(function (res) {
      console.log(333,res)
      if (res.code === 0) {
        that.setData({
          newGoods: res.data
        });  
      }
    });
  },
  loadInfo: function(){
    var that = this
    //用微信提供的api获取经纬度
    wx.getLocation({
      type: 'wgs84',
      success: function (res) {
        var longitude = res.longitude
        var latitude = res.latitude
        //用腾讯地图的api，根据经纬度获取城市
        qqmap.reverseGeocoder({
          location: {
            latitude: latitude,
            longitude: longitude
          },
          success: function (res) {
            console.log(res)
            var address = res.result.formatted_addresses.recommend
            //获取市和区（区可能为空）
            that.setData({ 
              myAddress: address
            })
            //控制台输出结果
            console.log(that.data.myAddress)
          }
        })
      }
    })
  },
  onLoad: function (options) {
    this.getIndexData();
    this.loadInfo();
  },
  onReady: function () {
    // 页面渲染完成
  },
  onShow: function () {
    // 页面显示
  },
  onHide: function () {
    // 页面隐藏
  },
  onUnload: function () {
    // 页面关闭
  },
})
