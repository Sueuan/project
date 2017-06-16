$(function(){
    //首页点击排序
    $('.index_page .sort .title ul li').on('click',function(){
        $('.banner').hide();
        $('.prize').hide();
        $('.pop_list').show();
        if($(this).children('.icon').hasClass('icon_active')){
            $('.pop_list').show();
            $(window).scrollTop(0);
        }else{
            $('.pop_list').hide();
            $('.banner').show();
            $('.prize').show();
            var Height=$('.index_page .banner')[0].offsetHeight+$('.index_page .prize')[0].offsetHeight+parseInt( $('.index_page .prize').css('marginBottom')) ;
            $(window).scrollTop(Height);
        }
        $('.index_page .pop_list').css({'top':'0.8rem'});
    });
    $('.pop_list ul li.list_page ul li, .pop_list ul li.list_award ul li,.pop_list .list_countries .state_warp ul li').on('click',function(){
        var Height=$('.index_page .banner')[0].offsetHeight+parseInt($('.index_page .prize')[0].height)+parseInt( $('.index_page .prize').css('marginBottom')) ;
        $(window).scrollTop(Height)
    });
    $(window).scroll(function(){
       // console.log($(window).scrollTop());
        var Height=($('.index_page .banner')[0].offsetHeight+$('.index_page .prize')[0].offsetHeight+parseInt($('.index_page .prize').css('marginBottom')));

      //  console.log(Height)
        var scrollT=$(window).scrollTop()
        if($(window).scrollTop()<=Height){
            $('.list_page .sort .title').css({'position':'relative','top':'0'});
            $('body').css('paddingTop','0.88rem');
        }
        if($(window).scrollTop()>Height){
            $('.list_page .sort .title').css({'position':'fixed','top':'0.88rem'});
        }
    });
    //列表勾选
    $('.pop_list ul li.list_page ul li, .pop_list ul li.list_award ul li,.pop_list .list_countries .state_warp ul li').on('click',function(){
        var Height=$('.index_page .banner')[0].offsetHeight+$('.index_page .prize')[0].offsetHeight+parseInt( $('.index_page .prize').css('marginBottom')) ;
        $(window).scrollTop(Height);
    });
});