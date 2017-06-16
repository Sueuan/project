$(function() {
    /*12.22修改*/
    //页面适应宽度
    /*1.数据统计展开170px 收回高度30px
    * 2.左侧导航264px
    * 3.数据统计展开面包屑以上距离250px;数据统计收回面包屑以上距离110px;
    * 4.左侧导航264px;
    * */
    $(window).resize(function() {
        if($('.con_part1').is(':hidden')){
            var mainH= $(window).height() - 110;
            var mainW = $(window).width() - 264;
            $('.index_main .main_warp').css({'width': mainW + 'px','height': mainH + 'px'});
            $('.main_top').css({'width':mainW});
            $('.main_top').css({'height': 30 + 'px'});
            $('.sidebar').height(mainH+30);
        }else{
            size();
            var mainH= $(window).height() - 250;
            $('.index_main .main_warp').css({'height': mainH + 'px'});
            $('.main_top').css({'height': 170 + 'px'});
        }
    });
    function size() {
        var mainH = $(window).height() - 80;
        var mainW = $(window).width() - 264;
        $('.sidebar').height(mainH);
        $('.index_main .main_warp').css({'width': mainW + 'px', 'height': mainH-170 + 'px'})//右侧主要内容的宽高
        $('.add_main .add_warp').css({'width': mainW + 'px', 'height': mainH + 'px'});
        $('.main_top').css({'width':mainW});
    }
    size();
    /*12.22修改*/
    //头部收起
    $('.main_top .fold_btn').click(function(){
        if($('.con_part1').is(':hidden')){
            $(this).parent().prev().show();
            $(this).prev().show();
            var mainH= $(window).height() - 250;
            $('.index_main .main_warp').css({'height': mainH + 'px'});
            $('.main_top').css({'height': 170 + 'px'});
            $('.main_top .fold_btn').css({'background-position':'-200px -250px'});
        }else{
            $(this).parent().prev().hide();
            $(this).prev().hide();
            var mainH= $(window).height() - 110;
            $('.index_main .main_warp').css({'height': mainH + 'px'});
            $('.main_top').css({'height': 30 + 'px'});
            $('.main_top .fold_btn').css({'background-position':'-250px -250px'});
        }
    });
    //一级列表悬浮效果
    $('.sidebar ul li.first_list div,.bar_hide .bar_list .list_title').hover(function() {
        $(this).find('.list1_title2').addClass('list1_hover');
        $(this).addClass('list1_hover');
    },function(){
        $(this).removeClass('list1_hover');
    });
    //二级列表悬浮效果
    $('.sidebar ul li.second_list,.bar_hide .bar_list .list_title ul li.title_2').hover(function() {
        $(this).addClass('list2_hover');
    },function(){
        $(this).removeClass('list2_hover');
    });
    //一级列表点击
    $('.sidebar ul li.first_list div').click(function() {
        if ($(this).next().is(':hidden')) {
            $('.sidebar ul li.first_list ul ').hide(); //隐藏所有二级导航
            $('.sidebar ul li.first_list div.list2_list1_active ').next().show();//显示右侧显示内容的二级导航
            $(this).find('.icon_unfold').addClass('unfold_active');//右边图标展开
            $(this).addClass('list1_active');
            $(this).next().show();//显示当前一级导航的二级导航
        } else {
            $(this).find('.icon_unfold').removeClass('unfold_active');
            $(this).removeClass('list1_active');
            $(this).next().hide();
        }
    });
    //二级列表点击
    $('.second_list,.bar_hide .bar_list .list_title ul li.title_2').click(function(){
        $('.sidebar ul li.first_list div').removeClass('list2_list1_active');
        $('.bar_hide .bar_list .list_title div').removeClass('list2_list1_active');
        $('.second_list,.bar_hide .bar_list .list_title ul li.title_2').removeClass('list2_active');
        $('.sidebar ul li.first_list ul ').hide();
        $('.second_list').parent().prev().find('.icon').removeClass('list1_active_icon');
        $('.bar_hide .bar_list .title_1 span').removeClass('list1_active_icon');
        $('.second_list').parent().prev().find('.icon_unfold').removeClass('unfold_active');
        $('.second_list').parent().prev().removeClass('list1_active');
        $('.bar_hide .bar_list .list_title ul .list1_title2 ').removeClass('list2_list1_active');
        $(this).addClass('list2_active');
        $('.bar_hide .bar_list .list_title div').eq($(this).parent().parent().index()).addClass('list2_list1_active');
        $(this).parent().prev().addClass('list2_list1_active');
        $('.bar_hide .bar_list div .icon').eq($(this).parent().parent().index()).addClass('list1_active_icon');
        $('.bar_hide .bar_list .list_title ul .list1_title2 ').eq($(this).parent().parent().index()).addClass('list2_list1_active');
        $(this).parent().show();
        $(this).parent().prev().find('.icon').addClass('list1_active_icon');
        $(this).parent().prev().find('.icon_unfold').addClass('unfold_active');
    });

    //二级列表点击内容切换
    for (var i = 0; i < $('.title_2').length; i++) {
        $('.title_2')[i].hh = i;
        $('.title_2').eq(i).click(function() {
            $('.add_page_iframe').hide();
            for (var j = 0; j < $('.main_warp').length; j++) {
                $('.main_warp').eq(j).hide();

            }
            $('.main_warp').eq(this.hh).show();
        })
    }
    for (var i = 0; i < $('.second_list').length; i++) {
        $('.second_list')[i].hh = i;
        $('.second_list').eq(i).click(function() {
            $('.add_page_iframe').hide();
            for (var j = 0; j < $('.main_warp').length; j++) {
                $('.main_warp').eq(j).hide();
            }
            $('.main_warp').eq(this.hh).show();
        })
    }
    //左侧列表折叠
    $('.bar_btn').click(function(){
        $(this).parent().parent().hide();
        $(this).parent().parent().parent().css({'width':'54px'});
        $('.index_main .main_warp').css({'padding-left':'54px'});
        var mainW = $(window).width() - 54;
        $('.index_main .main_warp,.add_main .add_warp').css({'width': mainW + 'px'});
        $('.main_top').css({'width':mainW,'padding-left':'54px'});
        $(this).parent().parent().next().show();
    });
    //左侧列表显示
    $('.bar_show').click(function(){
        $(this).parent().hide();
        $(this).parent().parent().css({'width':'264px'});
        $('.index_main .main_warp').css({'padding-left':'264px'});
        var mainW = $(window).width() - 264;
        $('.index_main .main_warp,.add_main .add_warp').css({'width': mainW + 'px'});
        $('.main_top').css({'width':mainW,'padding-left':'264px'});
        $(this).parent().prev().show();
    });

});