app.controller('categoryList', function($scope, auth, $stateParams, allEvents) {
    $scope.id = $stateParams.id;
    allEvents.getEvents($stateParams.id).then(function(res) {
        $scope.events = res.data.data;
    });
});