layui.define(['jquery'], function(exports){
  var $ = layui.$
  ,device = layui.device();


  //阻止IE7以下访问
  if(device.ie && device.ie < 8){
    layer.alert('Layui最低支持ie8，您当前使用的是古老的 IE'+ device.ie + '，你丫的肯定不是程序猿！');
  }

  //数字前置补零
  // var digit = function(num, length, end){
  //   var str = '';
  //   num = String(num);
  //   length = length || 2;
  //   for(var i = num.length; i < length; i++){
  //     str += '0';
  //   }
  //   return num < Math.pow(10, length) ? str + (num|0) : num;
  // };

  //让导航在最佳位置
  var thisItem = $('#navDemo').find('dd.layui-this');
  if(thisItem[0]){
    var itemTop = thisItem.offset().top
    ,winHeight = $(window).height()
    ,elemScroll = $('.layui-side-scroll');
    if(itemTop > winHeight - 120){
      elemScroll.animate({'scrollTop': itemTop/2}, 200)
    }
  }

  //手机设备的简单适配
  var treeMobile = $('.site-tree-mobile')
  ,shadeMobile = $('.site-mobile-shade')

  treeMobile.on('click', function(){
    $('body').addClass('site-mobile');
  });

  shadeMobile.on('click', function(){
    $('body').removeClass('site-mobile');
  });

  exports('global', {});
});