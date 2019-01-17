
routing.controller('informController',

function informController($scope, $http, $location){


    $scope.loadProfil = function(){
       //console.log('la la');

       $scope.loginObj = JSON.parse(localStorage.getItem("loginObj"));

       $http({
         method: 'GET',
         url: 'https://testapi.minmenu.com/api/account/userinfo?id=' + $location.search().id,
         headers: {
             'Authorization': 'Bearer ' + $scope.loginObj.access_token
         }
         }).then(function successCallback(response) {

           $scope.informInfo =  response.data;


         }, function errorCallback(response) {
             console.log("Error");
       });

    };



  /*-----------------Button-edit--------------------*/
    var butEdit = angular.element(document.querySelector(".but-edit"));
    var butDown = angular.element(document.querySelector(".but-down"));
    var butPensil = angular.element(document.querySelector(".but-edit-green"));
    var editLine = angular.element(document.querySelector(".message-information.edit"));
    var textGreen = angular.element(document.querySelector(".text-green"));

      $scope.edit = function (){

        butDown.css("display", "block");
        butPensil.css("display", "block");
        butEdit.css("display", "none");
        editLine.css("border-bottom", "solid 1px #0136ED");
        textGreen.css("color", "#16B122");

      }


  /*----------------Checkmark----------------*/
    var butCheckmark = angular.element(document.querySelector(".checkmark"));
    var butCheckmarkGreen = angular.element(document.querySelector(".checkmark-green"));
    var checkmarkLine = angular.element(document.querySelector(".message-information.recieve"));

    var checkmarkText = angular.element(document.querySelector(".list-checkmark-txt"));
    //var checkmarkTextli = angular.element(document.querySelector(".list-checkmark"));
    //var questHeader = quest.find('h3');

      $scope.checkmark = function (){
        butCheckmarkGreen.css("display", "block");
        butCheckmark.css("display", "none");
        checkmarkLine.css("border-bottom", "solid 1px #96989F");

        //checkmarkText.toggleClass(".list-checkmark-txt-one");
        checkmarkText.text("Læst!");
        checkmarkText.css("color", "#16B122");

      }


    //call on page load
    $scope.loadProfil();

}

);
