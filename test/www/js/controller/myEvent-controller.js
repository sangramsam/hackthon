app.controller('myEventsCtrl', function($scope, myEvent, $state, auth) {
    myEvent.getMyEvents().then(function(response) {
        $scope.myEvents = response.data.data;
    })

});