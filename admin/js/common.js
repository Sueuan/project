$(function(){
    /*��¼��ȡ����input�߿�*/
    $('.login_text  .text_main input').focus(function(){
        $(this).css({'border':'2px solid #6274a3','marginLeft':'-2px','margin-bottom':'14px','margin-top':'-2px'})
    });
    $('.login_text  .text_main input').blur(function(){
        $(this).css({'border':'none','marginLeft':'-0px','margin-bottom':'16px','margin-top':'0px'})
    });


    /*12.1������*/
    //����ֱ����
    var popmainH= $('.pop_main').height();
    $('.pop_main').css('margin-top',-popmainH/2+'px');


    //input��ȡ����
    $('.pop_main .pop_list ul li input,.pop_tree .list_main ul li input').focus(function(){
        $(this).css({'border-color':'#66baff'})
    });
    $('.pop_main .pop_list ul li input,.pop_tree .list_main ul li input').blur(function(){
        $(this).css({'border-color':'#d4dadf'})
    });

});


