(
  function() {
    'use strict'

    angular.module('AppWithFilters',[])
    .controller('FiltersController',ControllerMethod)
    //Register the filter with name 'lastName'
    .filter('lastName',LastNameFilterFactory);

    //Making DI minificaton proof
    ControllerMethod.$inject = ['$scope','$filter','lastNameFilter'];

    //Note that we pass the controller method the name of the filter
    function ControllerMethod($scope,$filter,lastNameFilter){
      $scope.name= 'John';
      $scope.upperName = $filter('uppercase')($scope.name);
      $scope.getFullName = function()
      {
          var fullName = lastNameFilter($scope.name);
          return fullName;
      }
    }

    //Create the filter function
    function LastNameFilterFactory(){
      return function(input) {
        input = input + ' Smith';
        return input;
      };
    }
  }//Controller ends


)();
