Page({
  data: {
    messages: [],
    inputValue: '',
  },
  onLoad() {
    // 页面加载时可以进行一些初始化操作
  },
  onInputChange(event) {
    this.setData({
      inputValue: event.detail.value,
    });
  },
  sendMessage() {
    if (this.data.inputValue.trim()!== '') {
      const newMessage = {
        content: this.data.inputValue,
        type: 'sent',
      };
      this.setData({
        messages: [...this.data.messages, newMessage],
        inputValue: '',
      });
    }
  },
});