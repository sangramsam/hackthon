app1.controller('myCtrl', function($scope) {
    $scope.submit=function(da){
        console.log(da);
       if(da.username==" " && da.password==""){
           alert("field can't be blank !")
       }else if(da.username==="demo" && da.password=="123"){
           alert("login success");
       }else{
           alert("login failed");
       }
    }

});