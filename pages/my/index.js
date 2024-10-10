var app = getApp()
Page( {
  data: {
   
  },
  navigateToPage1() {
    wx.navigateTo({
      url: '/pages/personal/personal',
    });
  },
  navigateToPage2() {
    wx.navigateTo({
      url: '/pages/experience/experience',
    });
  },
  navigateToPage3() {
    wx.navigateTo({
      url: '/pages/proceeding/proceeding',
    });
  },
  navigateToPage4() {
    wx.navigateTo({
      url: '/pages/basic-information/basic-information',
    });
  },
  navigateToPage5() {
    wx.navigateTo({
      url: '/pages/raise/raise',
    });
  },
  navigateToPage6() {
    wx.navigateTo({
      url: '/pages/login/login',
    });
  },
// 生命周期函数，监听页面加载
onLoad: function () {
    // 这里可以进行数据获取或其他初始化操作
}
})
