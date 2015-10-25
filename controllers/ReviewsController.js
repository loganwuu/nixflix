MovieReviews.controller('ReviewsCtrl', function ReviewsCtrl($scope, $stateParams, ReviewsFactory, UtilitiesFactory) {
  $scope.reviews = ReviewsFactory.reviews;
  $scope.currentReview = UtilitiesFactory.findById($scope.reviews, $stateParams.reviewId);

  $scope.ReviewsFactory = ReviewsFactory;
});
