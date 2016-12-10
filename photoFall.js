/**
 * Created by Forri on 2016/12/8.
 */

$(window).on('load',function () {
    beginShow();
    firstLine();
    waterFall();

})
//产生范围随机数
function random(n,m){
    var c = m-n+1;
    return Math.floor(Math.random() * c + n);
}

//照片墙中心显示
function beginShow(){
    var $boxs = $('#main>div');
    //循环每个div，并在页面中随机展示
    $boxs.each(function (index,value) {
        var w = random($(window).width()/2-200,$(window).width()/2+200)-400;
        var h = random(200,600)+200;
        $(value).css({
            'position': 'absolute',
            'top': w + 'px',
            'left': h + 'px'
        })

    })
}
//移动照片，构造第一行照片
function firstLine() {
    var $boxs = $('#main>div');   //获取box
    var photoWidth = $boxs.eq(0).outerWidth();//获取照片宽度
    var photoNum =Math.floor( $(window).width() / photoWidth ); //得到列数
 //   $(window).click(function () {
        //点击后排布照片墙
        // $boxs.eq(0).animate({
        //     'top':'10px',
        //     'left':'20px'
        // },2000);
        var w = ($(window).width()-photoNum*photoWidth)/2;
        $boxs.each(function (index,value) {
            if(index < photoNum){
                $boxs.eq(index).animate({
                    'top':'10px',
                    'left':w + 'px'
                },4000)
                w += photoWidth;
            }
        })
  //  });
}
//根据第一排，瀑布布局
function waterFall(){
    var $boxs = $('#main>div');   //获取box
    var photoWidth = $boxs.eq(0).outerWidth();//获取照片宽度
    var photoNum =Math.floor( $(window).width() / photoWidth ); //得到列数
   // $('#main').width(photoNum * photoWidth).css('margin','auto');

    var hArr = [];
    $boxs.each(function (index , value) {
        var h = $boxs.eq(index).outerHeight(); // 取每张照片的高度
        if(index < photoNum){
            hArr[index] = h;//给第一排照片的高度赋值
        }else{
            var minH = Math.min.apply(null,hArr);//数组中最短的元素
            var minHindex = $.inArray(minH,hArr); //最短照片的高度
            var m = ($(window).width()-photoNum*photoWidth)/2;//照片居中后两边的留白宽度
            $(value).animate({
                'position':'absolute',
                'top':minH + 'px',
                'left':minHindex*photoWidth+m + 'px'
            },4000)
            hArr[minHindex] += $boxs.eq(index).outerHeight(); //改变高度，重新获取最短照片的位置
        }

    })
}
    
    
    
    // var $boxs = $('#main>div');   //获取box
    // var photoWidth = $boxs.eq(0).outerWidth();//获取照片宽度
    // var photoNum =Math.floor( $(window).width() / photoWidth ); //得到列数
    // $('#main').width(photoNum * photoWidth).css('margin','auto');
    //
    // var hArr = [];
    // $boxs.each(function (index , value) {
    //     var h = $boxs.eq(index).outerHeight(); // 取每张照片的高度
    //     if(index < photoNum){
    //         hArr[index] = h;//给第一排照片的高度赋值
    //     }else{
    //         var minH = Math.min.apply(null,hArr);//数组中最短的元素
    //         var minHindex = $.inArray(minH,hArr); //最短照片的高度
    //         var m = ($(window).width()-photoNum*photoWidth)/2;//照片居中后两边的留白宽度
    //         $(value).css({
    //             'position':'absolute',
    //             'top':minH + 'px',
    //             'left':minHindex*photoWidth+m + 'px'
    //         })
    //         hArr[minHindex] += $boxs.eq(index).outerHeight(); //改变高度，重新获取最短照片的位置
    //     }
    //
    // })

//}