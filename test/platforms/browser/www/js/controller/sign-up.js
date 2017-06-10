app1.controller('signup', function($scope) {
    $scope.submit=function(da){
    console.log(da);
    alert(da.fname +da.lname)
    }

});