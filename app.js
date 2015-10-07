var MovieReviews = angular.module('MovieReviews', ['ui.router']);

MovieReviews.config(function($stateProvider, $urlRouterProvider) {
    $stateProvider.state('welcome', {
        url: "",
        views: {
          'header': {
            templateUrl: "partials/header.html",
          },
          'body': {
            templateUrl: "partials/welcome.html",
          },
        }
    });

    $stateProvider.state('reviews', {
        url: "/reviews",
        views: {
          'header': {
            templateUrl: "partials/header.html",
          },
          'body': {
            templateUrl: "partials/reviews.html",
            controller: "ReviewsCtrl"
          },
        }
    });

    $stateProvider.state('reviews.comment', {
        url: "/:reviewId",
        templateUrl: "partials/review.comment.html",
        controller: "ReviewsCtrl"
    });
});
