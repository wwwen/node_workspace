/**
 * Created by www on 2016/2/19.
 */
$(function(){
    $(".comments").click(function(){
        //锚点
        var target=$(this);
        var toId=target.data("tid");
        var commentId=target.data("cid");

        //动态添加隐藏表单域
        //如果点击两次加判断
        if($("#toid").length>0){
            $("#toid").val(toId);
        }
        else{
            $("<input>").attr({
                id:'toid',
                type:'hidden',
                name:'comment[tid]',
                value:toId
            }).appendTo("#commentForm");
        }

        if($("#commentid").length>0){
            $("#commentid").val(commentId);
        }
        else{
            $("<input>").attr({
                id:'commentid',
                type:'hidden',
                name:'comment[cid]',
                value:commentId
            }).appendTo("#commentForm");
        }

    })
});