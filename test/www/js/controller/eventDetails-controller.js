app.controller('eventDetailsCtrl', function($scope, Login, $state, auth, eventDetails) {
    eventDetails.getEvent().then(function(res) {
        $scope.event = res.data.data;
    });

});