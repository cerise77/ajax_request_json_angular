
routing.controller('loginObject',

function QuestionController($scope, $http){

  /*------------18.12.2018--------------*/
  $scope.but = angular.element(document.querySelector("button"));
  $scope.nameN = angular.element(document.querySelector("#answerName"));
  $scope.passwordP = angular.element(document.querySelector("#answerPassword"));
  $scope.notcorrect = angular.element(document.querySelector(".notcorrect"));
  $scope.notcorrectP = angular.element(document.querySelector(".notcorrectP"));

  $scope.buttonHref = angular.element(document.querySelector(".btn-default"));

    //$scope.response={};
    $scope.loginObj = {};
    //var getUsers;
    //$scope.loaded=false;

    $scope.addperson = function (name, password, answerForm){

        if(answerForm.$valid){
          //$scope.loaded=true;
          $scope.but.css("background", "#D32414");


/*------------Post-request----------------*/
          /*var loginData = 'grant_type=password&username=' + name + '&password=' + password;

            $http.post("https://testapi.minmenu.com/token", loginData, {headers: {'Content-Type': 'application/x-www-form-urlencoded'}})
            .then
            (function success (request) {

                $scope.loginObj=request.data;
                //$scope.response=response.data;

                localStorage.setItem("loginObj", JSON.stringify($scope.loginObj));
              //  getUsers = JSON.parse(localStorage.getItem("loginObj"));

                //console.log(getUsers);

                //buttonHref.attr('href', '#list');
                window.location.href = '#list';

            });
            (function error (response) {

            });*/

        }



/*-------------Wrong-Name-Password----------------*/
        if (answerForm.name.$invalid){
           $scope.nameN.css("border-bottom", "solid 1px #D32414");
           $scope.notcorrect.css("display", "block");
           $scope.buttonHref.attr('style', '{background: gray; cursor:text;}');

         } else if(answerForm.name.$valid){
           $scope.nameN.css("border-bottom", "solid 1px #000");
           $scope.notcorrect.css("display", "none");
           $scope.buttonHref.attr('style', 'background: #000; cursor:pointer;');
         }

         if (answerForm.password.$invalid){
          $scope.passwordP.css("border-bottom", "solid 1px #D32414");
          $scope.notcorrectP.css("display", "block");
          $scope.buttonHref.attr('style', 'background: gray; cursor:text;');

        }else if(answerForm.password.$valid){
          $scope.passwordP.css("border-bottom", "solid 1px #000");
          $scope.notcorrectP.css("display", "none");
          $scope.buttonHref.attr('style', 'background: #000; cursor:pointer;');
        }


    };





/*------------------list-file-------------*/

    var untityPopup = angular.element(document.querySelector(".quantity-popup"));
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





}

);
