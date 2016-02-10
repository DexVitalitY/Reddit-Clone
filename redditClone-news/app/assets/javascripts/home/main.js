angular.module('redditNews')
.controller('MainCtrl', [ 
  '$scope',
  'posts', 
  function($scope, posts){

    $scope.posts = posts.posts;

    $scope.addPost = function() {
      if (!$scope.title || $scope.title === '') { return; }
      
      $scope.posts.push({
        title: $scope.title,
        link: $scope.link,
        upvotes: 0,
        comments: [
          {author: 'Joe', body: 'Testing Posts!', upvotes: 0},
          {author: 'Michael', body: 'Testing Comments Section', upvotes: 0}
        ]
      });
      $scope.title = '';
      $scope.link = '';
    };

    $scope.incrementUpVotes = function(post) {
      post.upvotes += 1;
    };

}]);
