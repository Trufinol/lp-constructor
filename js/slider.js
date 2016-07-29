
window.onload = function () {
  var wideVideoSwiper = new Swiper ('._wide-video-swiper', {
    direction: 'vertical',
    loop: true,
    direction: 'horizontal',
    pagination: '._video-swiper-pagination',
    paginationClickable: true,
    paginationBulletRender: function (index, className) {
        return '<span class="' + className + '">' + (index + 1) + '</span>';
    },
    nextButton: '.swiper-button-next',
    prevButton: '.swiper-button-prev',
    effect: 'fade'
  });

  var widePhotoSwiper = new Swiper ('._wide-photo-slider', {
    loop: true,
    direction: 'horizontal',
    nextButton: '.swiper-button-next',
    prevButton: '.swiper-button-prev',
    effect: 'fade'
  });

  var manyPhotoSwiper = new Swiper('._centered-slider-container', {
        slidesPerView: 4,
        spaceBetween: 20,
        autoHeight: true,
        nextButton: '.swiper-button-prev',
        prevButton: '.swiper-button-next',
        breakpoints: {

            850: {
                slidesPerView: 3,
                spaceBetween: 20,
            },
            630: {
                slidesPerView: 2,
                spaceBetween: 20,
            },
            450: {
              slidesPerView: 1,
              spaceBetween: 20,
            }
          }
    });
  var manyVideoSwiper = new Swiper('._videoblock-slider-container', {
        slidesPerView: 3,
        spaceBetween: 22,
        autoHeight: true,
        nextButton: '.swiper-button-prev',
        prevButton: '.swiper-button-next',
        breakpoints: {

            860: {
                slidesPerView: 2,
                spaceBetween: 0,
            },
            760: {
                slidesPerView: 1,
                spaceBetween: 10,
            }
          }
    });
};
