
routing.controller('loginObject',

function QuestionController($scope, $http){

  /*------------18.12.2018--------------*/
  var but = angular.element(document.querySelector("button"));
  var nameN = angular.element(document.querySelector("#answerName"));
  var passwordP = angular.element(document.querySelector("#answerPassword"));
  var notcorrect = angular.element(document.querySelector(".notcorrect"));
  var notcorrectP = angular.element(document.querySelector(".notcorrectP"));

    //$scope.response={};
    //$scope.loginObj = {};
    //var getUsers;

    $scope.addperson = function (name, password, answerForm){

        if(answerForm.$valid){
          but.css("background", "#D32414");


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

            });
            (function error (response) {
            });*/



        }



/*-------------Wrong-Name-Password----------------*/
        if (answerForm.name.$invalid){
           nameN.css("border-bottom", "solid 1px #D32414");
           notcorrect.css("display", "block");

         } else if(answerForm.name.$valid){
           nameN.css("border-bottom", "solid 1px #000");
           notcorrect.css("display", "none");
         }

         if (answerForm.password.$invalid){
          passwordP.css("border-bottom", "solid 1px #D32414");
          notcorrectP.css("display", "block");

        }else if(answerForm.password.$valid){
          passwordP.css("border-bottom", "solid 1px #000");
          notcorrectP.css("display", "none");
        }



    };


    $http({method: 'GET', url: 'profil.json'}).
      then(function success(response) {
        $scope.user=response.data.user;

        //console.log($scope.user);
      });

/*-----------------Get-request-----------------*/
    /*$scope.loginObj = JSON.parse(localStorage.getItem("loginObj"))
    //console.log($scope.loginObj.access_token)

    $http({
      method: 'GET',
      url: 'https://testapi.minmenu.com/api/account/users/?departmentFilter=true&activeUserFilter=true&userNameFilter=&firstNameFilter=&lastNameFilter=&mailFilter=&roleFilter=&nameColumn=userRoom&sortDirection=asc&roomNumberFilter',
      headers: {
          'Authorization': 'Bearer ' + $scope.loginObj.access_token
      }
      }).then(function successCallback(response) {

        $scope.users =  response.data;
        console.log($scope.users);


        //users =  response.data;
        //console.log(users);

      }, function errorCallback(response) {
          console.log("Error");
    });*/




/*------------------list-file-------------*/

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



/*-------------------Profile.file---------------------*/
//var backgroundPopup = angular.element(document.querySelector(".myfondGris"));


$scope.weight = function (){
  backgroundPopup.css("display", "block");
  quntityPopup.css("display", "block");
};

/*$scope.close = function (){

  backgroundPopup.css("display", "none");
  quntityPopup.css("display", "none");
};*/


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
      butCheckmark.css("display", "none");
      butCheckmarkGreen.css("display", "block");
      checkmarkLine.css("border-bottom", "solid 1px #96989F");

      //checkmarkText.toggleClass(".list-checkmark-txt-one");
      checkmarkText.text("Læst!");
      checkmarkText.css("color", "#16B122");

    }



}

);
