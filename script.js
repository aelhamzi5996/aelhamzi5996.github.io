$(document).ready(function () {

  /* ANIMATION DES BARRES DE COMPÉTENCES : 
  s'animent au scroll quand elles
  entrent dans la fenêtre */
  function animateBars() {
    $('.skill-bar, .lang-bar').each(function () {
      var $bar      = $(this);
      var targetW   = $bar.data('width');
      var barTop    = $bar.offset().top;
      var winBottom = $(window).scrollTop() + $(window).height();

      if (winBottom > barTop && $bar.width() === 0) {
        $bar.animate({ width: targetW }, 900, 'swing');
      }
    });
  }

  animateBars();
  $(window).on('scroll', animateBars);


  /* ACCORDÉON INTERACTIF – FORMATION */
  $('.acc-header').on('click', function () {
    var $body = $(this).next('.acc-body');

    // Fermer tous les autres
    $('.acc-body').not($body).slideUp(300);
    $('.acc-header').not(this).removeClass('open');

    // Ouvrir / fermer celui-ci
    $body.slideToggle(300);
    $(this).toggleClass('open');
  });

  // Ouvrir le premier par défaut
  $('.acc-header').first().trigger('click');


  /*  EFFET SURVOL SUR LES TAGS (sidebar)*/
  $(document).on('mouseenter', '.tag', function () {
    $(this).stop().animate({ paddingLeft: '16px', paddingRight: '16px' }, 150);
  }).on('mouseleave', '.tag', function () {
    $(this).stop().animate({ paddingLeft: '10px', paddingRight: '10px' }, 150);
  });


  /*  VALIDATION FORMULAIRE DE CONTACT (jQuery)
        React rend le formulaire, jQuery valide */

  // Utiliser un délégué car React monte le DOM après jQuery
  $(document).on('click', '#btn-send', function () {
    var valid = true;

    // Réinitialiser
    $('.error-msg').hide();
    $('#nom, #email, #message').removeClass('error');

    // Valider Nom
    if ($('#nom').val().trim() === '') {
      $('#nom').addClass('error');
      $('#nom-err').show();
      valid = false;
    }

    // Valider Email (format regex)
    var emailVal   = $('#email').val().trim();
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(emailVal)) {
      $('#email').addClass('error');
      $('#email-err').show();
      valid = false;
    }

    // Valider Message
    if ($('#message').val().trim() === '') {
      $('#message').addClass('error');
      $('#msg-err').show();
      valid = false;
    }

    // Si tout OK alors succès
    if (valid) {
      $('#nom, #email, #message').val('');
      $('#success-msg').fadeIn(400);
      setTimeout(function () {
        $('#success-msg').fadeOut(400);
      }, 4000);
    }
  });

  // Effacer l'erreur dès que l'utilisateur retape
  $(document).on('input', '#nom, #email, #message', function () {
    $(this).removeClass('error');
    $('#' + this.id + '-err').hide();
  });


  /* ANIMATION APPARITION DES SECTIONS : fade-in au scroll */
  $('section').css({ opacity: 0, transform: 'translateY(20px)' });

  function revealSections() {
    $('section').each(function () {
      var top       = $(this).offset().top;
      var winBottom = $(window).scrollTop() + $(window).height();
      if (winBottom > top + 50) {
        $(this).animate({ opacity: 1 }, 500);
        $(this).css('transform', 'translateY(0)');
      }
    });
  }

  revealSections();
  $(window).on('scroll', revealSections);

});