
routing.controller('listController',

function listController($scope, $http){

    $scope.loadUsers = function(){

      /*$scope.loginObj = JSON.parse(localStorage.getItem("loginObj"));


      $http({
        method: 'GET',
        url: 'https://testapi.minmenu.com/api/account/users/?departmentFilter=true&activeUserFilter=true&userNameFilter=&firstNameFilter=&lastNameFilter=&mailFilter=&roleFilter=&nameColumn=userRoom&sortDirection=asc&roomNumberFilter',
        headers: {
            'Authorization': 'Bearer ' + $scope.loginObj.access_token
        }
        }).then(function successCallback(response) {

          $scope.users =  response.data;

          //console.log($scope.users);

        }, function errorCallback(response) {
            console.log("Error");
      });*/

      $http({method: 'GET', url: 'profil.json'}).
        then(function success(response) {
          $scope.user=response.data.user;

          //console.log($scope.user);
        });
    }

    var quntityPopup = angular.element(document.querySelector(".quantity-popup"));
    var portionPopup = angular.element(document.querySelector(".portion-popup"));
    var backgroundPopup = angular.element(document.querySelector(".myfondGris"));


    $scope.quantityA = function (){

      backgroundPopup.css("display", "block");
      quntityPopup.css("display", "block");
    };


    $scope.close = function (){

      backgroundPopup.css("display", "none");
      quntityPopup.css("display", "none");

      portionPopup.css("display", "none");
    };


    $scope.portionA = function (){

      backgroundPopup.css("display", "block");
      portionPopup.css("display", "block");
    };




    //call on page load
    $scope.loadUsers();

}

);
