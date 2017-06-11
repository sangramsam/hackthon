app.controller('homectrl', function($scope, $state, auth) {
    $scope.token = auth.getToken();
    $state.go('category');
});