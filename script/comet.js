
$(document).ready(function() {
    $('.middle_nav_toggler').click(function(e){
      e.preventDefault()
      $('.tertiary_nav').toggleClass('mobile_middlenav_open')
      $('.tertiary_nav .middle_nav_items').slideToggle(100);
    })
  
    $('.tertiary_nav .arrow_box').click(function(e){
      e.preventDefault();
      $(e.currentTarget).siblings('.middle_subnav_container').slideToggle();
      $(e.currentTarget).toggleClass('reverse');
    })
  })
  
  let mobile_nav = document.querySelector(".tertiary_nav_mobile");
  let menu_btn = document.querySelector(".open_icon");
  menu_btn.addEventListener("click", (e)=>{
    mobile_nav.style.owerflow = "visible";
  })