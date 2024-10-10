// pages/join/join.js
Page({
  data: {
    name: '',
    college: '',
    major: '',
    time: '',
  },
  onNameInput(event) {
    this.setData({
      name: event.detail.value,
    });
  },
  onCollegeInput(event) {
    this.setData({
      college: event.detail.value,
    });
  },
  onMajorInput(event) {
    this.setData({
      major: event.detail.value,
    });
  },
  onTimeInput(event) {
    this.setData({
      time: event.detail.value,
    });
  },
  saveReason() {
    // 这里可以添加保存加入项目理由的逻辑，比如将数据保存到本地存储或发送到服务器
    console.log('姓名：', this.data.name);
    console.log('学院专业：', this.data.college);
    console.log('可自由支配时间：', this.data.major);
    console.log('申请理由：', this.data.time);
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})