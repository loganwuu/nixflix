MovieReviews.directive("changeClass", function() {
  return function (scope, element) {
    element.bind("click", function() {
      (".container").toggleClass(css("filter", "invert(100%)")
    });
  }
});
