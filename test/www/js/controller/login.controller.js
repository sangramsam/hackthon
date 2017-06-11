app.controller('myCtrl', function($scope, Login, $state, auth) {
    $scope.submit = function(user) {
        console.log(user);
        if (user.username == "" && user.password == "") {
            alert("field can't be blank !")
        } else {
            Login.Login(user).then(function(response) {

                var token = response.data.data.user_id;
                auth.setToken(token);
                $state.go('category');
            })
        }
    }

});