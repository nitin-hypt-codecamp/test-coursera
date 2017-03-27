(
  function()
  {
    'use script';

    angular.module('BindingApp',[])
    .controller('BindingController',BindingControllerFunction);

    BindingControllerFunction.$inject = ['$scope']
    function  BindingControllerFunction($scope)
    {
      $scope.name = 'John Doe';
      $scope.salutation = 'Mr.';
      // $scope.nameWithSalutation = ""; //Initialized to an empty string

      // function to show the number of watchers which is bound to a button
      $scope.showWatcherCount = function()
      {
          // console.log($scope);
          // console.log("#No. of Listeners", $scope.$$listenerCount);
          console.log("#No. of watchers", $scope.$$watchersCount);
      }

      $scope.setNameWithSal = function()
      {
        $scope.nameWithSalutation = $scope.salutation + " " + $scope.name;
      }

      $scope.logNames = function(){
        console.log("Salutation is: ", $scope.salutation);
        console.log("Name is: ", $scope.name);
      }

      $scope.logNameWithSal = function(){
        console.log("Name with salutation is: ", $scope.nameWithSalutation);
      }

    }
  }
)()
