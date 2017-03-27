(function(){
  'use strict';

  angular.module('ServiceApp',[])
  .controller('ServiceTaxController',ServiceTaxController)
  .service('ServiceTaxCalculationService',ServiceTaxCalculationService);
  // regiter the service to the angular module

  ServiceTaxController.$inject = ['ServiceTaxCalculationService'];
  // inject the service

  // define the conroller
  function  ServiceTaxController(ServiceTaxCalculationService){
    var controller = this;
    controller.amount = "";
    controller.tax ="";

    controller.calculateTax = function(){
      var promise =  ServiceTaxCalculationService.checkAmount(controller.amount);
      promise.then(function(response){
        // delegate the business logic to the Service
        controller.tax = ServiceTaxCalculationService.calculateTax(controller.amount);
      },function(error){
        console.log(error.message);
      })

    }
  }

  ServiceTaxCalculationService.$inject= ['$q','$timeout'];
  // Service definition function
  function ServiceTaxCalculationService($q,$timeout){
    var service = this;

    service.checkAmount = function(chargeAmount){
      var deferred = $q.defer();
      var result = {
        message: ""
      };

      $timeout(function () {
        //check if amount < 1000
        //that this is a complex logic that takes time!
        if(chargeAmount < 1000){
          deferred.resolve(result);
        }
        else{
          result.message = "Oops! Cannot calculate tax amount > 1000";
          deferred.reject(result);
        }
      }, 3000);

      return deferred.promise;
    }

    service.calculateTax = function(chargeAmount){
      return 0.05 * chargeAmount;
    }
  }

})();
