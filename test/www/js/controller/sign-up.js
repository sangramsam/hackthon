app.controller('signup', function($scope, $http, $state, signUp, auth) {
    signUp.getApartment().then(function(res) {
        console.log(res.data.data);
        $scope.apartments = res.data.data;
    });
    $scope.submit = function(userDetails) {
        signUp.signUp(userDetails).then(function(response) {
            var token = response.data.data.user_id;
            auth.setToken(token);
            $state.go('category');
        })
    }


});