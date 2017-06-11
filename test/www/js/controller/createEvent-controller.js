app.controller('createEvent', function($scope,Login,$state,auth) {
    if(!auth.getToken()){
        $state.go('login')
    }

});