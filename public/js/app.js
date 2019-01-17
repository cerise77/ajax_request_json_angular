
/*var personTemplate = angular.module('RoutingApp', []);*/

var routing = angular.module('RoutingApp', ['ngRoute'])
  .config( ['$routeProvider', function($routeProvider) {
  $routeProvider.when('/login', {
    templateUrl: 'views/login.html',
    controller:'loginObject'
  })
  .when('/list', {
    templateUrl: 'views/list.html',
    controller:'listController'
  })
  .when('/profil', {
    templateUrl: 'views/profil.html',
    controller:'profilController'
  })
  .when('/patientlog', {
    templateUrl: 'views/patientlog.html',
    controller:'patientlogController'
  })
  .when('/information', {
    templateUrl: 'views/information.html',
    controller:'informController'
  })
  .otherwise({
    redirectTo: '/login'
  });
}]);
