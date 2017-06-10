app.controller('myCtrl', function($scope,Login,$state) {
    $scope.submit=function(user){
        console.log(user);
       if(user.username=="" && user.password==""){
           alert("field can't be blank !")
       }else{
           Login.Login(user).then(function (response) {
               $state.go('home');
           })
       }
    }

});