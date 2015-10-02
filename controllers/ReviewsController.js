MovieReviews.controller('ReviewsCtrl', function ReviewsCtrl($scope, ReviewsFactory) {
  $scope.reviews = ReviewsFactory.reviews;
  $scope.ReviewsFactory = ReviewsFactory;
});
