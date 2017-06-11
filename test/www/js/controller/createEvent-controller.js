app.controller('createEvent', function($scope, Login, $state, auth, category) {
    category.getCategory().then(function(res) {
        $scope.categories = res.data.data;
    });

});