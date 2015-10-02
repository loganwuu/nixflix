var MovieReviews = angular.module('MovieReviews', ['ui.router']);

MovieReviews.config(function($stateProvider, $urlRouterProvider) {
    $stateProvider.state('welcome', {
        url: "",
        templateUrl: "partials/welcome.html"
    });

    $stateProvider.state('reviews', {
        url: "/reviews",
        templateUrl: "partials/reviews.html",
        controller: "ReviewsCtrl"
    });
});
