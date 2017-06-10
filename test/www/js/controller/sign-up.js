app.controller('signup', function($scope, $http, $state, signUp) {
    $scope.submit = function(userDetails) {
        console.log(userDetails);
        signUp.signUp(userDetails).then(function(response) {
            $state.go('home');
        })
    }


});