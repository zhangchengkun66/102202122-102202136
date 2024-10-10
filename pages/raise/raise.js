Page({
  data: {
    projectName: '',   // 项目名称
    projectDate: '',   // 项目日期
    peopleRequired: 0  // 人数要求
  },

  // 输入项目名称
  onNameInput(e) {
    this.setData({
      projectName: e.detail.value
    });
  },

  // 选择项目日期
  onDateChange(e) {
    this.setData({
      projectDate: e.detail.value
    });
  },

  // 输入人数要求
  onPeopleInput(e) {
    this.setData({
      peopleRequired: e.detail.value
    });
  },
  // 输入项目目标
  onTargetInput(e) {
    this.setData({
      projectName: e.detail.value
    });
  },
  // 提交项目
  submitProject() {
    const { projectName, projectDate, peopleRequired } = this.data;

    // 检查是否填写完整
    if (!projectName || !projectDate || !peopleRequired || onTargetInput) {
      wx.showToast({
        title: '请填写完整信息',
        icon: 'none'
      });
      return;
    }

    // 模拟项目提交
    wx.showToast({
      title: '项目发起成功',
      icon: 'success'
    });

    // 这里可以调用后端接口，将项目数据发送到服务器
    /*
    wx.request({
      url: 'https://example.com/create_project',
      method: 'POST',
      data: {
        projectName,
        projectDate,
        peopleRequired
      },
      success(res) {
        console.log('项目发起成功', res);
      },
      fail(err) {
        console.error('项目发起失败', err);
      }
    });
    */
  }
});
