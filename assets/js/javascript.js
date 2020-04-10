// $('.adjective-1').click(function() {
//     $(this).removeClass('hidden');
//     $(this).addClass('active');
// });
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


// https://css-tricks.com/snippets/javascript/loop-queryselectorall-matches/
// var forEach = function (array, callback, scope) {
//   for (var i = 0; i < array.length; i++) {
//     callback.call(scope, i, array[i]); // passes back stuff we need
//   }
// };
//
// var adjectives = document.querySelectorAll(".intro a.active");
//
// forEach(adjectives, function(i, el) {
//   el.addEventListener("click", function() {
//     document.querySelector(".intro a.active").classList.remove("active");
//     this.classList.add("active");
//   })
// });
