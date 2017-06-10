app.controller('signup', function($scope, $http, $state, signUp,auth) {
    $scope.submit = function(userDetails) {
        console.log(userDetails);
        signUp.signUp(userDetails).then(function(response) {
            var token=response.data.data.user_id;
            auth.setToken(token);
            $state.go('home');
        })
    }


});