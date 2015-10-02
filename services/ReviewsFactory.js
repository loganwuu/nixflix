MovieReviews.factory('ReviewsFactory', function ReviewsFactory() {
    var factory = {};
    factory.reviews = [];

    factory.addReview = function() {
        var review = ({ title: factory.reviewTitle, comment: factory.reviewComment, id: factory.reviews.length + 1});

        factory.reviews.push(review);
        factory.reviewTitle = null;
        factory.reviewComment = null;
    };

    return factory;
})
