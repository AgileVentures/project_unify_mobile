projectUnify.controller('FriendCtrl', function ($scope,
                                                 $rootScope,
                                                 $stateParams,
                                                 $state,
                                                 $ionicModal,
                                                 $timeout,
                                                 userService,
                                                 friendService) {

  $scope.$on('$ionicView.enter', function () {
    $scope.currentUser = $rootScope.currentUser.user;
    $scope.allPendingFriends();
    $scope.data = {};
  });


  $scope.allPendingFriends = function () {
    friendService.pendingFriends(function(data){
      $scope.pendingFriends = data.users;
      console.log(data);
    })
  };


});
