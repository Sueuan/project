$(function(){
    function addsize(){
       // var addformH=$(window).height()-$('.add_page .form_list').offset().top-$('.add_tab').height();
        var addformH=$(window).height()-$('.con_main .con_part2').height()-$('.add_tab').height()-155;
        $('.add_page .form_list').height(addformH)
    }
    addsize();
    $(window).resize(function(){addsize()});
    /*切换*/
    $('.add_page .add_tab ul li').click(function(){
        $(this).addClass('tab_active').siblings().removeClass('tab_active');
        $('.cover').hide();
        $(this).find('.cover').show();
        $('.add_form').eq($(this).index()).show().siblings().hide();
    });
    /*12.21修改位置*/
   //阻止冒泡
    function stopPropagation(e) {
        if (e.stopPropagation)
            e.stopPropagation();//停止冒泡  非ie
        else
            e.cancelBubble = true;//停止冒泡 ie
    }
    //input获取焦点的样式
    $('.add_page .form_list ul li input').on('focus',function(e){
        $('.add_page .form_list ul li input').css({'border-color':'#d4dadf'});
        $(this).css({'border-color':'#66baff'});
        stopPropagation(e);//调用停止冒泡方法,阻止document方法的执行
    });
    $('.add_page .form_list ul li input').on('blur',function(e){
        $('.add_page .form_list ul li input').css({'border-color':'#d4dadf'});
        stopPropagation(e);//调用停止冒泡方法,阻止document方法的执行
    });
    //下拉列表展开
    $('.down_list .drop_btn').on('click',function(e){
        $('.down_list .drop_btn').next().hide();
        $('.add_page .form_list ul li input').css({'border-color':'#d4dadf'});
        if($(this).next().is(':hidden')){
            $(this).next().show();
            $(this).prev().css({'border-color':'#66afe9'});
        }else{
            $(this).next().hide();
            $(this).prev().css({'border-color':'#d4dadf'});
        }
        stopPropagation(e);//调用停止冒泡方法,阻止document方法的执行
    });
    //下拉列表勾选
    $('.down_list .list dl dt').on('click',function(e){
        $(this).parent().parent().prev().prev().val($(this).html());
        $(this).parent().parent().hide();
        $(this).parent().parent().prev().prev().css({'border-color':'#d4dadf'});
        stopPropagation(e);//调用停止冒泡方法,阻止document方法的执行
    });
    //点击其他位置隐藏下拉列表  input边框恢复默认样式
    $(document).on('click',function(){
        $('.down_list .list').css('display','none');
    });
    $('.down_list .list').on('click',function(e){
        $(this).show();
        stopPropagation(e);//调用停止冒泡方法,阻止document方法的执行
    });
    /*12.21修改位置*/





    /*发研发后补效果*/
     //勾选框
     $('.add_page .form_list ul li.select_box span.icon').click(function(){
         if($(this).hasClass('check_box')){
             $(this).removeClass('check_box');
             $(this).parent().siblings().children('.icon').addClass('check_box');
         }else{
             $(this).addClass('check_box');
             $(this).parent().siblings().children('.icon').removeClass('check_box');
         }
     });
    /*12.26新增多选框*/
    $('.add_page .form_list ul li.check_multiple span.icon').click(function(){
        if($(this).hasClass('check_box')){
            $(this).removeClass('check_box');
          // $(this).parent().siblings().children('.icon').addClass('check_box');
        }else{
            $(this).addClass('check_box');
         //  $(this).parent().siblings().children('.icon').removeClass('check_box');
        }
    });
    /*12.26新增多选框*/

    /*12.26新增多一*/
    $('.add_page .form_list ul li.check_one span.icon').click(function(){
        if($(this).hasClass('check_box')){
            $(this).removeClass('check_box');
          // $(this).parent().siblings().children('.icon').addClass('check_box');
        }else{
            $(this).addClass('check_box');
            $(this).parent().siblings().children('.icon').removeClass('check_box');
        }
    });
    /*12.26新增多一*/
    //var titleW=$('.add_page .add_tab').width()-90;
       var titleW=$(window).width()-90;
       console.log(titleW);
        $('.add_page .add_tab').css({'width':titleW+'px'});
        $('.add_page .add_tab ul li').eq(0).css({'marginLeft':'30px'});
        //把标题所有宽度放进数组
        var arr=[];
        for(var i=0;i<$(".add_page .add_tab ul li").length;i++) {
            arr.push($(".add_page .add_tab ul li").eq(i).outerWidth());
        }
        //console.log(arr);
        var maxL=$('.add_page .add_tab ul').width()- $('.add_page .add_tab').width();
        //console.log(maxL);
        var n=-1;
        $('.title_next').on('click',function(){
            var tLeft= parseInt($('.add_page .add_tab ul').css('left')) ;
            n++;
            $('.add_page .add_tab ul').css({'left':tLeft+(-arr[n])-1+'px'});
            if(n>6){
                $('.add_page .add_tab ul').css({'left':tLeft+'px'});
                $(this).css({'background-position':'-38px 8px'});
                n=6;
            }
        });
        $('.title_prev').on('click',function(){
            var tLeft= parseInt($('.add_page .add_tab ul').css('left')) ;
            console.log(n);
            n--;
            $('.add_page .add_tab ul').css({'left':tLeft+(arr[n])+1+'px'});
            if(n<0){
                $('.add_page .add_tab ul').css({'left':0+'px'});
                $(this).css({'background-position':'9px 10px'});
                n=0;
            }
        })

});
