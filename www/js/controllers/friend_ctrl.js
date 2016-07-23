projectUnify.controller('FriendCtrl', function ($scope,
                                                 $rootScope,
                                                 $stateParams,
                                                 $state,
                                                 $ionicModal,
                                                 $timeout,
                                                 userService,
                                                 messageService) {

  $scope.$on('$ionicView.enter', function () {
    $scope.currentUser = $rootScope.currentUser.user;
    $scope.allPendingFriends();
    $scope.data = {};
  });


  $scope.allPendingFriends = function () {
    // messageService.getConversations(function (data) {
    //   $scope.conversations = data.conversations;
    //   console.log($scope.conversations);
    // })
    friendService.pendingFriends(function(data){
      $scope.pendingFriends = data;
      console.log(data);
    })
    
  };


});
