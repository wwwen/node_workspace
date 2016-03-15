/**
 * Created by www on 2016/3/15.
 */
$(function(){
    $(".content").each(function(){
        $(this).html($(this).attr("content"));
    });
});