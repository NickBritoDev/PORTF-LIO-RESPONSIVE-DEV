$(document).ready(function(){
  $(window).scroll(function(){
    if(this.scrollY > 20){
      $('.navbar').addClass("sticky");
    }else{
      $('.navbar').removeClass("sticky");
    }
  });
  //active menu
  $('.menu-btn').click(function(){
    $('.navbar .menu').toggleClass("active")
  });
});    