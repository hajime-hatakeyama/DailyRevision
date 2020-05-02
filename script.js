$(function () {
  // 画像を変える処理
  const $change = $("#change-css");
  const $text = $("#text");

  $change.click(function () {
    document.getElementById("papa2").src = "img/20200419hanu2.PNG";
    document.getElementById("mama2").src = "img/20200419sei2.PNG";
    document.getElementById("meru2").src = "img/20200419meru5.PNG";
    document.getElementById("runa2").src = "img/runaIntro2.PNG";

    $change.html("登録済み");

    $text.html("ボタンを押した後、もう一度写真を見てみて!");
    $text.css("color", "red");
    $text.css("font-size", "30px");
    $text.css("text-decoration", "underline");
  });
  // メッセージを隠しておく処理
  $(function () {
    $(".lesson-icon").hover(
      function () {
        $(".txt-contents").fadeIn();
      },
      function () {
        $(".txt-contents").fadeOut();
      }
    );
  });
  // $(".lesson-hover").hover(
  //   function () {
  //     $(this).find(".text-contents").addClass("text-active");
  //   },
  //   function () {
  //     $(this).find(".text-contents").removeClass("text-active");
  //   }
  // );
  // モーダルの処理
  $("#login-show").click(function () {
    $("#login-modal").fadeIn();
  });

  $(".signup-show").click(function () {
    $("#signup-modal").fadeIn();
  });

  $(".close-modal").click(function () {
    $("#login-modal").fadeOut();
    $("#signup-modal").fadeOut();
  });
  // アコーディオンの処理
  $(".faq-list-item").click(function () {
    const $answer = $(this).find(".answer");
    if ($answer.hasClass("open")) {
      $answer.removeClass("open");
      $answer.slideUp();
      $(this).find("span").text("+");
    } else {
      $answer.addClass("open");
      $answer.slideDown();
      $(this).find("span").text("-");
    }
  });
});
