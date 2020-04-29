$(function () {
  const $change = $("#change-css");
  const $text = $("#text");
  const $runa2 = $("#runa2");

  $change.click(function () {
    document.getElementById("papa2").src = "img/20200419hanu2.PNG";
    document.getElementById("mama2").src = "img/20200419sei2.PNG";
    document.getElementById("meru2").src = "img/20200419meru5.PNG";
    document.getElementById("runa2").src = "img/runaIntro2.PNG";
    // document.getElementById("text").href = "http://google.co.jp";
    $change.html("登録済み");
    // document.getElementById($text).innerHTML(
    //   <h1>
    //     <a href="movie/runa20200422.mp4">"ようこそ！畠山わんこ一家へ!")</a>
    //   </h1>
    // );
    $text.html("ようこそ！畠山わんこ一家へ!");
    $text.css("color", "red");
    $text.css("font-size", "30px");
    $text.css("text-decoration", "underline");
    // document.getElementById("text").href = "http://google.co.jp";
    // $text.fadeOut(2000);
  });
});
