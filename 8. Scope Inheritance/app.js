(
  function ()
  {
    'use strict';

    angular.module('InheritApp',[])
    .controller('ParentController',ParentController)
    .controller('ChildController',ChildController)
    .controller('PrototypalController',PrototypalController)
    .controller('DataRepeatController',DataRepeatController);

    ParentController.$inject = ['$scope'];
    function ParentController($scope)
    {
      $scope.name = "Dad";
      $scope.giftObj = this;
      $scope.giftObj.name = "iPhone 7";

      console.log("Parent $scope: ", $scope);

    }

    ChildController.$inject = ['$scope'];
    function ChildController($scope)
    {
        console.log("$scope.name: ", $scope.name);
        console.log("Child $scope: ", $scope);

        //------------- Changing the prototype values and its effect -------------
        $scope.name = "Child";
        $scope.giftObj.name= "Mercedes";
        console.log("*** CHANGED: child> $scope.name = 'Child' ");
        console.log("*** CHANGED: child> $scope.giftObj.name = 'Mercedes' ");

        console.log("CHILD-- child> $scope.name: ", $scope.name);
        console.log("CHILD-- child> $scope.giftObj.name: ", $scope.giftObj.name);
        console.log("PARENT-- parent> $scope.$parent.name: ", $scope.$parent.name);
        console.log("PARENT-- parent> $scope.$parent.giftObj.name: ", $scope.$parent.giftObj.name);
        console.log("scope",$scope);


    }

    // Note that the controller funtion does not have $scope injected
    function  PrototypalController()
    {
      this.name='John Doe';
    }

    DataRepeatController.$inject = ["$scope"]
    function DataRepeatController($scope)
    {
      $scope.list = ['AngularJS','ReactJS','KnockoutJS','ExtJS'];

    }
  }
)();
