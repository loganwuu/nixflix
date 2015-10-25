MovieReviews.factory('ReviewsFactory', function ReviewsFactory() {
    var factory = {};
    factory.reviews = [];

    factory.addReview = function() {
      var review = ({ name: factory.reviewName, date: factory.reviewDate, title: factory.reviewTitle, comment: factory.reviewComment, id: factory.reviews.length + 1});

      factory.reviews.push(review);
      factory.reviewName = null;
      factory.reviewDate = null;
      factory.reviewTitle = null;
      factory.reviewComment = null;
    };

    return factory;
})
