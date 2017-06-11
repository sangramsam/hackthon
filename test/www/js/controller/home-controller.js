
app.controller('homectrl', function($scope,auth) {
    $scope.token=auth.getToken();

