// pages/character/character.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  onSignatureChange(event) {
    this.setData({
      signature: event.detail.value,
    });
  },
  saveSignature() {
    // 这里可以添加保存个性签名的逻辑，比如将签名保存到本地存储或发送到服务器
    console.log('个性签名：', this.data.signature);
  },

  onLoad(options) {

  },


  onReady() {

  },


  onShow() {

  },

 
  onHide() {

  },


  onUnload() {

  },


  onPullDownRefresh() {

  },


  onReachBottom() {

  },


  onShareAppMessage() {

  }
})