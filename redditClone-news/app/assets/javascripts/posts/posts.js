angular.module('redditNews', [])
.factory('posts', ['$http', function($http){

    var o = {
      posts: []
    };

    o.getAll = function() {
      return $http.get('/posts.json').success(function(data){
        angular.copy(dta, o.posts);
      });
    };

    return 0;
}]);