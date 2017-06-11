app.controller('homectrl', function($scope, auth, $state) {
    $scope.token = auth.getToken();
    if (!auth.getToken()) {
        $state.go('login')
    }
});