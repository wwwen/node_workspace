/**
 * Created by www on 2016/1/23.
 */
$(function(){
    $("#name").click(function(){
        $("#message").removeClass();
    })
   $("#name").blur(function(){
        //alert("blur");
        //$("#message").removeClass();
        //var name=$(this).val();
        $.ajax({
            type: 'post',
            dataType: 'json',
            url:'/user/find?name='+$(this).val(),
            contentType: false,
            processData: false,
            success : function () {
            }
        }).done(function(results){
            if(results.message==1){
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
        })
    });

    $("#signup").validate({
        rules: {
            "user[name]": {
                required:true,
                //nameUnique:true
                },
            "user[password]": "required"
        },
        messages: {
            "user[name]": {
                required:"Please specify your name",
                //nameUnique:"the name has allready existed!!"
                },
            "user[password]": {
                required: "Please specify your password",
            }
        },
        submitHandler: function(form) {
            alert("pass validate");
            form.submit();
        }
    });

//配置通用的默认提示语
    /*$.extend($.validator.messages, {
        required: '必填字段',
        equalTo: "请再次输入相同的值"
    });*/
   /*jQuery.validator.addMethod("nameUnique",function(value, element){
        //var result=true;
         $("#name").blur(function(){
            $.ajax({
                type: 'post',
                dataType: 'json',
                url:'/user/find?name='+$(this).val(),
                contentType: false,
                processData: false,
                success : function (message) {
                    alert("查询完成"+message);
                }
            }).done(function(results){
                if(results.message==1){
                    console.log("用户名存在，校验不通过");
                    return true;//用户名存在
                }
                else{
                    console.log("用户名不存在，校验通过");
                    return false;
                }
            })
        });
        //alert("校验结果"+result);
    },"the name has allready existed!!");*/

});