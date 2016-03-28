/**
 * Created by www on 2016/3/8.
 */
$("#edit").click(function(){
    alert($(this).data-id.val());
    /*$.ajax({
        type: 'post',
        dataType: 'json',
        url:'/user/find?name='+$(this).val(),
        contentType: false,
        processData: false,
        success : function () {
        }
    }).done(function(results){
        if(results.message){
            console.log("用户名存在，校验不通过");
            //return true;//用户名存在
            $("#message").html("<font color='red'>red the name has allready existed!!</font>");
            $("#submit").attr("disabled","disabled");
        }
        else{
            $("#submit").removeAttr("disabled");
            console.log("用户名不存在，校验通过");
            //return false;
        }
    })*/
});