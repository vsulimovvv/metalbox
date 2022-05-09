window.addEventListener('DOMContentLoaded', () => {
  // * ===== Mask input
  $('input[type="tel"]').mask('+7 (999) 999-99-99');

  function removeHeader() {
    const sections = document.querySelectorAll('.catalog-section');
    const headerCatalog = document.querySelector('.header--catalog');

    const catalogFooter = document.querySelector('.catalog-section--footer');

    let length = sections.length - 1;
    sections.forEach((el) => {
      const sectionHeight = el.offsetHeight;
      const sectionTop = el.offsetTop - 100;

      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        headerCatalog.style.opacity = '0';
        headerCatalog.style.visibility = 'hidden';
      } else {
        headerCatalog.style.opacity = '1';
        headerCatalog.style.visibility = 'visible';
      }
    });
  }
  window.addEventListener('scroll', removeHeader);

  (function activeClass() {
    const check = document.querySelectorAll('.checkout-box__box');
    function removeActive() {
      check.forEach((item) => {
        item.classList.remove('checkout-box__box--active');
      });
    }
    check.forEach((item) => {
      item.addEventListener('click', (e) => {
        removeActive();
        item.classList.add('checkout-box__box--active');
      });
    });
  })();

  (function activeClass() {
    const check = document.querySelectorAll('.colors__item');
    function removeActive() {
      check.forEach((item) => {
        item.classList.remove('colors__item--active');
      });
    }
    check.forEach((item) => {
      item.addEventListener('click', (e) => {
        removeActive();
        item.classList.add('colors__item--active');
      });
    });
  })();

  $.scrollify({
    section: '.catalog-section',
    sectionName: 'section-name',
    interstitialSection: '',
    easing: 'easeOutExpo',
    scrollbars: true,
    standardScrollElements: '',
    setHeights: true,
    overflowScroll: true,
    updateHash: true,
    touchScroll: true,
    scrollSpeed: 100,
    offset: 0,
    before: function () {},
    after: function () {
      var $current = $.scrollify.current();
      $('.catalog-section').removeClass('active');
      $current.addClass('active');
    },
  });

  //* Scroll Section Active Link *//
  const sections = document.querySelectorAll('section[id]');

  function scrollActive() {
    const scrollY = window.pageYOffset;

    sections.forEach((current) => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop - 50;
      sectionId = current.getAttribute('id');

      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        document
          .querySelector('.menu a[href*=' + sectionId + ']')
          .classList.add('menu__link--active');
      } else {
        document
          .querySelector('.menu a[href*=' + sectionId + ']')
          .classList.remove('menu__link--active');
      }
    });
  }
  window.addEventListener('scroll', scrollActive);

  // * ===== Slider
  (function slider() {
    const sliderEl = document.querySelector('.product__slider');
    new Swiper(sliderEl, {
      autoplay: {
        delay: 4000,
        disableOnInteraction: false,
      },
      loop: true,
      grabCursor: true,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });
  })();

  (function slider() {
    const sliderEl = document.querySelector('.hero__slider');
    new Swiper(sliderEl, {
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.hero .swiper-button-next',
        prevEl: '.hero .swiper-button-prev',
      },
    });
  })();

  (function sliderIndividual() {
    const sliderEl = document.querySelector('.individual-card__slider');
    new Swiper(sliderEl, {
      spaceBetween: 15,
      slidesPerView: 'auto',
      navigation: {
        nextEl: '.individual-card__content .swiper-button-next',
        prevEl: '.individual-card__content .swiper-button-prev',
      },
    });
  })();

  (function individualCard() {
    const bigImg = document.querySelector('.individual-card__left img');
    const smallImgs = document.querySelectorAll('.individual-card__img img');
    const slides = document.querySelectorAll('.individual-card__slide');

    function removeActive() {
      slides.forEach((slide) => {
        slide.classList.remove('individual-card__slide--active');
      });
    }

    slides.forEach((slide) => {
      slide.addEventListener('click', (e) => {
        removeActive();
        slide.classList.add('individual-card__slide--active');
      });
    });

    smallImgs.forEach((img) => {
      img.addEventListener('click', (e) => {
        bigImg.src = img.src;
      });
    });
  })();

  //* Change Background Header
  function scrollHeader() {
    const nav = document.querySelector('header');

    if (this.scrollY >= 100) {
      nav.classList.add('scroll-header');
    } else {
      nav.classList.remove('scroll-header');
    }
  }
  window.addEventListener('scroll', scrollHeader);

  // ! Change
  const header = document.querySelector('header');
  if (window.pageYOffset >= 100) {
    header.classList.add('scroll-header');
  }

  // // * ===== Custom select
  // (function customSelect() {
  //   const selects = document.querySelectorAll('.select');
  //   selects.forEach((el) => {
  //     const select = new Choices(el, {
  //       itemSelectText: '',
  //       searchEnabled: false,
  //     });
  //   });
  // })();

  // * ===== Show Menu
  (function showMenu() {
    const menuBtn = document.querySelector('.header__toggle');
    const menu = document.querySelector('.mobile-menu');
    const menuCloseBtn = document.querySelector('.mobile-menu__close');
    const body = document.querySelector('body');
    const overlay = document.querySelector('.overlay');
    menuBtn.addEventListener('click', (e) => {
      menu.classList.toggle('active');
      overlay.classList.toggle('active');
      body.classList.toggle('no-scroll');
    });
    overlay.addEventListener('click', (e) => {
      menu.classList.remove('active');
      overlay.classList.remove('active');
      body.classList.remove('no-scroll');
    });
    menuCloseBtn.addEventListener('click', (e) => {
      menu.classList.remove('active');
      overlay.classList.remove('active');
      body.classList.remove('no-scroll');
    });
  })();

  // * ===== Modal
  (function modals() {
    function bindModal(openBtn, modal, close) {
      const openBtnEl = document.querySelectorAll(openBtn);
      const modalEl = document.querySelector(modal);
      const closeEl = document.querySelectorAll(close);
      const body = document.querySelector('body');
      if (modalEl) {
        openBtnEl.forEach((el) => {
          el.addEventListener('click', (e) => {
            if (e.target) {
              e.preventDefault();
            }
            modalEl.classList.add('active');
            body.classList.add('no-scroll');
          });
        });
        closeEl.forEach((btn) => {
          btn.addEventListener('click', (e) => {
            modalEl.classList.remove('active');
            body.classList.remove('no-scroll');
          });
        });
        modalEl.addEventListener('click', (e) => {
          if (e.target === modalEl) {
            modalEl.classList.remove('active');
            body.classList.remove('no-scroll');
          }
        });
      }
    }
    bindModal('.product__spec-btn', '.popup--spec', '.popup__close');
    bindModal('.cart-total', '.popup--cart', '.popup__close');
    bindModal('.btn-request', '.popup--request', '.popup__close');
    bindModal('.btn-individual', '.popup--individual', '.popup__close');
  })();

  // * ===== Toggle Tabs
  function someTabs(headerSelector, tabSelector, contentSelector, activeClass) {
    const header = document.querySelectorAll(headerSelector);
    const tab = document.querySelectorAll(tabSelector);
    const content = document.querySelectorAll(contentSelector);
    if (header) {
      hideTabContent();
      showTabContent();
      function hideTabContent() {
        content.forEach((item) => {
          item.classList.remove('active');
        });
        tab.forEach((item) => {
          item.classList.remove(activeClass);
        });
      }
      function showTabContent(i = 0) {
        content[i].classList.add('active');
        tab[i].classList.add(activeClass);
      }
      header.forEach((item) => {
        if (item) {
          item.addEventListener('click', (e) => {
            const target = e.target;
            if (target.classList.contains(tabSelector.replace(/\./, ''))) {
              tab.forEach((item, i) => {
                if (target == item || target.parentNode == item) {
                  hideTabContent();
                  showTabContent(i);
                }
              });
            }
          });
        }
      });
    }
  }
  someTabs('.tabs', '.tabs-btn', '.tabs-content', 'tabs-btn--active');
});
