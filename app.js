angular.module('redditNews', [])
.controller('MainCtrl', [ 
  '$scope', 
  function($scope){
    $scope.posts = [
      {title: '---- Post TITLE 1 ---- ', upvotes: 5},
      { title: '---- Post TITLE 2 ---- ', upvotes: 50},
      { title: '---- Post TITLE 3 ---- ', upvotes: 101},
      { title: '---- Post TITLE 4 ---- ', upvotes: 1},
      { title: '---- Post TITLE 5 ---- ', upvotes: 10}
    ];

    $scope.addPost = function() {
      if (!$scope.title || $scope.title === '') { return; }
      
      $scope.posts.push({
        title: $scope.title,
        link: $scope.link,
        upvotes: 0
      
      });
      $scope.title = '';
      $scope.link = '';
    };

    $scope.incrementUpVotes = function(post) {
      post.upvotes += 1;
    };



  }]);