$(function() {
    /*12.22�޸�*/
    //ҳ����Ӧ���
    /*1.����ͳ��չ��170px �ջظ߶�30px
    * 2.��ർ��264px
    * 3.����ͳ��չ�����м���Ͼ���250px;����ͳ���ջ����м���Ͼ���110px;
    * 4.��ർ��264px;
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
        $('.index_main .main_warp').css({'width': mainW + 'px', 'height': mainH-170 + 'px'})//�Ҳ���Ҫ���ݵĿ��
        $('.add_main .add_warp').css({'width': mainW + 'px', 'height': mainH + 'px'});
        $('.main_top').css({'width':mainW});
    }
    size();
    /*12.22�޸�*/
    //ͷ������
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
    //һ���б�����Ч��
    $('.sidebar ul li.first_list div,.bar_hide .bar_list .list_title').hover(function() {
        $(this).find('.list1_title2').addClass('list1_hover');
        $(this).addClass('list1_hover');
    },function(){
        $(this).removeClass('list1_hover');
    });
    //�����б�����Ч��
    $('.sidebar ul li.second_list,.bar_hide .bar_list .list_title ul li.title_2').hover(function() {
        $(this).addClass('list2_hover');
    },function(){
        $(this).removeClass('list2_hover');
    });
    //һ���б���
    $('.sidebar ul li.first_list div').click(function() {
        if ($(this).next().is(':hidden')) {
            $('.sidebar ul li.first_list ul ').hide(); //�������ж�������
            $('.sidebar ul li.first_list div.list2_list1_active ').next().show();//��ʾ�Ҳ���ʾ���ݵĶ�������
            $(this).find('.icon_unfold').addClass('unfold_active');//�ұ�ͼ��չ��
            $(this).addClass('list1_active');
            $(this).next().show();//��ʾ��ǰһ�������Ķ�������
        } else {
            $(this).find('.icon_unfold').removeClass('unfold_active');
            $(this).removeClass('list1_active');
            $(this).next().hide();
        }
    });
    //�����б���
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

    //�����б��������л�
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
    //����б��۵�
    $('.bar_btn').click(function(){
        $(this).parent().parent().hide();
        $(this).parent().parent().parent().css({'width':'54px'});
        $('.index_main .main_warp').css({'padding-left':'54px'});
        var mainW = $(window).width() - 54;
        $('.index_main .main_warp,.add_main .add_warp').css({'width': mainW + 'px'});
        $('.main_top').css({'width':mainW,'padding-left':'54px'});
        $(this).parent().parent().next().show();
    });
    //����б���ʾ
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