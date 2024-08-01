$(document).ready(function () {
     $(document).click(function (event) {
          // language
          if (!$(event.target).closest(".top-header__btn").length) {
               $(".top-header__btn").removeClass("top-header__btn_active");
          }
          if ($(event.target).closest(".top-header__btn").length) {
               $(".top-header__btn").toggleClass("top-header__btn_active");
          }

          // menu

          if (
               !$(event.target).closest(".bottom-header .btn-catalog").length &&
               !$(event.target).closest(".menu-header__list").length
          ) {
               $("html").removeClass("menu-open");
          }
          if ($(event.target).closest(".bottom-header .btn-catalog").length) {
               $("html").toggleClass("menu-open");
               $(this)
                    .toggleClass("btn-catalog_active")
                    .next()
                    .slideToggle(300);
          }

          if ($(event.target).closest(".menu-mobile__item_search").length) {
               $("html").toggleClass("search-open");
          }

          if (
               !$(event.target).closest(".menu-mobile__item_search").length &&
               !$(event.target).closest(".search-mobile").length
          ) {
               $("html").removeClass("search-open");
          }

          if (
               (!$(event.target).closest(".center-header__burger").length &&
                    !$(event.target).closest(".menu-burger").length) ||
               $(event.target).closest(".menu-burger__close").length
          ) {
               $("html").removeClass("burger-open");
          }
          if ($(event.target).closest(".center-header__burger").length) {
               $("html").toggleClass("burger-open");
          }
     });

     $(".menu-burger__btn").click(function (event) {
          $(this).toggleClass("btn-catalog_active").next().slideToggle(300);
     });

     $(".catalog-link_btn").click(function (event) {
          $(this).toggleClass("catalog-link_active").next().slideToggle(300);
     });

     $(".item-catalog").hover(
          function () {
               $(this)
                    .addClass("catalog-link_active")
                    .find(".item-catalog__spoll")
                    .slideDown(300);
          },
          function () {
               $(this)
                    .removeClass("catalog-link_active")
                    .find(".item-catalog__spoll")
                    .slideUp(300);
          }
     );

     $(".bottom-header__search input").on("focus", function () {
          $(".bottom-header .result-search").addClass("result-search_active");
     });
     $(".bottom-header__search input").on("blur", function () {
          $(".bottom-header .result-search").removeClass(
               "result-search_active"
          );
     });
     $(".bottom-header__search input").on("input", function () {
          if ($(this).val().length > 0) {
               $(".bottom-header .result-search__search").addClass(
                    "result-search__search_active"
               );
               $(".bottom-header .result-search__history").removeClass(
                    "result-search__history_active"
               );
          } else {
               $(".bottom-header .result-search__search").removeClass(
                    "result-search__search_active"
               );
               $(".bottom-header .result-search__history").addClass(
                    "result-search__history_active"
               );
          }
     });

     $(".header__mobile-search input").on("focus", function () {
          $(".header__mobile-search .result-search").addClass(
               "result-search_active"
          );
     });
     $(".header__mobile-search__search input").on("blur", function () {
          $(".header__mobile-search .result-search").removeClass(
               "result-search_active"
          );
     });
     $(".header__mobile-search input").on("input", function () {
          if ($(this).val().length > 0) {
               $(".header__mobile-search .result-search__search").addClass(
                    "result-search__search_active"
               );
               $(".header__mobile-search .result-search__history").removeClass(
                    "result-search__history_active"
               );
          } else {
               $(".header__mobile-search .result-search__search").removeClass(
                    "result-search__search_active"
               );
               $(".header__mobile-search .result-search__history").addClass(
                    "result-search__history_active"
               );
          }
     });

     $(".main-section__mobile-search input").on("focus", function () {
          $(".main-section__mobile-search .result-search").addClass(
               "result-search_active"
          );
     });
     $(".main-section__mobile-search input").on("blur", function () {
          $(".main-section__mobile-search .result-search").removeClass(
               "result-search_active"
          );
     });
     $(".main-section__mobile-search input").on("input", function () {
          if ($(this).val().length > 0) {
               $(
                    ".main-section__mobile-search .result-search__search"
               ).addClass("result-search__search_active");
               $(
                    ".main-section__mobile-search .result-search__history"
               ).removeClass("result-search__history_active");
          } else {
               $(
                    ".main-section__mobile-search .result-search__search"
               ).removeClass("result-search__search_active");
               $(
                    ".main-section__mobile-search .result-search__history"
               ).addClass("result-search__history_active");
          }
     });

     $(".card__plus").click(function () {
          var input = $(this).siblings("input");
          var currentValue = parseInt(input.val());
          input.val(currentValue + 1);
     });

     // Обработчик для кнопки "-"
     $(".card__minus").click(function () {
          var input = $(this).siblings("input");
          var currentValue = parseInt(input.val());
          if (currentValue > 1) {
               input.val(currentValue - 1);
          }
     });

     // sliders

     $(".main-section__slides").slick({
          prevArrow: ".main-section__arr_prev",
          nextArrow: ".main-section__arr_next",
     });

     $(".clients__slider").slick({
          prevArrow: ".clients__arr_prev",
          nextArrow: ".clients__arr_next",
          slidesToShow: 3,
          centerMode: false,
          responsive: [
               {
                    breakpoint: 992,
                    settings: {
                         slidesToShow: 2,
                    },
               },
               {
                    breakpoint: 480,
                    settings: {
                         slidesToShow: 1,
                    },
               },
          ],
     });

     $(".catalog__slider").slick({
          prevArrow: ".catalog__arr_prev",
          nextArrow: ".catalog__arr_next",
          slidesToShow: 2,
          centerMode: false,
          // centerPadding: '50px',
          responsive: [
               {
                    breakpoint: 480,
                    settings: {
                         variableWidth: true,
                         slidesToShow: 2,
                    },
               },
          ],
     });

     $(".stocks__slider").slick({
          prevArrow: ".stocks__arr_prev",
          nextArrow: ".stocks__arr_next",
          slidesToShow: 4,
          centerMode: false,
          responsive: [
               {
                    breakpoint: 992, // Сначала 992px
                    settings: {
                         slidesToShow: 3,
                    },
               },
               {
                    breakpoint: 768, // Сначала 992px
                    settings: {
                         slidesToShow: 2,
                    },
               },
               {
                    breakpoint: 480, // Затем 480px
                    settings: {
                         variableWidth: true,
                         slidesToShow: 2,
                    },
               },
          ],
	});
	
	$(".hits__slider-wrapper").each(function () {
          var $slider = $(this).find(".hits__slider");
          var $prevArrow = $(this).find(".hits__arr_prev");
          var $nextArrow = $(this).find(".hits__arr_next");

          $slider.slick({
               prevArrow: $prevArrow,
               nextArrow: $nextArrow,
               slidesToShow: 4,
               centerMode: false,
               responsive: [
                    {
                         breakpoint: 992,
                         settings: {
                              slidesToShow: 3,
                         },
                    },
                    {
                         breakpoint: 768,
                         settings: "unslick",
                    },
               ],
          });
     });

     // $(".hits__slider").slick({
     //      prevArrow: ".hits__arr_prev",
     //      nextArrow: ".hits__arr_next",
     //      slidesToShow: 4,
     //      centerMode: false,
     //      // centerPadding: '50px',
     //      responsive: [
     //           {
     //                breakpoint: 992, // Сначала 992px
     //                settings: {
     //                     slidesToShow: 3,
     //                },
     //           },
     //           {
     //                breakpoint: 768, // Сначала 992px
     //                settings: "unslick",
     //           },
     //      ],
     // });

     if ($(window).width() < 992) {
          $(".news__slider").slick({
               slidesToShow: 2,
               centerMode: false,
               arrows: false,

               responsive: [
                    {
                         breakpoint: 768,
                         settings: {
                              variableWidth: true,
                              slidesToShow: 2,
                         },
                    },
               ],
          });
     }
});
