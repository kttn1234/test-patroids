$(document).ready(function () {
  var $videoHeader = $(".header__video");
  var $video = $(".header__video").get(0);
  var $headerBtnPlay = $(".header__btn-play");

  $videoHeader.on("ended", function () {
    $videoHeader.attr("poster", "images/home/img-video-placeholder.jpg");
    $videoHeader.attr(
      "src",
      "https://www.w3schools.com/html/mov_bbb.mp4#t=0.5"
    );
    $headerBtnPlay.show();
  });
  $headerBtnPlay.click(function () {
    playVideo();
  });

  $(document).on("click", ".header__video", ".header__btn-play", function (e) {
    playVideo();
    return false;
  });

  function playVideo() {
    if ($video.paused === false) {
      $video.pause();
      $headerBtnPlay.show();
    } else {
      $video.play();
      $headerBtnPlay.hide();
    }
  }

  // lightbox
  var $lightbox = $(".lightbox");
  var $nextBtn = $(".lightbox__next");
  var $prevBtn = $(".lightbox__prev");
  var $lightboxImg = $(".lightbox__img img");
  var $galleryImg = $(".js-lightbox img");
  var $lightboxClose = $(".lightbox__close");

  $galleryImg.click(function () {
    $lightbox.show();
    var src = $(this).attr("src");
    $lightboxImg.attr("src", src);
  });

  // Close button clicked
  $lightboxClose.click(function () {
    $lightbox.hide();
  });

  // Next
  $nextBtn.click(function () {
    var srcLightBox = $lightboxImg.attr("src");
    var $currentGrallery = $('.js-lightbox img[src="' + srcLightBox + '"]');
    var $nextImg = $($currentGrallery.parent().next().find("img"));
    var $imagesListGrallery = $currentGrallery
      .closest(".js-lightbox")
      .find("img");
    if ($nextImg.length > 0) {
      $lightboxImg.attr("src", $nextImg.attr("src")).fadeIn(500);
    } else {
      $lightboxImg
        .attr("src", $($imagesListGrallery[0]).attr("src"))
        .fadeIn(500);
    }
  });

  // prev
  $prevBtn.click(function () {
    var srcLightBox = $lightboxImg.attr("src");
    var $currentGrallery = $('.js-lightbox img[src="' + srcLightBox + '"]');
    var $nextImg = $($currentGrallery.parent().prev().find("img"));
    var $imagesListGrallery = $currentGrallery
      .closest(".js-lightbox")
      .find("img");
    if ($nextImg.length > 0) {
      $lightboxImg.attr("src", $nextImg.attr("src")).fadeIn(500);
    } else {
      $lightboxImg
        .attr(
          "src",
          $($imagesListGrallery[$imagesListGrallery.length - 1]).attr("src")
        )
        .fadeIn(500);
    }
  });

  // backtop
  var $scrollTop = $(".scroll-top");
  $scrollTop.click(function () {
    $("html, body").animate({ scrollTop: 0 }, "slow");
    return false;
  });

  //anchor
  $('a[href^="#"]').click(function () {
    var speed = 300;
    var href = $(this).attr("href");
    var target = $(href == "#" || href == "" ? "html" : href);
    var position = target.offset().top;
    $("html, body").animate(
      {
        scrollTop: position,
      },
      speed,
      "swing"
    );
    return false;
  });
});
