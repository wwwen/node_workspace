/**
 * Created by www on 2016/1/22.
 */
$(function(){
    $("button").click(function(){
        var id=$(this).attr("data-id");
        //alert(id);
        var tr=$(".item-id-"+id);

        //alert(tr);
        $.ajax({
            type:"DELETE",
            url:"/admin/list?id="+id
        }).done(function(results){
            if(results.success==1){
                if(tr.length>0){
                    tr.remove();
                }
            }
        })
    });

    $("#upload").click(function(){
        //alert("click");
        var data = new FormData();
        var files = $("#file")[0].files;
        if(files){
            data.append("file", files[0]);
        }
        //alert($("#file").val());
        //console.log("success");

        $.ajax({
            type: 'post',
            dataType: 'json',
            url:'/uploadImg',
            data : data,
            contentType: false,
            processData: false,
            success : function () {
            }
        }).done(function(results){
            //alert(results.name)

        });
    });

    $("#douban").blur(function(){
        var id=$(this).val();
        if(id){
            $.ajax({
                url:"https://api.douban.com/v2/movie/subject/"+id,
                cache:true,
                type:"get",
                dataType:"jsonp",
                crossDomain:true,
                jsonp:"callback",
                success:function(data){
                    $("#inputTitle").val(data.title);
                    $("#inputDoctor").val(data.directors[0].name);
                    $("#inputCountry").val(data.countries[0]);
                    $("#inputPoster").val(data.images.large);
                    $("#inputYear").val(data.year);
                    $("#inputSummary").val(data.summary);
                }
            });
        }

    });
})