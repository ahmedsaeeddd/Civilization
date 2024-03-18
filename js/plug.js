$(document).ready(function(){

  $(window).scroll(function(){
    if($(window).scrollTop() >= 1000){
        $(".scroll").fadeIn(400);
    }else{
        $(".scroll").fadeOut(400);
    }
    });  
    $(".scroll").click(function(e){
     e.preventDefault();
     $("html,body").animate({
       scrollTop:0
     },1000);
    });

  $(".button").click(function(){
    $(this).addClass("active").siblings().removeClass("active");
    var filter = $(this).attr('data-filter');
  if(filter == 'all'){
    $('.image').show(400);
  }else{
    $('.image').not('.'+filter).hide(200);
    $('.image').filter('.'+filter).show(400);
  
  }
  
  });
 $(".bar").click(function(){
    $(".navbar nav").css({
      left: 0
    });
    $(".bar").hide(200);
    $(".close").show(200);
 });

$(".close").click(function(){
  $(this).hide(200);
  $(".bar").show(200);
  $(".navbar nav").css({
    left:'-100%'
  });
});


$(".navbar nav ul li a").click(function(e){
  e.preventDefault();
  $("html,body").animate({
  scrollTop:$('#' + $(this).data('scroll')).offset().top
  },1000);
  $(".navbar nav").css({
    left:'-100%'
  });
  });


  });

 
