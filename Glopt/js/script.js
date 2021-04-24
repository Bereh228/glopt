// $('.button__services').on('click',function(){
//   $('.services__front').toggleClass('services__front_none');
//   $('.services__back').toggleClass('services__back_visiable');
// })

// function toggleSlide(item){
//   $(item).each(function(i){
//     $(this).on('click',function(){
//       $('.services__front').eq(i).toggleClass('services__front_none');
//       $('.services__back').eq(i).toggleClass('services__back_visiable');
//     })
//   })
// }

// function previousSlide(item){
//   $(item).each(function(i){
//     $(this).on('click',function(){
//       $('.services__back').eq(i).removeClass('services__back_visiable');
//       $('.services__front').eq(i).removeClass('services__front_none');
     
//     })
//   })
// }

// toggleSlide('.button__services');
// previousSlide('.button__services_back');

$(document).ready(function(){
  $('.button__services').each(function(i){
    $(this).on('click',function(){
      $('.services__front').eq(i).toggleClass('services__front_none');
      $('.services__back').eq(i).toggleClass('services__back_visiable');
    })
  })
  
  $('.button__services_back').each(function(i){
    $(this).on('click',function(){
      $('.services__back').eq(i).removeClass('services__back_visiable');
      $('.services__front').eq(i).removeClass('services__front_none');
    })
  })

  $('.response__slider').slick({
    centerMode: true,
    centerPadding: '150px',
    slidesToShow: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 3
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1
        }
      }
    ]
  });

})

