
$(document).ready(function () {
    $("#button-1").click(function () {
        $(".active").switchClass("active", "hidden");
        $(".hidden").switchClass("hidden", "active");
    });

    $("#button-2").click(function () {
      $(".hidden").switchClass("hidden", "active");
      $(".active").switchClass("active", "hidden");
    });

    $("#button-3").click(function () {
        $(".hidden-also").switchClass("hidden-also", "active");
        $(".active").switchClass("active", "hidden-also");
    });
});
