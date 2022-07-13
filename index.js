$(function(){
  $('.rev_slider').slick({
    slideToShow:1,
    infinite: true,
    dots: true,
   
    responsive: [
      {
        breakpoint:767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  })
})