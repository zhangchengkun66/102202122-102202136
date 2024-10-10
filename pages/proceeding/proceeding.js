// pages/proceeding/proceeding.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    role: '',
    goal: '',
    deadline: '',
    progress: '',
  },
  onRoleInput(event) {
    this.setData({
      role: event.detail.value,
    });
  },
  onGoalInput(event) {
    this.setData({
      goal: event.detail.value,
    });
  },
  onDeadlineInput(event) {
    this.setData({
      deadline: event.detail.value,
    });
  },
  onProgressInput(event) {
    this.setData({
      progress: event.detail.value,
    });
  },
  saveProject() {
    // 这里可以添加保存项目信息的逻辑，比如将数据保存到本地存储或发送到服务器
    console.log('项目分工：', this.data.role);
    console.log('项目目标：', this.data.goal);
    console.log('截止日期：', this.data.deadline);
    console.log('完成进度：', this.data.progress);
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