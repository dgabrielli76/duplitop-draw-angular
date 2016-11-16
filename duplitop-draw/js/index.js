var app = angular.module('duplitop', ['ngRoute']);

app.config(
  function($routeProvider) {
    $routeProvider.
    when('/home', {
      templateUrl: 'partials/home.html',
      controller: 'HomeCtrl'
    }).
    otherwise({
      redirectTo: '/home'
    });
  }
);

app.controller('AppCtrl', function($scope, DrawAPI) {
  DrawAPI.makeADraw();
});
