app.config(function($stateProvider, $urlRouterProvider, $locationProvider) {
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
            controller: 'myCtrl'
        }).state('signup', {
            url: "/signup",
            title: 'signup',
            templateUrl: 'view/sign-up.html',
            controller: 'signup'
        }).state('home', {
            url: "/home",
            title: 'home',
            templateUrl: 'view/home.html',
            controller: 'homectrl'
        }).state('category', {
            url: "/category",
            title: 'Category',
            templateUrl: 'view/category.html',
            controller: 'categoryctrl'
        }).state('categoryList', {
            url: "/categoryList/:id",
            title: 'categoryList',
            templateUrl: 'view/categoryList.html',
            controller: 'categoryList'
        })
        .state('createEvent', {
            url: "/createEvent",
            title: 'createEvent',
            templateUrl: 'view/createEvent.html',
            controller: 'createEvent'
        })
        .state('eventDetailsCtrl', {
            url: "/eventDetails/:id",
            title: 'eventDetails',
            templateUrl: 'view/event-details.html',
            controller: 'eventDetailsCtrl'
        }).state('myEventsCtrl', {
            url: "/myEvents",
            title: 'eventDetails',
            templateUrl: 'view/my-events.html',
            controller: 'myEventsCtrl'
        })
    $urlRouterProvider.otherwise("/login");
});
app.run(['$rootScope', 'auth', '$state', function($rootScope, auth, $state) {
    console.log("called run");
    $rootScope.$on('$stateChangeStart', function(event, toState, toParams, fromState, fromParams) {
        if (!auth.getToken()) {
            if (toState.name == 'signup') {
                $state.go('signup');
            } else {
                $state.go('login')
                event.preventDefault();
                return;
            }
            //console.log("Denny")

        }
    });
}]);