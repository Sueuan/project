$(function(){
    //列表展开
    $('img.exp_col').click(function(){
        //collapse.png 减号  expand.png加号   check_box.png勾选   check_no.png不勾选
        if($(this).next().next().is(':hidden')){
            $(this).next().next().show();
            $(this).attr('src','images/collapse.png');
        }else{
            $(this).next().next().hide();
            $(this).attr('src','images/expand.png');
        }
    });
    //勾选一级列表
    $('#div_tree> ul >li>span').click(function(){
        if($(this).children('.icon_checkbox').attr('src')=='images/check_no.png'){
            $(this).children('.icon_checkbox').attr('src','images/check_box.png');
            $(this).parent().find('.icon_checkbox').attr('src','images/check_box.png');
        }else{
            $(this).children('.icon_checkbox').attr('src','images/check_no.png');
            $(this).parent().find('.icon_checkbox').attr('src','images/check_no.png');
        }
    });
//勾选二级列表
    var    secondbtn=$('#div_tree> ul >li>ul >li>span');//二级按钮
    var    secondicon=$('#div_tree> ul >li> ul >li>span>.icon_checkbox');//二级图标
    for(var i=0;i<secondbtn.length;i++) {
        $('#div_tree> ul >li>ul >li>span')[i].hh= i;
        secondbtn.eq(i).click(function () {
            if ($(this).children('.icon_checkbox').attr('src')=='images/check_no.png'){
                secondicon.eq(this.hh).attr('src','images/check_box.png');//勾选当前二级图标
                $(this).parent().parent().parent().children().children('.icon_checkbox').attr('src','images/check_box.png');//勾选当前一级列表
                $(this).parent().find('.icon_checkbox').attr('src','images/check_box.png');//勾选当前二级的所有三级图标
            }else{
                secondicon.eq(this.hh).attr('src','images/check_no.png');//取消当前二级图标
                $('#div_tree> ul >li> ul >li').eq(this.hh).find('.icon_checkbox').attr('src','images/check_no.png');//取消当前二级的所有三级图标
                for(var j=0;j<$(this).parent().parent().find('.icon_checkbox').length;j++){
                    if($(this).parent().parent().find('.icon_checkbox').eq(j).attr('src')=='images/check_box.png'){
                        $(this).parent().parent().parent().children().children('.icon_checkbox').attr('src','images/check_box.png');
                        return;//当含有选中时跳出函数
                    }
                    $(this).parent().parent().parent().children().children('.icon_checkbox').attr('src','images/check_no.png');
                }
            }
        })
    }
    //勾选三级列表
    $('#div_tree>ul>li>ul>li>ul>li>span').click(function(){
        if($(this).children('.icon_checkbox').attr('src')=='images/check_no.png'){
            $(this).children('.icon_checkbox').attr('src','images/check_box.png');//勾选当前三级图标
            $(this).parent().parent().parent().children().children('.icon_checkbox').attr('src','images/check_box.png');//勾选二级
            $(this).parent().parent().parent().parent().parent().children().children('.icon_checkbox').attr('src','images/check_box.png');// 勾选一级
        }else{
            $(this).children('.icon_checkbox').attr('src','images/check_no.png');//取消当前三级图标
            for(var j=0;j<$(this).parent().parent().find('.icon_checkbox').length;j++){
                 if($(this).parent().parent().find('.icon_checkbox').eq(j).attr('src')=='images/check_box.png'){
                     $(this).parent().parent().parent().children().children('.icon_checkbox').attr('src','images/check_box.png');//勾选二级
                     return;
                 }
                $(this).parent().parent().parent().children().children('.icon_checkbox').attr('src','images/check_no.png');//取消勾选二级
            }
            for(var k=1;k<$(this).parent().parent().parent().parent().find('.icon_checkbox').length;k++){
               $(this).parent().parent().parent().parent().parent().children().children('.icon_checkbox').attr('src','images/check_no.png');// 取消一级
                if($(this).parent().parent().parent().parent().parent().find('.icon_checkbox').eq(k).attr('src')=='images/check_box.png'){
                    $(this).parent().parent().parent().parent().parent().children('.node_selected').children('.icon_checkbox').attr('src','images/check_box.png');
                    return;
                }
                $(this).parent().parent().parent().parent().parent().children('.node_selected').children('.icon_checkbox').attr('src','images/check_no.png');
            }
        }
    });
}) ;