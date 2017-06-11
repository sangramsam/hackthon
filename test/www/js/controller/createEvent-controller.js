app.controller('createEvent', function($scope, Login, $state, auth, category,createEvent) {
    category.getCategory().then(function(res) {
        $scope.categories = res.data.data;
    });
$scope.id='';
$scope.PostEvent=function(event){
    console.log(event);
    var date=moment(event.date).format('YYYY-MM-DD');
    var eventForm=moment(event.eventFrom).format('h:mm A');
    var eventTo=moment(event.eventTo).format('h:mm A')
createEvent.createEvent(event,$scope.id,$scope.img,date,eventForm,eventTo).then(function(res){
    //alert("success");
    $state.go('category');
})
}
$scope.Paidselect=false;
$scope.img='';
$scope.getCategoryId=function(id){
    console.log(id);
    $scope.id=id;
}
$scope.paid=function(){
    console.log("paid called");
    if($scope.Paidselect==true){
     $scope.Paidselect=false;
    }else{
    $scope.Paidselect=true;
    }
   
}

$scope.uploadFiles = function(files, errFiles) {
        $scope.files = files;
        $scope.errFiles = errFiles;
        console.log( $scope.files[0] );
        //console.log(base64($scope.files[0], 'image'));
        getBase64(files[0]);
        function getBase64(file) {
        var reader = new FileReader();
         reader.readAsDataURL(file);
         reader.onload = function () {
     console.log(reader.result.split(',')[1]);
     $scope.img1=reader.result;
     $scope.img=reader.result.split(',')[1];
   };
   reader.onerror = function (error) {
     console.log('Error: ', error);
   };
}
    }
});