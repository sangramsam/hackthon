
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
            })
    $urlRouterProvider.otherwise("/test");
    });
