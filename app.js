(function(){
  'use strict';

    angular.module('myFirstApp',[])

    .controller('MyFirstController',function ($scope){
        $scope.name ="Nitin";
    })

    .controller('NameController',function($scope)
    {
      $scope.name="";
      $scope.nameLength = 0;
      $scope.displayNumeric = function()
      {
        var totalLen = calculateLength($scope.name);
        $scope.nameLength = totalLen;
      }
    });

    function calculateLength(str)
    {
        var totalValue = 0;
        for (var i = 0; i < str.length; i++) {
          totalValue += str.charCodeAt(i);
        }
        return totalValue;
    }
  })();
