window.addEventListener('DOMContentLoaded', () => {
  (function activeClassPayment() {
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

  (function activeClassPayment() {
    const check = document.querySelectorAll('.checkout-box__choose');
    function removeActive() {
      check.forEach((item) => {
        item.classList.remove('checkout-box__choose--active');
      });
    }
    check.forEach((item) => {
      item.addEventListener('click', (e) => {
        removeActive();
        item.classList.add('checkout-box__choose--active');
      });
    });
  })();
  //
  //
  //

  // var swiper = new Swiper('.mySwiper', {
  //   direction: 'vertical',
  //   slidesPerView: 1,
  //   mousewheel: true,
  //   pagination: {
  //     el: '.swiper-pagination',
  //     clickable: true,
  //   },
  // });

  // function fullPageAnim() {
  //   const fullpageEl = document.getElementById('fullpage');
  //   // const menuBtn = document.querySelector('.menu__btn');
  //   // const navigation = document.querySelector('.navigation');
  //   // const navCloseBtn = document.querySelector('.navigation__close__btn');

  //   // const blurOverlay = document.querySelector('.blur__overlay');

  //   const IS_ACTIVE = 'is--active';

  //   const toggleNavigation = () => {
  //     // navigation.classList.toggle(IS_ACTIVE);
  //     // blurOverlay.classList.toggle(IS_ACTIVE);
  //     fullpageEl.classList.toggle('no-scroll');
  //   };

  //   const CLICK = 'click';

  //   // menuBtn.addEventListener(CLICK, toggleNavigation);
  //   // navCloseBtn.addEventListener(CLICK, toggleNavigation);
  //   // blurOverlay.addEventListener(CLICK, toggleNavigation);

  // }

  // fullPageAnim();
  // AOS.init({
  //   duration: 400,
  // });

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

  // function scrollAnim() {
  //   document.lastScrollPosition = 0;
  //   document.lastCentered = 0;
  //   document.onWayTo = null;

  //   document.addEventListener('scroll', (e) => {
  //     const direction =
  //       window.pageYOffset - document.lastScrollPosition > 0 ? 'down' : 'up';
  //     // console.log('1', window.pageYOffset, '2', document.lastScrollPosition);

  //     const sections = [...document.querySelectorAll('.catalog-section')];
  //     // console.log(sections);

  //     if (document.onWayTo === null) {
  //       let destIntex =
  //         direction === 'up'
  //           ? document.lastCentered - 1
  //           : document.lastCentered + 1;

  //       if (destIntex >= 0 && destIntex < sections.length) {
  //         console.log({ destIntex, direction });

  //         document.onWayTo = destIntex;

  //         window.scroll(0, sections[destIntex].offsetTop);
  //       }
  //     }

  //     sections.forEach((section, index) => {
  //       if (window.pageYOffset === section.offsetTop) {
  //         document.lastCentered = index;

  //         // section.classList.add('active');

  //         if (document.onWayTo === index) {
  //           console.log(index);
  //           document.onWayTo = null;
  //         }
  //       } else {
  //         // section.classList.remove('active');
  //       }
  //     });

  //     document.lastScrollPosition = window.pageYOffset;
  //   });
  // }

  // scrollAnim();

  // // * ===== Slider
  // (function slider() {
  //   const sliderEl = document.querySelector('.el');
  //   new Swiper(sliderEl, {
  //     pagination: {
  //       el: '.swiper-pagination',
  //     },
  //     navigation: {
  //       nextEl: '.swiper-button-next',
  //       prevEl: '.swiper-button-prev',
  //     },
  //   });
  // })();
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
  // // * ===== Show Menu
  // (function showMenu() {
  //   const menuBtn = document.querySelector('.header__toggle');
  //   const menu = document.querySelector('.mobile-menu');
  //   const menuCloseBtn = document.querySelector('.mobile-menu__close');
  //   const body = document.querySelector('body');
  //   const overlay = document.querySelector('.overlay');
  //   menuBtn.addEventListener('click', (e) => {
  //     menu.classList.toggle('active');
  //     overlay.classList.toggle('active');
  //     body.classList.toggle('no-scroll');
  //   });
  //   overlay.addEventListener('click', (e) => {
  //     menu.classList.remove('active');
  //     overlay.classList.remove('active');
  //     body.classList.remove('no-scroll');
  //   });
  //   menuCloseBtn.addEventListener('click', (e) => {
  //     menu.classList.remove('active');
  //     overlay.classList.remove('active');
  //     body.classList.remove('no-scroll');
  //   });
  // })();
  // // * ===== Accordion
  // const toggleAccordion = (accordionControl, accordionContent, accordion) => {
  //   const filters = document.querySelectorAll(accordionControl);
  //   filters.forEach((el) => {
  //     el.addEventListener('click', (e) => {
  //       const target = e.target.closest(accordion);
  //       const content = target.querySelector(accordionContent);
  //       target.classList.toggle('active');
  //       if (target.classList.contains('active')) {
  //         content.style.maxHeight = content.scrollHeight + 'px';
  //       } else {
  //         content.style.maxHeight = null;
  //       }
  //     });
  //   });
  // };
  // toggleAccordion('.accordion__control', '.accordion__content', '.accordion');
  // // * ===== Mixer
  // (function mixer() {
  //   const mixContent = document.querySelector('.mixer__content');
  //   if (mixContent) {
  //     const mixer = mixitup(mixContent);
  //   }
  // })();
  // // * ===== Modal
  // (function modals() {
  //   function bindModal(openBtn, modal, close) {
  //     const openBtnEl = document.querySelectorAll(openBtn);
  //     const modalEl = document.querySelector(modal);
  //     const closeEl = document.querySelectorAll(close);
  //     const body = document.querySelector('body');
  //     if (modalEl) {
  //       openBtnEl.forEach((el) => {
  //         el.addEventListener('click', (e) => {
  //           if (e.target) {
  //             e.preventDefault();
  //           }
  //           modalEl.classList.add('active');
  //           body.classList.add('no-scroll');
  //         });
  //       });
  //       closeEl.forEach((btn) => {
  //         btn.addEventListener('click', (e) => {
  //           modalEl.classList.remove('active');
  //           body.classList.remove('no-scroll');
  //         });
  //       });
  //       modalEl.addEventListener('click', (e) => {
  //         if (e.target === modalEl) {
  //           modalEl.classList.remove('active');
  //           body.classList.remove('no-scroll');
  //         }
  //       });
  //     }
  //   }
  //   bindModal('.download__btn', '.popup--download', '.popup__close');
  //   bindModal('.header__favorite', '.popup--card-object', '.popup__close');
  //   bindModal('.get-presentation', '.popup--get-info', '.popup__close');
  //   bindModal('.presentation__download', '.popup--get-info', '.popup__close');
  // })();
  // // * ===== Toggle Tabs
  // function someTabs(headerSelector, tabSelector, contentSelector, activeClass) {
  //   const header = document.querySelectorAll(headerSelector);
  //   const tab = document.querySelectorAll(tabSelector);
  //   const content = document.querySelectorAll(contentSelector);
  //   if (header) {
  //     hideTabContent();
  //     showTabContent();
  //     function hideTabContent() {
  //       content.forEach((item) => {
  //         item.classList.remove('active');
  //       });
  //       tab.forEach((item) => {
  //         item.classList.remove(activeClass);
  //       });
  //     }
  //     function showTabContent(i = 0) {
  //       content[i].classList.add('active');
  //       tab[i].classList.add(activeClass);
  //     }
  //     header.forEach((item) => {
  //       if (item) {
  //         item.addEventListener('click', (e) => {
  //           const target = e.target;
  //           if (target.classList.contains(tabSelector.replace(/\./, ''))) {
  //             tab.forEach((item, i) => {
  //               if (target == item || target.parentNode == item) {
  //                 hideTabContent();
  //                 showTabContent(i);
  //               }
  //             });
  //           }
  //         });
  //       }
  //     });
  //   }
  // }
  // someTabs(
  //   '.planning__content',
  //   '.planning__nav-btn',
  //   '.planning__panel',
  //   'planning__nav-btn--active'
  // );
});
