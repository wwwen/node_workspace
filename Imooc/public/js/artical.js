/**
 * Created by www on 2016/3/13.
 */
$(function(){
    var ue = UE.getEditor('editor');
    $("#save").click(function(){
        var title=$("#inputTitle").val();
        var content=ue.getContent();
        var status=$("input[name='artical[status]']:checked").val();
        /*var artical={
            title:title,
            content:content,
            status:status
        };
        console.log(artical.content);*/
        $.ajax({
            type: 'post',
            dataType: 'json',
            url:'/admin/artical/new?title='+title+"&content="+content+"&status="+status,
            success : function () {
            }
        });
    });
    $("#show").click(function(){
        $(".show").html(ue.getContent());
    });
});