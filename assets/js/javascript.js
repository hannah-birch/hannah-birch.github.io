// https://css-tricks.com/snippets/javascript/loop-queryselectorall-matches/
var forEach = function (array, callback, scope) {
  for (var i = 0; i < array.length; i++) {
    callback.call(scope, i, array[i]); // passes back stuff we need
  }
};

var adjectives = document.querySelectorAll(".intro a.active");

forEach(adjectives, function(i, el) {
  el.addEventListener("click", function() {
    document.querySelector(".intro a.active").classList.remove("active");
    this.classList.add("active");
  })
});


// Works for class toggle
// $(document).ready(function(){
//     // Toggles span display
//     $(".toggle-button").click(function(){
//         $("span.transform").toggle();
//     });
// });
//
// $(document).ready(function(){
//     // Toggles span display
//     $(".toggle-button").click(function(){
//         $("span.transform-2").toggle();
//     });
// });
