Component({
  properties: {
    // 这里定义了innerText属性，属性值可以在组件使用时指定
    foods: Object
  },
  data: {
    // 这里是一些组件内部数据
    flagShow: false
  },
  methods: {
    // 这里点击加的方法
    add: function (e) {
      var cartData = this.data.foods
      // 判断是否有数量，如果没有则为1，如果有则加加
      if (!cartData.count){
        cartData.count = 1;
      }else{
        cartData.count++;
      }
      
      // 将数据存入数组
      this.setData({
        cartData: cartData
      });
      // console.log(cartData.count)
      var myEventDetail = {
        cartData
      } // detail对象，提供给事件监听函数

      this.triggerEvent('myevent', myEventDetail)
    },
    // 这里是点击减的方法
    subtract: function (e) {
      var cartData = this.data.foods
      // 如果有则减减
      if (cartData.count) {
        cartData.count--;
      }
      this.setData({
        cartData: cartData
      });
      var myEventDetail = {
        cartData
      } // detail对象，提供给事件监听函数

      this.triggerEvent('myevent', myEventDetail)
    }
  }
})