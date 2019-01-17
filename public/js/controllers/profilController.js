
routing.controller('profilController',

function profilController($scope, $http,$location){


    $scope.load = function(){
       //console.log('load profilController');

      /*$scope.loginObj = JSON.parse(localStorage.getItem("loginObj"));

       $http({
         method: 'GET',
         url: 'https://testapi.minmenu.com/api/account/userinfo?id=' + $location.search().id,
         headers: {
             'Authorization': 'Bearer ' + $scope.loginObj.access_token
         }
         }).then(function successCallback(response) {

           $scope.userInfo =  response.data;
           //console.log($scope.userInfo);

         }, function errorCallback(response) {
             console.log("Error");
       });*/

       $http({method: 'GET', url: 'profil.json'}).
         then(function success(response) {
           $scope.user=response.data.user;

           //console.log($scope.user);
         });

    };



/*-------------------Profile.file---------------------*/
var backgroundPopup = angular.element(document.querySelector(".myfondGris"));
var quntityPopup = angular.element(document.querySelector(".quantity-popup"));


$scope.weight = function (){
    backgroundPopup.css("display", "block");
    quntityPopup.css("display", "block");
  };

  $scope.close = function (){

      backgroundPopup.css("display", "none");
      quntityPopup.css("display", "none");
  };


  var sections = {
      'Afdeling 1': 'section2',
      'Afdeling 3': 'section3',
      'Afdeling 3': 'section4'
  };

  $scope.selection = function(select) {
      for(i in sections){
          angular.element(document.querySelector(sections[i])).css("dispay", "none");

          angular.element(document.querySelector(sections[select.value])).css("dispay", "block");
      }
  }


  var sectionsVar = {
      'Varelese 1': 'section2',
      'Varelese 2': 'section3',
      'Varelese 3': 'section4'
  };

  $scope.selectionVarelese = function(select) {
      for(i in sectionsVar){
          angular.element(document.querySelector(sectionsVar[i])).css("dispay", "none");

          angular.element(document.querySelector(sectionsVar[select.value])).css("dispay", "block");
      }
  }


  var sectionsKost = {
      'Kost 1': 'section2',
      'Kost 2': 'section3',
      'Kost 3': 'section4'
  };

  $scope.selectionKoste = function(select) {
      for(i in sectionsKost){
          angular.element(document.querySelector(sectionsKost[i])).css("dispay", "none");

          angular.element(document.querySelector(sectionsKost[select.value])).css("dispay", "block");
      }
  }



    //call on page load
    $scope.load();

}

);
