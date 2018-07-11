// components/shopCart/shopCart.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    selectFoods: Object,
    foodId: String,
    foodCount: String,
    foodName: String,
    foodPrice: String
  },

  /**
   * 组件的初始数据
   */
  data: {
    exist:{},
    totalPrice:0,
    showModalStatus: false,
    flagShow: true
  },
  ready:function(){
    this.clear()
  },
  /**
   * 组件的方法列表
   */
  methods: {

    cascadeToggle: function () {  //切换购物车开与关
      if (this.data.showModalStatus == true) {
        this.hideModal();
      } else {
        this.showModal();
      }
    },
    showModal: function () {
      // 显示遮罩层  
      var animation = wx.createAnimation({
        duration: 200,
        timingFunction: "linear",
        delay: 0
      })
      this.animation = animation
      // 遮罩层位置
      // animation.translateY(-10).step()
      this.setData({
        animationData: animation.export(),
        showModalStatus: true
      })
      // setTimeout(function () {
      // animation.translateY(0).step()
      this.setData({
        animationData: animation.export()
      })
      // }.bind(this), 200)
    },
    hideModal: function () {
      // 隐藏遮罩层  
      var animation = wx.createAnimation({
        duration: 200,
        timingFunction: "linear",
        delay: 0
      })
      this.animation = animation;
      // 遮罩层位置
      animation.translateY(0).step()
      this.setData({
        animationData: animation.export(),
      })
      // setTimeout(function () {
      // animation.translateY(0).step()
      this.setData({
        animationData: animation.export(),
        showModalStatus: false
      })
      // }.bind(this), 200)
    },
    // 这里点击加的方法
    add: function (e) {
       var cartData = this.data
       var cartData = cartData.foodCount++;
       this.totalPrice()
       
    },
    // 这里是点击减的方法
    subtract: function (e) {
      var cartData = this.data
      var cartData = cartData.foodCount--;
      
      this.totalPrice()
      
    },
    totalPrice: function (cartData){
        var that = this
        var foodId = that.data.foodId
        var foodCount = that.data.foodCount
        var foodName = that.data.foodName
        var foodPrice = that.data.foodPrice
        var selectFoods = that.data.selectFoods
      
        // for(var i =0; i< selectFoods.length;i++){
        //     if(selectFoods[i].id == foodId){
        //       // if (selectFoods[i].count == undefined){
        //             // delete selectFoods[i]
        //         // }else{
        //           // console.log(23,selectFoods[i])
        //             selectFoods[i].count = foodCount;
        //         // }
        //         that.setData({
        //             selectFoods: selectFoods
        //         });
        //     } 
        // }

        // 添加商品到数组
        // var cart = {};
        // cart.name = foodName;
        // cart.count = foodCount;
        // cart.unitPrice = foodPrice;

        // // this.data.selectFoods.push(e.detail.cartData)

        // abc.push(cart);
        // that.setData({
        //   // abc: abc
        // });
        // console.log(that.data.abc)

        // //将购物车数据添加到缓存
        // var that = this
        // //获取缓存中的已添加购物车信息
        var selectFoods = wx.getStorageSync('selectFoods') || []
        // console.log(11,selectFoods)
        //判断购物车缓存中是否已存在该货品
        var exist = selectFoods.find(function (ele) {
          return ele.id === foodId
        })
        // console.log(exist)
        if (exist) {
          //如果存在，则增加该货品的购买数量
          if(foodCount == '1'){
              delete that.data.foodCount
              delete that.data.foodName
              delete that.data.foodPrice
          }else{
            exist.count = parseInt(that.data.foodCount)
          }
        } else {
          //如果不存在，传入该货品信息
          selectFoods.push({
            id: that.data.foodId,
            count: that.data.foodCount,
            price: that.data.foodPrice,
            title: that.data.foodName
          })
        }

        //加入购物车数据，存入缓存
        wx.setStorage({
          key: 'selectFoods',
          data: selectFoods,
          success: function (res) {
            //添加购物车的消息提示框
            // wx.showToast({
            //   title: "添加购物车",
            //   icon: "success",
            //   durantion: 2000
            // })
            that.setData({
              selectFoods: selectFoods
            });
          }
        })

        // var total = 0;
        // selectFoods.forEach(function (food) {
        //   console.log(36, food)
        //   total += food.price * food.quantity
        // })
        // that.data.totalPrice = total
        // var totalPrice = this.data.totalPrice
        console.log(111,selectFoods)

        

      },
      clear:function(){
        wx.clearStorage()
        // try {
        //   wx.clearStorageSync()
        // } catch (e) {
        //   // Do something when catch error
        // }
      }
  }
})
