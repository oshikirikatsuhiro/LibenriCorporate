jQuery(function ($) {
    $(".accordion-content").css("display", "none");
    $(".js-accordion-title").click(function () {
      $(".js-accordion-title").not(this).removeClass("open");
      $(".js-accordion-title").not(this).next().slideUp(300);
      $(this).toggleClass("open");
      $(this).next().slideToggle(300);
    });
  });

  jQuery( window ).on( 'scroll', function() {
    if ( 200 < jQuery( this ).scrollTop() ) { 
      jQuery( '#global-nav' ).addClass( 'm_fixed' );
    } else {
      jQuery( '#global-nav' ).removeClass( 'm_fixed' );
    }
  });

  jQuery( window ).on( 'scroll', function() {
    if ( 200 < jQuery( this ).scrollTop() ) { 
      jQuery( '.nav_img' ).addClass( 'i_fixed' );
    } else {
      jQuery( '.nav_img' ).removeClass( 'i_fixed' );
    }
  });

  jQuery( window ).on( 'scroll', function() {
    if ( 200 < jQuery( this ).scrollTop() ) { 
      jQuery( '.f_color' ).addClass( 'f_fixed' );
    } else {
      jQuery( '.f_color' ).removeClass( 'f_fixed' );
    }
  });

// アニメーション
  $(function(){
	$(window).scroll(function (){
		$('.fadein').each(function(){
			var elemPos = $(this).offset().top;
			var scroll = $(window).scrollTop();
			var windowHeight = $(window).height();
			if (scroll > elemPos - windowHeight + 200){
				$(this).addClass('scrollin');
			}
		});
	});
});


$(function() {
  var $win = $(window),
      $header = $('.nav_var'),
      animationClass = 'is-animation';

  $win.on('load scroll', function() {
    var value = $(this).scrollTop();
    if ( value > 100 ) {
      $header.addClass(animationClass);
    } else {
      $header.removeClass(animationClass);
    }
  });
});


$(function(){
  $("#nav_toggle").on('click', function(){
    $("header").toggleClass('open');
    $("nav").fadeToggle(500);
  });
  $("nav").on('click', function(){
    $("header").toggleClass('open');
    $("nav").fadeToggle(500);
  });
});

$(function(){
    $(window).scroll(function (){
        $('.action').each(function(){
            var elemPos = $(this).offset().top;
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();
            if (scroll > elemPos - windowHeight + 100){
                $(this).addClass('move');
            }
        });
    });
});

$(function(){
    $("#inquiry_submit").click(function(){
    $("#inrquiry_form_contents").addClass("sp");
    $("#result_form").removeClass("sp");
    location.href = "#inrquiry_form";
    });
});

$(function(){
  $(window).scroll(function (){
    $('.fadein').each(function(){
      var elemPos = $(this).offset().top;
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      if (scroll > elemPos - windowHeight + 100){
        $(this).addClass('scrollin');
      }
    });
  });
});

$(function(){
  $('a[href^="#"]').click(function(){
    var speed = 500;
    var href= $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top;
    $("html, body").animate({scrollTop:position}, speed, "swing");
    return false;
  });
});

$(function(){
  $('.overlayMenuBtn').on('click', function(){

    var $overlay = $('.overlayMenu');
    var openClass = 'open';

    if( !$overlay.hasClass(openClass) ){

      $('.overlayMenuBtn span:nth-child(1)').css({'transform':'rotate(-45deg)', 'top':'10px'});
      $('.overlayMenuBtn span:nth-child(2)').css({'opacity':'0'});
      $('.overlayMenuBtn span:nth-child(3)').css({'transform':'rotate(45deg)', 'top':'8px', 'border': '1px solid #C3A572'});

      $overlay.addClass(openClass);
      $('body').css( 'overflow', 'hidden');
      $overlay.fadeIn('slow');

    } else {

      $('.overlayMenuBtn span:nth-child(1)').css({'transform':'rotate(0)', 'top':'0px'});
      $('.overlayMenuBtn span:nth-child(2)').css({'opacity':'1'});
      $('.overlayMenuBtn span:nth-child(3)').css({'transform':'rotate(0)', 'top':'20px', 'border': '1px solid #999'});

      $overlay.removeClass(openClass);
      $('body').css( 'overflow', 'auto');
      $overlay.fadeOut('slow');
    }

  });
});