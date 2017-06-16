$(function(){
    $(window).scrollTop(0);
    //排序
    $('.sort .title ul li').on('click',function(){
        if($(this).children('.icon').hasClass('icon_active')){
            $(this).children('.text').removeClass('text_active');
            $(this).children('.icon').removeClass('icon_active');
            $('.pop_list').hide();
            $('body,html').css({'height':'auto','overflow':'auto'});
        }else{
            $(this).siblings().children('.text').removeClass('text_active');
            $(this).siblings().children('.icon').removeClass('icon_active');
            $(this).children('.text').addClass('text_active');
            $(this).children('.icon').addClass('icon_active');
            $('.pop_list').show();
            $('body,html').css({'height':'100%','overflow':'hidden'});
            $(this).parent().parent().parent().next().next().children().children('li').eq($(this).index()).show().siblings().hide();
        }
    });
    //列表勾选
    $('.pop_list ul li.list_page ul li, .pop_list ul li.list_award ul li,.pop_list .list_countries .state_warp ul li').on('click',function(){
        $(this).append('<i class="select_icon"></i>').css('color','#e7a520').siblings().find('.select_icon').remove().end().css('color','#505c67');
        $('.pop_list').hide();
        $('.sort .title ul li').children('.text').removeClass('text_active');
        $('.sort .title ul li').children('.icon').removeClass('icon_active');
        $(window).scrollTop(0);
        $('.banner').show();
        $('.prize').show();
        $('body,html').css({'height':'auto','overflow':'auto'});
    });
    //点击蒙版位置效果
    $('.pop_list .pop_bd').on('click',function(){
        $('body,html').css({'height':'auto','overflow':'auto'});
        $('.pop_list').hide();
        $('.banner').show();
        $('.prize').show();
        var Height=$('.index_page .banner')[0].offsetHeight+$('.index_page .prize')[0].offsetHeight+parseInt( $('.index_page .prize').css('marginBottom')) ;
        $(window).scrollTop(Height);
        $('.sort .title ul li').children('.icon').removeClass('icon_active');
        $('.sort .title ul li').children('.text').removeClass('text_active');

    });
    //奖项列表勾选效果
    function restbd(){
        $('.pop_list ul li.list_award ul li span.icon1').css('background-image','url("images/award_icon1.png")');
        $('.pop_list ul li.list_award ul li span.icon2').css('background-image','url("images/award_icon2.png")');
        $('.pop_list ul li.list_award ul li span.icon3').css('background-image','url("images/award_icon3.png")');
        $('.pop_list ul li.list_award ul li span.icon4').css('background-image','url("images/award_icon4.png")');
        $('.pop_list ul li.list_award ul li span.icon5').css('background-image','url("images/award_icon5.png")');
        $('.pop_list ul li.list_award ul li span.icon6').css('background-image','url("images/award_icon6.png")');
    }
    $('.pop_list ul li.list_award ul li').on('click',function(){
        var n=$(this).index()+1;
        restbd();
        $(this).children().eq(0).css('background-image','url("images/award_icon'+ n+'a.png")')
    });
    //国家列表滑动效果
    $('.sort .title ul li').eq(2).on('click',function(){
        //国家字母上划效果
        var con=[];//放进数组把含有的字母
        for(var i=0;i<$(".letter_title").length;i++) {
            con.push($(".letter_title div:last-child").eq(i).html());
          // console.log(con[i]);
            $(".letter_title div.letter_h").eq(i).html(con[i-1])
        }
       // var con=['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
        var arr=[]; //字母到顶部的距离arr
        $('.banner').hide();
        $('.prize').hide();
        var tops=$('.list_page .sort .title').outerHeight()+$('.list_page .header').outerHeight();//固定位置到顶部的高度
        var letterH=$('.letter_h').outerHeight();
        for(var i=0;i<$(".letter_title").length;i++) {
            arr.push($(".letter_title").eq(i).offset().top-tops);
         //  console.log(arr[i]);
        }
        $('.pop_list> ul').scroll(function(){
           // console.log($(window).scrollTop());
            $('.letter_h').hide();
            if( $('.pop_list> ul').scrollTop()>=0&& $('.pop_list> ul').scrollTop()<arr[1]){
                $('.fixed_letter').show().html(con[1]);
            }
            if( $('.pop_list> ul').scrollTop()>=arr[0]){
                $('.fixed_letter').show().html(con[0]);
            }else{
                $('.fixed_letter').hide();
            }
            for(i=1;i<$(".letter_title").length;i++){
                if( $('.pop_list> ul').scrollTop()>=(arr[i]-letterH+4)&& $('.pop_list> ul').scrollTop()<arr[i]){
                    $('.fixed_letter').hide();
                    $('.letter_h').hide();
                    $('.letter_h').eq(i).show();
                }else if( $('.pop_list> ul').scrollTop()>=arr[i]&& $('.pop_list> ul').scrollTop()<arr[i+1]-letterH+4){
                    $('.letter_h').hide();
                    $('.fixed_letter').show().html(con[i]);
                }
            }
        });
        $('.sidebar ul li').click(function(){
            for(var i=0;i<$(".letter_title").length;i++){
                if( $(this).html()==$(".letter_title div:last-child").eq(i).html()){
                    $('.pop_list> ul').scrollTop(arr[i]+3);
                }
            }
        })
    });
    /*=======11.24增加=====*/
    //详情页背景图
    var picbd= $('.detail_page .picture img').attr('src');
    $('.detail_page .picture div').css({'backgroundImage':'url('+picbd+')'});


    var k=$(window).width()/750;
    var seachL=($('.search_header .search_box .placeholder').width()/2)*k;
    $('.search_header .search_box .placeholder').css('marginLeft',-seachL+'px');
    /*=======11.24增加=====*/

    /*=======12.8增加=====*/
    $('.search_header .search_box input').bind('focus',function(){
        $(this).next().hide();
    });
    $('.search_header .search_box input').bind('keyup',function(){
        if($(this).val()!=''){
            $(this).next().next().show();
        }
    });
    $('.search_header .search_box .icon_delete').on('click',function(){
        $('.search_header .search_box input').val('');
        $(this).hide();
    });
    /*=======12.8增加=====*/





});