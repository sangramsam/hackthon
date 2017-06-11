app.controller('myEventsCtrl', function($scope, myEvent, $state, auth) {
    myEvent.getMyEvents().then(function(response) {
        $scope.myEvents = response.data.data;
    })
$scope.getdate=function(date){
     var date2=moment(new Date(date)).format('DD');
     console.log(date,date2);
     var date1=moment(new Date(date)).format('MMM');
    return date2;
    
}
$scope.getMonth=function(date){
     var date1=moment(new Date(date)).format('MMM');
    return date1;
    
}
});