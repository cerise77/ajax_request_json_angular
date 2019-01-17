
routing.controller('patientlogController',

function patientlogController($scope, $http,$location){


    $scope.loadProfilPatient = function(){
       //console.log('la la');

       $scope.loginObj = JSON.parse(localStorage.getItem("loginObj"));

       $http({
         method: 'GET',
         url: 'https://testapi.minmenu.com/api/account/userinfo?id=' + $location.search().id,
         headers: {
             'Authorization': 'Bearer ' + $scope.loginObj.access_token
         }
         }).then(function successCallback(response) {

           $scope.patientInfo =  response.data;
           console.log($scope.patientInfo);


         }, function errorCallback(response) {
             console.log("Error");
       });

    };


    //call on page load
    $scope.loadProfilPatient();

}

);
