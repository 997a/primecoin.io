$(function(){
//     let BaseUrl = "www.baidu/"
    // $.ajax({
    //     url: BaseUrl + "",
    //     type:"get/post/delete/put",
    //     contentType:"application/json",//如果是post请求必须带上
    //     datatype:"json",
    //     success(data) {
    //         console.log(JSON.parse(data))
    //         for(let i=0;i<data.length;i++) {
    //             $("#content").append("<ul class='list'></ul>")
    //                 for(let j=0;j<data.list.length;j++) {
    //                     console.log(data[i].list[j])
    //                 }
    //         }
    //     }

    // });


let arr = ["", 'img01.jpg','img.jpg','1.jpg','2.jpg'];
    for(let i=1;i<5;i++){

        $("#content").append("<ul class='list'><li>" +
            "<div class='data'>" + "<img src='images/"+ arr[i] +"' class='fl'> <span class='f'> 2018-08-24</span>" +
            "</div>" + "<p>Currency has long been integrated with human development.Each revolution in currency takes human development" +
            " and economy into a new era. In the oldest of times</p>" +
            "</li>" +
            "<li>" +
            "<div class='data'>" + "<img src='images/"+ arr[i] +"' class='fl'> <span class='f'> 2018-08-24</span>" +
            "</div>" + "<p>Currency has long been integrated with human development.Each revolution in currency takes human development " +
            "and economy into a new era. In the oldest of times</p>" +
            "</li>" +
            "<li>" +
            "<div class='data'>" + "<img src='images/"+ arr[i] +"' class='fl'> <span class='f'> 2018-08-24</span>" +
            "</div>" + "<p>Currency has long been integrated with human development.Each revolution in currency takes human development" +
            " and economy into a new era. In the oldest of times</p>" +
            "</li>" +
            "<li>" +
            "<div class='data'>" + "<img src='images/"+ arr[i] +"' class='fl'> <span class='f'> 2018-08-24</span>" +
            "</div>" + "<p>Currency has long been integrated with human development.Each revolution in currency takes human development" +
            " and economy into a new era. In the oldest of times</p>" +
            "</li></ul>")
        $("#indicator").append("<li>"+ i +"</li>")
    }
    $("#content .list").eq(0).addClass("on");

    $("#indicator li").each((index,element) => {
        $(element).click(() => {

            $("#content .list").each((i,ele) => {
                $("#content .list").eq(i).removeClass("on");
            });
            $("#content .list").eq(index).addClass("on");
        })
    })
})



//mouseover
$(document).ready(function(){
    $("#a").mouseover(function () {
        $(this).attr("src","images/7.png")

    })
});
$(document).ready(function(){
    $("#b").mouseover(function () {
        $(this).attr("src","images/8.png")
    })
});

$(document).ready(function(){
    $("#c").mouseover(function () {
        $(this).attr("src","images/9.png")
    })
});

$(document).ready(function(){
    $("#d").mouseover(function () {
        $(this).attr("src","images/10.png")
    })
});
$(document).ready(function(){
    $("#e").mouseover(function () {
        $(this).attr("src","images/11.png")
    })
});
$(document).ready(function(){
    $("#f").mouseover(function () {
        $(this).attr("src","images/12.png")
    })
});
//mouseout
$(document).ready(function(){
    $("#a").mouseout(function () {
        $(this).attr("src","images/1.png")

    })
});
$(document).ready(function(){
    $("#b").mouseout(function () {
        $(this).attr("src","images/2.png")
    })
});

$(document).ready(function(){
    $("#c").mouseout(function () {
        $(this).attr("src","images/3.png")
    })
});

$(document).ready(function(){
    $("#d").mouseout(function () {
        $(this).attr("src","images/4.png")
    })
});
$(document).ready(function(){
    $("#e").mouseout(function () {
        $(this).attr("src","images/5.png")
    })
});
$(document).ready(function(){
    $("#f").mouseout(function () {
        $(this).attr("src","images/6.png")
    })
});












