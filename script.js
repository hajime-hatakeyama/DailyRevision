$(function () {
  const $change = $("#change-css");
  const $text = $("#text");
  const $runa2 = $("#runa2");

  $change.click(function () {
    document.getElementById("papa2").src = "img/20200419hanu2.PNG";
    document.getElementById("mama2").src = "img/20200419sei2.PNG";
    document.getElementById("meru2").src = "img/20200419meru5.PNG";
    document.getElementById("runa2").src = "img/runaIntro2.PNG";
    $change.html("登録済み");
    $text.css("color", "red");
    $text.css("font-size", "30px");
    $text.html("ようこそ！畠山わんこ一家へ!");
    $text.fadeOut(2000);
  });
});
