var app = angular.module('myApp', []);

app.controller('MainCtrl', ['$scope',
  function($scope) {
    $scope.posts = [{
      title: ' Sriman',
      upvotes: 0,
      description: 'Two weeks Since Ihave crossed the hardest phase in my life',
    }, {
      title: ' Anonymous',
      upvotes: 0,
      description: 'Just wanted to say Thanks for inspiring me'
    }, 
   ];

    $scope.addPost = function() {
      if ($scope.title == null || $scope.title === "") {
        return;
      }
      $scope.posts.push({
        title: $scope.title,
        description: $scope.description,
        upvotes: 0
      });
      $scope.title = "";
      $scope.description = "";
    }
    $scope.upvote = function(post) {
      post.upvotes += 1;
    }
  }
]);


jQuery(document.body).on('click','.like',function(){
  jQuery(this).addClass('active');
});

