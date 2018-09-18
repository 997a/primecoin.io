

$(function(){
    var imgSrcArr = [
        './images/1.png',
        './images/2.png',
        './images/3.png',
        './images/4.png',
        './images/5.png',
        './images/6.png',
        './images/7.png',
        './images/8.png',
        './images/9.png',
        './images/10.png',
        './images/11.png',
        './images/12.png'
    ];

    var imgWrap = [];

    function preloadImg(arr) {
        for(var i =0; i< arr.length ;i++) {
            imgWrap[i] = new Image();
            imgWrap[i].src = arr[i];
        }
    }

//或者延迟的文档加载完毕在加载图片

    preloadImg(imgSrcArr);
    // 默认显示
    $(".dropdown-toggle").dropdown('toggle');
    $('#toConnect').click(function (){
        $('.navbar-light .navbar-nav .active>.nav-link').css('color','#fff');
        // $('#toConnect').css('color','#0fd6f3');
    });



    $("#pull").click(function (){
        if ($("#pull img").attr('src') == 'images/takeIn.png'){
            $("#pull img").attr('src','images/pull.png');
            $("#navBar").animate({right: '0'});
            $("#navBar").addClass('arrow_box');
        }else{
          $("#pull img").attr('src','images/takeIn.png');
          $("#navBar").animate({right: '-100%'});
          $("#navBar").removeClass('arrow_box');
        }
    });

    $('#navBar-nav .td').mouseenter(function (){
        $(this).css({"font-size":"24px","text-decoration":"underline"});
    });
    $('#navBar-nav .td').mouseleave(function (){
        if ($(this).attr('class') == 'nav-link td'){
          $(this).css({"font-size":"16px","text-decoration":"none"});
        }
   })
});

