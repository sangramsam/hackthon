
app.config(function ($stateProvider, $urlRouterProvider, $locationProvider) {
        $stateProvider
            .state('test', {
                url: "/test",
                title: 'Login',
                templateUrl: 'view/test.html'
            })
            .state('login', {
                url: "/login",
                title: 'Login',
                templateUrl: 'view/login.html',
                controller:'myCtrl'
            }) .state('signup', {
                url: "/signup",
                title: 'signup',
                templateUrl: 'view/sign-up.html',
                controller:'signup'
            }).state('home', {
                url: "/home",
                title: 'home',
                templateUrl: 'view/home.html',
                controller:'homectrl'
            }).state('createEvent', {
                url: "/createEvent",
                title: 'createEvent',
                templateUrl: 'view/createEvent.html',
                controller:'createEvent'
            })
    $urlRouterProvider.otherwise("/test");
    });
app.run(['$rootScope','auth','$state', function ($rootScope, auth,$state) {
    console.log("called run");
    $rootScope.$on('$stateChangeStart', function(event, toState, toParams, fromState, fromParams){
        //console.log(toState);
        // NOT authenticated - wants any private stuff
        if(!auth.getToken())
        {
            //console.log("Denny")
            $state.go('login')
            event.preventDefault();
            return;
        }
    });
}]);