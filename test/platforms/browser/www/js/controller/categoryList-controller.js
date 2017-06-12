app.controller('categoryList', function($scope, auth, $stateParams, allEvents) {
    $scope.id = $stateParams.id;
    allEvents.getEvents($stateParams.id).then(function(res) {
        $scope.events = res.data.data;
    });

    $scope.getdate = function(date) {
        var date2 = moment(new Date(date)).format('DD');
        console.log(date, date2);
        var date1 = moment(new Date(date)).format('MMM');
        return date2;

    }
    $scope.getMonth = function(date) {
        var date1 = moment(new Date(date)).format('MMM');
        return date1;

    }
});