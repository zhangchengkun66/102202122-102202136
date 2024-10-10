Page({
  data: {
    username: '',
    password: '',
  },
  onUsernameInput(event) {
    this.setData({
      username: event.detail.value,
    });
  },
  onPasswordInput(event) {
    this.setData({
      password: event.detail.value,
    });
  },
  login() {
    wx.switchTab({
   url: '/pages/my/index',
   
    // 这里可以添加登录逻辑，比如发送请求验证账号密码

  });
  console.log('用户名：', this.data.username);
  console.log('密码：', this.data.password);
  },
});  