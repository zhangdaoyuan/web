$(document).ready(function(){
  $(".tel-jd").hover(function(){
    $(".tel-jd").css("background","url(images/jd2015img.png) 10% 14% no-repeat,url(images/expansion.png) 95% center no-repeat,white");
    $(".tel-jd").css("border-bottom","1px solid white");
    $(".tel-jd div div img").css("left","0px");
    },function(){
    $(".tel-jd").css("background","url(images/jd2015img.png) 10% -5% no-repeat,url(images/shrink.png) 95% center no-repeat");
    $(".tel-jd").css("border-bottom","none");
    $(".tel-jd div div img").css("left","-2000px");
  });

  $(".focus-jd").hover(function  () {
  	// body...
  	$(".focus-jd").css("border-bottom","1px solid white");
  	$(".focus-jd div div img").css("left","0px");
  	$(".focus-jd").css("background","url(images/expansion.png) 95% center no-repeat,white");
  },function  () {
  	// body...
  	$(".focus-jd").css("border-bottom","none");
  	$(".focus-jd div div img").css("left","-2000px");
  	$(".focus-jd").css("background","url(images/shrink.png) 95% center no-repeat");
  })
});