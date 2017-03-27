(function(){
  'use strict';

  angular.module('FactoryApp',[])
  .controller('ServiceTaxController',ServiceTaxController)
  .controller('ServiceTaxObjectController',ServiceTaxObjectController)
  .factory('ServiceTaxFactory',ServiceTaxFactory)
  .factory('ServiceTaxObjFactory',ServiceTaxObjectFactory);
  // regiter the factory to the angular module

  ServiceTaxController.$inject = ['ServiceTaxFactory'];
  // inject the service

  // define the conroller
  function  ServiceTaxController(ServiceTaxFactory){
    var controller = this;
    controller.amount = "";
    controller.tax ="";

    controller.calculateTax = function(){
      // delegate the business logic to the Service
      controller.tax = ServiceTaxFactory().calculateTax(controller.amount);
    }
  }

  ServiceTaxObjectController.$inject = ['ServiceTaxObjFactory'];
  // inject the service

  // define the conroller
  function  ServiceTaxObjectController(ServiceTaxObjFactory){
    var controller = this;
    controller.amount = "";
    controller.tax ="";

    controller.calculateTax = function(){
      // delegate the business logic to the Service
      controller.tax = ServiceTaxObjFactory.getService().calculateTax(controller.amount);
    }
  }


  // Service definition function
  function ServiceTaxCalculationService(){
    var service = this;

    service.calculateTax = function(chargeAmount){
      return 0.05 * chargeAmount;
    }
  }

  //using simple object factory function
  function ServiceTaxFactory(){
    var factory = function(){
      // no longer a singleton as we instantiate it everytime
      return new ServiceTaxCalculationService();
    };

    return factory;
  }

  //Using object literal
  function ServiceTaxObjectFactory(){
    var factory = {
      getService: function(){
        // no longer a singleton as we instantiate it everytime
        return new ServiceTaxCalculationService();
      }
    };

    return factory;
  }


})();
