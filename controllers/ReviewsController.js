MovieReviews.controller('ReviewsCtrl', function StudentsCtrl($scope, ReviewsFactory) {
  $scope.reviews = ReviewsFactory.reviews;
  $scope.ReviewsFactory = ReviewsFactory;
});
