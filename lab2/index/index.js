// pages/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    region:["北京市","北京市","东城区"],
    now:''
  },

  changeRegion:function(event){
    this.setData({
      region:event.detail.value
    });
    this.getWeather();  //更新天气
  },

  getWeather:function(){
    var that=this;  //this不可以直接在wxAPI函数中使用
    wx.request({
      url: 'https://geoapi.qweather.com/v2/city/lookup?',
      data:{
        location:this.data.region[2],
        adm:this.data.region[1],
        key:"34266d07df5649d1b040c6434a36b786"
      },
      success(res){
        wx.request({
          url: 'https://devapi.qweather.com/v7/weather/now?',
          data:{
            location:res.data.location[0].id,
            key:"34266d07df5649d1b040c6434a36b786"
          },
          success(res){
            that.setData({now:res.data.now})
          }
        });
      }
    });
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getWeather();
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