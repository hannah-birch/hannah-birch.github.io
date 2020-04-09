// $('.adjective-1').click(function() {
//     $(this).removeClass('hidden');
//     $(this).addClass('active');
// });


function changeClass(active) {
  var elem = document.getElementById('adjective-1');
  elem.addClass('active');
}


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
