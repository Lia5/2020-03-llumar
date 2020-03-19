$(function() {
    //popup
    if(jQuery('.modal-dialog').length) {
        let modalWrap = $('.modal');
        
        //popup
        $(".modal-open").click(function (e){
          e.preventDefault();
          var btn = $(this);
          var numModal = btn.attr('data-target');
          var modal =  $(numModal);
          var modalWrap = $('.modal-dialog');
          $('body').addClass('modal-open');
          $('.modal-backdrop').addClass('fade').addClass('show').css("z-index", "1040");
          modal.removeClass('disabled');
          modal.addClass('flex').addClass('show');
        //   modal.css({"padding-right":"15px", "display":"block"})
        modalWrap.removeClass('fadeInUp').addClass('fadeInDown').addClass('show');
        });
      
        $('.modal-close').click(function (){
            var modalWrap = $('.modal-dialog');
            modalWrap.removeClass('fadeInDown');
            modalWrap.addClass('fadeOutUp');
          setTimeout(function() {
              $('.modal').addClass('disabled');
            }, 700);
          setTimeout(function() {
              $('.modal').removeClass('flex').removeClass('show');
              $('body').removeClass('modal-open');
            }, 800);  
      
        });
        $('.modal').mouseup(function (e){ // событие клика по веб-документу
          var div = $(".modal-dialog"); // тут указываем ID элемента
          var close = $('.modal-close');
          if (close.is(e.target)) {
      
          } else if (!div.is(e.target) // если клик был не по нашему блоку
          && div.has(e.target).length === 0) { // и не по его дочерним элементам
              var modalWrap = $('.modal-dialog');
              modalWrap.removeClass('fadeInDown');
              modalWrap.addClass('fadeOutUp');
              setTimeout(function() {
                  $('.modal').addClass('disabled');
              }, 700);
              setTimeout(function() {
                  $('.modal').removeClass('flex').removeClass('show');
                  $('body').removeClass('modal-open');
              }, 800); 
            
          }
        });
    }


    if(jQuery('.navbar-toggler').length) {
      $('.navbar-toggler').on('click', function(){
        $(this).toggleClass('collapsed');
        // $('#topmenu').toggleClass('collapse');
        $('#topmenu').toggleClass('show');
        if( $(this).attr('aria-expanded') == 'false') {
          $(this).attr('aria-expanded', "true");
        } else {
          $(this).attr('aria-expanded', "false");
        };
      })
    }



});