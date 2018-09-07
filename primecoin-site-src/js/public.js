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

$(function(){
    preloadImg(imgSrcArr);
    // 默认显示
    $(".dropdown-toggle").dropdown('toggle');
});