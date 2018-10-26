$(document).ready(function() {
  var wow = new WOW(
    {
      boxClass:     'wow',      // класс, скрывающий элемент до момента отображения на экране (по умолчанию, wow)
      animateClass: 'animated', // класс для анимации элемента (по умолчанию, animated)
      offset:       200,          // расстояние в пикселях от нижнего края браузера до верхней границы элемента, необходимое для начала анимации (по умолчанию, 0)
      mobile:       false,       // включение/отключение WOW.js на мобильных устройствах (по умолчанию, включено)
      live:         true,       // поддержка асинхронно загруженных элементов (по умолчанию, включена)
      scrollContainer: null, // селектор прокручивающегося контейнера (опционально, по умолчанию, window)
      resetAnimation: true
    }
  );
  wow.init();
  function logoTransform(){
    let logo = $('.first-main-img');
    let phone = $('.header-phone');
    let topPosition = logo.offset().top + 60;
    let thisPosition = $(window).scrollTop();
    if (topPosition <= thisPosition) {
      $('.header-logo').addClass('active');
      $('.header-phone').addClass('active');
    }
    else {
      $('.header-logo').removeClass('active');
      $('.header-phone').removeClass('active');
    }
  }
  logoTransform();
  $(window).scroll(function () {
    logoTransform();
  });
  $('.menu-btn').click(function(){
    $('.menu-btn').toggleClass('active');
     $('.menu-list').toggleClass('active');
  });
  // function randomInteger(min, max) {
  //   let rand = min - 0.5 + Math.random() * (max - min + 1)
  //   rand = Math.round(rand);
  //   return rand;
  // }
  // function changeColor(){
  //     let colors = ['#66bb46', '#ffd800', '#e90e47', '#30a275', '#199bdb', '#4b2d83', '#c0327e', '#199bdb', '#ffd800', '#ce0814', '#bc3c99', '#192b85', '#66bb46', '#e90e47', '#30a275', '#4b2d83', '#c0327e', '#ce0814'];
  //     let numberColor = colors.length - 1;
  //     let circle = $('.mask-circle');
  //     setInterval(function(){
  //       for (i = 0; i < numberColor; i++) {
  //         let randomNumber = randomInteger(1, numberColor);
  //         circle.eq(i).css('background-color', colors[randomNumber]);
  //       }
  //     }, 5000)
  // }
  // changeColor();
  function logoSwitch () {
    $('.altLogo').each(function() {
      let height = $('.altLogo').width();
      $(this).css('top',
        $('.startLogo').offset().top - $(this).closest('.row').offset().top + height
      );
    });
    $('.altLogo2.header').each(function() {
      $(this).css('top',
        $('.startLogo2').offset().top - $(this).closest('.row').offset().top
      );
    });
  };
  $(document).scroll(function() {logoSwitch();});
  logoSwitch();
  $('.first-main-lang.active').hover(

    function(){
      if($(this).hasClass('lang')) {
        $('.lang.active').addClass('transform')
      }
      else {
        $('.contact.active').addClass('transform')
      }
    },
    function(){
      if($(this).hasClass('lang')) {
        $('.lang.active').removeClass('transform')
      }
      else {
        $('.contact.active').removeClass('transform')
      }
    }
  );
  setTimeout(function(){
    $('.menu-list').removeClass('active');
    $('.menu-btn').removeClass('active');
  }, 2000);
});
