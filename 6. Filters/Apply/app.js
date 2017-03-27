(function(){
    'use strict';

    angular.module('CounterApp',[])
    .controller('CounterController',CounterControllerFunction);

    CounterControllerFunction.$inject = ['$scope'];

    function CounterControllerFunction($scope) {
        $scope.counter = 0;

        // $scope.runningCounter = function(){
        //   // $scope.counter++;
        //   setTimeout(function(){
        //     $scope.counter++;
        //     console.log('Counter incremented');
        //     $scope.$digest();
        //   },2000)
        // }

        $scope.runningCounter = function(){
          setTimeout(function(){
            $scope.$apply(function(){
              $scope.counter++;
              console.log('Counter incremented');
            });
          },2000)
        }

    }

})();
