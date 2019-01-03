
/*var personTemplate = angular.module('RoutingApp', []);*/

var routing = angular.module('RoutingApp', ['ngRoute'])
  .config( ['$routeProvider', function($routeProvider) {
  $routeProvider.when('/login', {
    templateUrl: 'views/login.html',
    controller:'loginObject'
  })
  .when('/list', {
    templateUrl: 'views/list.html',
    controller:'loginObject'
  })
  .when('/profil', {
    templateUrl: 'views/profil.html',
    controller:'loginObject'
  })
  .when('/patientlog', {
    templateUrl: 'views/patientlog.html',
    controller:'loginObject'
  })
  .when('/information', {
    templateUrl: 'views/information.html',
    controller:'loginObject'
  })
  .otherwise({
    redirectTo: '/login'
  });
}]);
