$(function(){
    //页面适应宽度
    $(window).resize(function(){size()});
    function size(){
        var formTop=$('.con_form').offset().top;
        var formH=$(window).height()-formTop-$('.con_main .con_page').height()-30;
        $('.con_form').css({'height':formH+'px'});//表格父元素的高
        $('.con_main .con_form table thead').css({'top':formTop+'px'});//表格顶部的位置
        /*表格头部的宽度*/
        for(var i=0;i< $('.con_main .con_form table th').length;i++){
            var thW=$('.con_main .con_form table td').eq(i).width();
            //console.log(thW);
            $('.con_main .con_form table th').eq(i).css({'width':thW+1+'px'});
        }
    }
    size();
    //表格滚动
    // jquery 兼容的滚轮事件
    var  maxscroll=$('.con_form')[0].scrollHeight-$('.con_form').height();

    $('.top_scroll').on("mousewheel DOMMouseScroll", function (e) {
        var scrollTop= $('.con_form').scrollTop();//获取当前的scrollTop;
        var delta = (e.originalEvent.wheelDelta && (e.originalEvent.wheelDelta > 0 ? 1 : -1)) ||  // chrome & ie
            (e.originalEvent.detail && (e.originalEvent.detail > 0 ? -1 : 1));              // firefox
        if (delta > 0) {
            function scrollDown(){
                if(scrollTop<0){
                    clearTimeout(time1)
                }
                $('.con_form').scrollTop(scrollTop-100)
            }
            time1=  setTimeout(scrollDown,100);
        } else if (delta < 0) {
            function scrollUp(){
                if(scrollTop>maxscroll){
                    clearTimeout(time2)
                }
                $('.con_form').scrollTop(scrollTop+100)
            }
            time2=setTimeout(scrollUp,100);
        }
    });
//input获取焦点
    $('.con_main .con_search .search_list li input').focus(function(){
        $(this).css({'border-color':'#66baff'})
    });
    $('.con_main .con_search .search_list li input').blur(function(){
        $(this).css({'border-color':'#d4dadf'})
    });

    $('.page_main .page_right .search input').focus(function(){
        $(this).parent().css({'border-color':'#66baff'})
    });
    $('.page_main .page_right .search input').blur(function(){
        $(this).parent().css({'border-color':'#d4dadf'})
    });
    //新增页面显示
    $('.con_main .con_add').click(function(){
        //console.log(1);
        //$('.add_page').show();

        $('.index_main .main_warp', parent.document).hide();
        $('.add_page_iframe', parent.document).show();
       // $('.index_main .main_warp').hide();
    });

});


