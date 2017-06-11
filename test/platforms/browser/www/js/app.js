var app=angular.module('app', ['ui.router','ui.router.state.events']).config(['$compileProvider',
  function($compileProvider) {
    $compileProvider.aHrefSanitizationWhitelist(/^\s*(https?|ftp|mailto|file):/);
  }]).constant('Settings', {
        'BASE_URL': 'http://192.168.2.14/apartment/'
    });


