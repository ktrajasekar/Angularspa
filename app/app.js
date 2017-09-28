var applicationSpa = angular.module('applicationSpa', ['ngRoute']);

// configure our routes
applicationSpa.config(function($routeProvider) {

    $routeProvider
    .when('/',
    {
        templateUrl:'pages/home.html',
        controller:'MainController'
    })
      .when('/faq',
    {
        templateUrl:'pages/faq.html',
          controller:'aboutController'
    })
    .otherwise({
            redirectTo: '/'
    });
});

 // create the controller and inject Angular's $scope
    applicationSpa.controller('aboutController', function($scope) { 
        // create a message to display in our view
        $scope.message = 'Welcome to About us page';
    });