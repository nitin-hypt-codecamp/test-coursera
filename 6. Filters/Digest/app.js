(function(){
    'use strict';

    angular.module('CounterApp',[])
    .controller('CounterController',CounterControllerFunction);

    CounterControllerFunction.$inject = ['$scope'];

    function CounterControllerFunction($scope) {
        $scope.onceCounter = 0;
        $scope.counter = 0;

        $scope.showNumberOfWatchers = function () {
          //console.log($scope);

          console.log("# of watchers: ", $scope.$$watchersCount);

        };

        $scope.countOnce = function()
        {
          $scope.onceCounter = 1;
        }
        //Set up watch on the property of the scope
        // $scope.$watch('onceCounter',function(newValue, oldVal){
        //   console.log("Old Value:", oldVal);
        //   console.log("New Value", newValue);
        // })

        $scope.runningCounter = function(){
          $scope.counter++;
        }

        // $scope.$watch('counter',function(newValue, oldVal){
        //   console.log("Old Running Counter Value:", oldVal);
        //   console.log("New Running Counter Value", newValue);
        // })

        // Test for checking the execution of digect cycle
        $scope.$watch(function(){
          console.log("Digest Cycle Executed");
        });
    }

})();
