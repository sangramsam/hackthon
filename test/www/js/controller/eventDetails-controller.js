app.controller('eventDetailsCtrl', function($scope, Login, $state, auth, eventDetails, createEvent) {
    eventDetails.getEvent().then(function(res) {
        $scope.event = res.data.data;
        $scope.eventTime = moment(new Date($scope.event.event_date)).format('D MMM');
    });
    $scope.comment = '';
    $scope.sendComment = function(comment, event_id) {
        createEvent.comment(comment, event_id).then(function(response) {
            $scope.comment = '';
            eventDetails.getEvent().then(function(res) {
                $scope.event = res.data.data;
            });
        })
    }
    $scope.going = function(id) {
        eventDetails.Going(id).then(function(res) {
            $state.go('category');
        })
    }
    $scope.getdate = function(date) {
        var date2 = moment(new Date(date)).format('D MMM');
        return date2;
    }
});