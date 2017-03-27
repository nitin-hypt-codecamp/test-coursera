(function(){
  'use strict';

  angular.module("RoutingApp",['ngRoute'])
  .config(RouteConfig)
  .controller('SimpleController',SimpleController);

  RouteConfig.$inject = ['$routeProvider','$locationProvider'];

  function RouteConfig($routeProvider,$locationProvider){

    $locationProvider.hashPrefix('');

    $routeProvider.
      when('/AddNewOrder', {
        templateUrl: 'templates/add_order.html',
        controller: 'SimpleController'
      }).
      when('/ShowOrders', {
        templateUrl: 'templates/show_orders.html',
        controller: 'SimpleController'
      }).
      otherwise({
        redirectTo: '/AddNewOrder'
      });
  }

  SimpleController.$inject = ['$scope'];
  function  SimpleController($scope){
    $scope.orders = [{
        id: "10001",
        description : "Order for bicycles",
        quantity : 100
    }];

    $scope.order = { };

    $scope.addOrder =function(){
      var newOrder = {
        id: $scope.order.id,
        description : $scope.order.description,
        quantity : $scope.order.quantity
      };
      $scope.orders.push(newOrder);
    }
  }

})();
