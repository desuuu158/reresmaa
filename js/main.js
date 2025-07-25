(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();
    
    
    // Initiate the wowjs
    new WOW().init();


    // Navbar on scrolling
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.navbar').fadeIn('slow').css('display', 'flex');
        } else {
            $('.navbar').fadeOut('slow').css('display', 'none');
        }
    });


    // Modal Video
    var $videoSrc;
    $('.btn-play').click(function () {
        $videoSrc = $(this).data("src");
    });
    console.log($videoSrc);
    $('#videoModal').on('shown.bs.modal', function (e) {
        $("#video").attr('src', $videoSrc + "?autoplay=1&amp;modestbranding=1&amp;showinfo=0");
    })
    $('#videoModal').on('hide.bs.modal', function (e) {
        $("#video").attr('src', $videoSrc);
    })
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Facts counter
    $('[data-toggle="counter-up"]').counterUp({
        delay: 10,
        time: 2000
    });

    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: false,
        smartSpeed: 1000,
        margin: 25,
        loop: true,
        center: true,
        dots: false,
        nav: true,
        navText : [
            '<i class="bi bi-chevron-left"></i>',
            '<i class="bi bi-chevron-right"></i>'
        ],
        responsive: {
            0:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:3
            }
        }
    });

    
})(jQuery);     

  function showLoveModal() {
    document.getElementById("loveModal").style.display = "flex";
  }

  function closeLoveModal() {
    document.getElementById("loveModal").style.display = "none";
  }

   function changeSong() {
    const player = document.getElementById('audioPlayer');
    const selector = document.getElementById('songSelector');
    player.src = selector.value;
    player.play();
  }

    // Surat efek ketik
  const letterText = 'aku minta maaf belum bisa jadi cwo yang sempurna buat kamu, aku minta maaf belum bisa ngertiin kamu, aku minta maaf ego aku selalu tinggi, tapi kamu harus tau, aku akan selalu berusaha buat jadi cwo terbaik buat kamu, aku bakal berubah, aku bakal berusaha, aku bakal belajar lagi, biar kamu bisa nyaman sama aku. kemarin.. kayanya aku masi belum siap punya cwe lagi, semenjak main ml aku jadi suka deketin cwe, ga serius sama cwe, aku sekarang sadar itu salah, aku masih trust issue sama cwe jadi aku gapernah anggep serius sama cwe, sekarang aku mau fokus sama kamu, mau fokus perbaikin diri aku, aku gaakan trusst issue lagi, aku percaya sama kamu sayangg, kamu beda dari yang lain' ;

  let i = 0;
  const speed = 35;
  function typeWriter() {
    if (i < letterText.length) {
      document.getElementById("typed-letter").innerHTML += letterText.charAt(i);
      i++;
      setTimeout(typeWriter, speed);
    }
  }
  window.onload = function () {
    typeWriter();
    playMusic();
    createSakura();
  };

  // Musik otomatis
  function playMusic() {
    const music = document.getElementById('bgMusic');
    music.volume = 0.5;
    music.play().catch(() => {
      // user interaction needed in some browsers
    });
  }

  // Bunga sakura jatuh
  function createSakura() {
    const sakura = document.createElement("div");
    sakura.classList.add("sakura");
    sakura.style.left = Math.random() * window.innerWidth + "px";
    sakura.style.animationDuration = (5 + Math.random() * 5) + "s";
    document.body.appendChild(sakura);

    setTimeout(() => {
      sakura.remove();
    }, 10000);
  }

window.addEventListener("DOMContentLoaded", function () {
      const music = document.getElementById("bg-music");

      music.play().then(() => {
        music.muted = false;
        let vol = 0.0;
        const fade = setInterval(() => {
          if (vol < 0.7) {
            vol += 0.05;
            music.volume = vol;
          } else {
            clearInterval(fade);
          }
        }, 300);
      }).catch(() => {
        document.addEventListener("click", () => {
          music.muted = false;
          music.volume = 0.7;
          music.play();
        }, { once: true });
      });
    });

