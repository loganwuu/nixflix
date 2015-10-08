MovieReviews.directive("nightMode", function() {
  return {
      restrict:"A",
      link: function(scope,element,attrs) {
          element.bind('click', function() {
             angular.element(document.querySelector('#body-element')).toggleClass('nightmode');
          });
      }
  }
});
