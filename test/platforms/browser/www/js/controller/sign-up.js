app.controller('signup', function($scope,$http,Settings,$state,signIn) {
    $scope.submit=function(userDetails){
    console.log(userDetails);
        signIn.singIn(userDetails).then(function (response) {
            $state.go('home');
        })
    }


});