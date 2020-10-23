$(document).ready(function () {
  if ($(".news-single_page").length > 0 || $(".news-page").length > 0) {
    $(".slider-subscribe").slick({
      rtl: true,
      slidesToShow: 5,
      slidesToScroll: 1,
      infinite: false,
      speed: 500,
      prevArrow: $(".prev-slide"),
      nextArrow: $(".next-slide"),
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
          },
        },
      ],
    });

    $(".slider-subscribe_aside").slick({
      rtl: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      infinite: false,
      speed: 500,
      prevArrow: $(".prev-slide_sub"),
      nextArrow: $(".next-slide_sub"),
    });

    function transforSlide() {
      if (window.matchMedia("(min-width: 1025px)").matches) {
        let arrSlides = $(".slider-subscribe .slick-slide.slick-active img");
        arrSlides.map((i, elem) => {
          if (i === 0 || i === 4) {
            $(elem).css("transform", "scale(.9)");
            $(elem).removeClass("focus-template");
          } else if (i === 2) {
            $(elem).addClass("focus-template");
            $(elem).css("transform", "scale(.95)");
          } else {
            $(elem).css("transform", "scale(.95)");
            $(elem).removeClass("focus-template");
          }
        });
      } else if (window.matchMedia("(max-width: 1024px)").matches) {
        let arrSlides = $(".slider-subscribe .slick-slide.slick-active img");
        arrSlides.map((i, elem) => {
          if (i === 0 || i === 2) {
            $(elem).css("transform", "scale(.9)");
            $(elem).removeClass("focus-template");
          } else if (i === 1) {
            $(elem).addClass("focus-template");
            $(elem).css("transform", "scale(.95)");
          } else {
            $(elem).css("transform", "scale(.95)");
            $(elem).removeClass("focus-template");
          }
        });
      }
    }
    transforSlide();

    function transforSlideSub() {
      let arrSlides = $(
        ".slider-subscribe_aside .slick-slide.slick-active img"
      );
      arrSlides.map((i, elem) => {
        if (i === 0 || i === 2) {
          $(elem).css("transform", "scale(.85)");
        } else if (i === 1) {
          $(elem).addClass("focus-template");
          $(elem).css("transform", "scale(.95)");
        }
      });
    }
    transforSlideSub();

    $(".slider-subscribe").on("beforeChange", function () {
      setTimeout(function () {
        if (window.matchMedia("(min-width: 1025px)").matches) {
          let arrSlides = $(".slider-subscribe .slick-slide.slick-active img");
          arrSlides.map((i, elem) => {
            if (i === 0 || i === 4) {
              $(elem).css("transform", "scale(.9)");
              $(elem).removeClass("focus-template");
            } else if (i === 2) {
              $(elem).addClass("focus-template");
              $(elem).css("transform", "scale(.95)");
            } else {
              $(elem).css("transform", "scale(.95)");
              $(elem).removeClass("focus-template");
            }
          });
        } else if (window.matchMedia("(min-width: 320px)").matches) {
          let arrSlides = $(".slider-subscribe .slick-slide.slick-active img");
          arrSlides.map((i, elem) => {
            if (i === 0 || i === 2) {
              $(elem).css("transform", "scale(.9)");
              $(elem).removeClass("focus-template");
            } else if (i === 1) {
              $(elem).addClass("focus-template");
              $(elem).css("transform", "scale(.95)");
            } else {
              $(elem).css("transform", "scale(.95)");
              $(elem).removeClass("focus-template");
            }
          });
        }
      }, 100);
    });

    $(".slider-subscribe_aside").on("beforeChange", function () {
      setTimeout(function () {
        let arrSlides = $(
          ".slider-subscribe_aside .slick-slide.slick-active img"
        );
        arrSlides.map((i, elem) => {
          if (i === 0 || i === 2) {
            $(elem).css("transform", "scale(.85)");
            $(elem).removeClass("focus-template");
          } else if (i === 1) {
            $(elem).addClass("focus-template");
            $(elem).css("transform", "scale(.95)");
          } else {
            $(elem).removeClass("focus-template");
          }
        });
      }, 100);
    });

    $(".slider-subscribe .modal-template").each(function (key, value) {
      key = key + 1;
      $(value).attr("data-modal", "slider-item-" + key);
    });

    $(".slider-subscribe_aside .modal-template").each(function (key, value) {
      key = key + 1;
      $(value).attr("data-modal", "slider-item-" + key);
    });

    $(".template-item").each(function (key, value) {
      key = key + 1;
      $(value).attr("id", "slider-item-" + key);
    });

    $(".slider-subscribe_aside .modal-template").on("click", function (e) {
      e.preventDefault();
      let tab_id = $(this).attr("data-modal");
      $(".template-item").removeClass("current-item");
      $(".slider-subscribe_aside .modal-template").removeClass("current-item");
      $("body").addClass("active-modal");
      $(this).addClass("current-item");
      $("#" + tab_id).addClass("current-item");
    });

    $(".slider-subscribe .modal-template").on("click", function (e) {
      e.preventDefault();
      let tab_id = $(this).attr("data-modal");
      $(".template-item").removeClass("current-item");
      $(".slider-subscribe .modal-template").removeClass("current-item");
      $("body").addClass("active-modal");
      $(this).addClass("current-item");
      $("#" + tab_id).addClass("current-item");
    });

    $(".template-close").on("click", function () {
      $("body").removeClass("active-modal");
      $(".template-item").removeClass("current-item");
      $(".slider-subscribe .modal-template").removeClass("current-item");
    });

    if ($(".news-single_page").length > 0) {
      if (window.matchMedia("(min-width: 992px)").matches) {
        $(window).scroll(function () {
          let scrolltop = $(this).scrollTop();
          let offsetForm = $(".main-sub_form").offset().top;
          offsetForm = offsetForm - 300;

          if (scrolltop >= offsetForm) {
            $("aside .subscribe-form").removeClass("d-lg-block");
          } else {
            $("aside .subscribe-form").addClass("d-lg-block");
            $(".slider-subscribe_aside").slick("reinit");
          }
        });

        if (window.matchMedia("(min-width: 992px)").matches) {
          $(window).on("load", function () {
            let scrolltop = $(this).scrollTop();
            let offsetImg = $(".news-img_wrapp").offset().top;
            let offsetForm = $(".main-sub_form").offset().top;
            offsetForm = offsetForm - 300;

            if (scrolltop != offsetForm && scrolltop >= offsetImg) {
              let box = $("aside");
              let boxWidth = $(box).width();
              box.css("position", "fixed");
              box.css("top", 0);
              box.width(boxWidth);
            }

            if (scrolltop >= offsetForm) {
              $("aside .subscribe-form").removeClass("d-lg-block");
            } else {
              $("aside .subscribe-form").addClass("d-lg-block");
            }
          });

          function fixedSub() {
            let box = $("aside");
            let boxWidth = $(box).width();
            let top =
              box.offset().top -
              parseFloat(box.css("marginTop").replace(/auto/, 0));
            $(window).scroll(function () {
              let windowpos = $(window).scrollTop();
              if (windowpos < top) {
                box.css("position", "static");
              } else {
                box.css("position", "fixed");
                box.css("top", 0);
                box.width(boxWidth);
              }
            });
          }
          fixedSub();
        }
      }
    }

    $(".contacts-aside .cont-modal").click(function (e) {
      $("#fperson").val($(this).closest(".contact-item").find("h3").text());
      let authorName = $(this).closest(".contact-item").find("h3").text();
      $(".contacts-modal .message-to").text(authorName);
      $("#fperson_email").val(
        $(this).closest(".contact-item").find(".mail-link_contact").text()
      );
    });
  }

  if ($(".contacts-aside").length > 0) {
    $(window).scroll(function () {
      if (window.matchMedia("(max-width: 992px)").matches) {
        let scrolltop = $(this).scrollTop();
        let offsetContacts = $(".contacts-aside").offset().top;
        let offsetMinus = $(".contacts-aside").height();
        offsetContacts = offsetContacts - offsetMinus;
        if (scrolltop >= offsetContacts) {
          $(".callback ").addClass("d-none");
          $(".callback ").removeClass("d-flex");
        } else {
          $(".callback ").removeClass("d-none");
          $(".callback ").addClass("d-flex");
        }
      }
    });
  }
});
if ($(".contacts-aside").length > 0) {
  $(window).on("load", function () {
    if (window.matchMedia("(max-width: 992px)").matches) {
      let scrolltop = $(this).scrollTop();
      let offsetContacts = $(".contacts-aside").offset().top;
      let offsetMinus = $(".contacts-aside").height();
      offsetContacts = offsetContacts - offsetMinus;
      if (scrolltop >= offsetContacts) {
        $(".callback ").addClass("d-none");
        $(".callback ").removeClass("d-flex");
      } else {
        $(".callback ").removeClass("d-none");
        $(".callback ").addClass("d-flex");
      }
    }
  });
}
