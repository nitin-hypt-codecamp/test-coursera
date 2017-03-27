(function(){
  'use strict';

  angular.module("RoutingApp",['ngRoute'])
  .config(RouteConfig)
  .controller('SimpleController',SimpleController)
  .service('orderService',OrdersDataService);

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

  SimpleController.$inject = ['$scope','orderService'];
  function  SimpleController($scope,orderService){
    $scope.orders = [];
    $scope.order = { };

    $scope.addOrder =function(){
      var newOrder = {
        id: $scope.order.id,
        description : $scope.order.description,
        quantity : $scope.order.quantity
      };
      orderService.addOrder(newOrder);
      $scope.orders = orderService.getOrders()
    }

    $scope.getOrders = function(){
      $scope.orders = orderService.getOrders();
    }

  }

  function OrdersDataService(){
    var service = this;

    service.orders = [];
    service.getOrders = function(){
      console.log(service.orders.length);
      return service.orders;
    }

    service.addOrder =function(newOrder){
      service.orders.push(newOrder);
      console.log(service.orders.length);
    }
  }

})();
