app.controller('signup', function($scope, $http, $state, signUp) {
    signUp.getApartment().then(function(res) {
        console.log(res.data.data);
        $scope.apartments = res.data.data;
    });
    $scope.submit = function(userDetails) {
        signUp.signUp(userDetails).then(function(response) {
            $state.go('home');
        })
    }


});