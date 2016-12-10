    var $boxs = $('#main>div');   //获取box
    var photoWidth = $boxs.eq(0).outerWidth();//获取照片宽度
    var photoNum =Math.floor( $(window).width() / photoWidth ); //得到列数
    $('#main').width(photoNum * photoWidth).css('margin','auto');
    
    var hArr = [];
    $boxs.each(function (index , value) {
        var h = $boxs.eq(index).outerHeight(); // 取每张照片的高度
        if(index < photoNum){
            hArr[index] = h;//给第一排照片的高度赋值
        }else{
            var minH = Math.min.apply(null,hArr);//数组中最短的元素
            var minHindex = $.inArray(minH,hArr); //最短照片的高度
            var m = ($(window).width()-photoNum*photoWidth)/2;//照片居中后两边的留白宽度
            $(value).css({
                'position':'absolute',
                'top':minH + 'px',
                'left':minHindex*photoWidth+m + 'px'
            })
            hArr[minHindex] += $boxs.eq(index).outerHeight(); //改变高度，重新获取最短照片的位置
        }
    
    })
