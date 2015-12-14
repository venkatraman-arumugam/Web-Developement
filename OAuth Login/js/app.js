var example = angular.module("example", ['ui.router']);
 
example.config(function($stateProvider, $urlRouterProvider) {
    $stateProvider
        .state('login', {
            url: '/login',
            templateUrl: 'templates/login.html',
            controller: 'LoginController'
        })
        .state('secure', {
            url: '/secure',
            templateUrl: 'templates/secure.html',
            controller: 'SecureController'
        });
    $urlRouterProvider.otherwise('/login');
});
 
example.controller("LoginController", function($scope) {
 
    $scope.login = function() {
        window.location.href = "https://api.imgur.com/oauth2/authorize?client_id=" + "CLIENT_ID_HERE" + "&response_type=token"
    }
 
});
 
example.controller("SecureController", function($scope) {
 
    $scope.accessToken = JSON.parse(window.localStorage.getItem("imgur")).oauth.access_token;
 
});