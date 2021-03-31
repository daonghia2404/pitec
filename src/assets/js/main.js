window.onload = () => {
  bannerVideo.init()
  owlCarousel.init()
  menu.init()
}

const bannerVideo = {
  init: function() {
    this.configEvent()
  },
  configEvent: function() {
    const section = document.querySelector('.section-home-banner-video')
    const btnPlay = section.querySelector('.video-play-btn')
    const video = section.querySelector('.section-video')

    btnPlay.addEventListener('click', () => {
      section.classList.add('play')
      video.play()
    })

    video.addEventListener('click', () => {
      section.classList.remove('play')
      video.pause()
    })
  }
}

const owlCarousel = {
  init: function () {
    this.configPartnerCarousel()
    this.configProductCarousel()
  },
  configPartnerCarousel: function () {
    const carousel = $("#section-partner-carousel").owlCarousel({
      responsive: {
        0: {
          items: 1
        },
        575: {
          items: 2,
        },
        768: {
          items: 3,
        },
        991: {
          items: 4,
        },
        1200: {
          items: 6
        },
      },
      loop: true,
      autoplay: true,
      autoplayTimeout: 4000,
      autoplayHoverPause: true,
      smartSpeed: 300,
      dots: false,
      nav: false,
      margin: 15,
    });
  },
  configProductCarousel: function () {
    const carousel = $("#section-product-carousel").owlCarousel({
      responsive: {
        0: {
          items: 1
        },
      },
      loop: true,
      autoplay: true,
      autoplayTimeout: 4000,
      autoplayHoverPause: true,
      smartSpeed: 300,
      dots: true,
      nav: false,
      margin: 0,
    });
  },
}

const menu = {
  init: function() {
    this.toggleMobileMenu()
  },
  toggleMobileMenu: function() {
    const btn = document.querySelector('.header-btn-mobile ')
    const mainMenu = document.querySelector('header .header-nav')

    btn.addEventListener('click', () => {
      mainMenu.classList.toggle('active')
    })
  }
}