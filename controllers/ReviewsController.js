MovieReviews.controller('ReviewsCtrl', function ReviewsCtrl($scope, $stateParams, ReviewsFactory, UtilitiesFactory) {
  $scope.currentReview = UtilitiesFactory.findById($scope.reviews, $stateParams.reviewId);

  $scope.reviews = ReviewsFactory.reviews;
  $scope.ReviewsFactory = ReviewsFactory;
});
