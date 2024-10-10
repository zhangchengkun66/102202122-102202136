// pages/basic-information/basic-information.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    name: '',
    college: '',
    major: '',
    character: '',
    strength: '',
    showSaveMessage: false, // 初始不显示提示信息
    saveMessage: '',
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
  onCharacterInput(event) {
    this.setData({
      character: event.detail.value,
    });
  },
  onStrengthInput(event) {
    this.setData({
      strength: event.detail.value,
    });
  },
saveInfo() {
    // 保存逻辑
    console.log('姓名：', this.data.name);
    console.log('学院：', this.data.college);
    console.log('专业：', this.data.major);
    console.log('性格：', this.data.character);
    console.log('擅长的工作：', this.data.strength);
    this.setData({
      showSaveMessage: true,
      saveMessage: '保存成功',
    });
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