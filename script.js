$(function () {
  $("form").submit(function (event) {
    event.preventDefault();

    let height = $("#height").val();
    let weight = $("#weight").val();

    let img = (weight / ((height * height) / 10000)).toFixed(2);

    $("#results").text(img);

    if (img < 18.6) {
      $("p:nth-of-type(1)").css("color", "red");
    } else if (img >= 18.6 && 24.9 >= img) {
      $("p:nth-of-type(2)").css("color", "green");
    } else {
      $("p:nth-of-type(3)").css("color", "red");
    }
  });
});
