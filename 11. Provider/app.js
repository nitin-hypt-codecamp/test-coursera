(function(){
  'use strict';

  angular.module('ProviderApp',[])
  .controller('ServiceTaxController',ServiceTaxController)
  .provider('ServiceTaxProService',ServiceTaxProvider)
  // regiter the provider to the angular module
  .config(Config);
  // regiter the config to the angular module
  //Guaranteed to execute before any controller, service etc is initialzed

  Config.$inject =['ServiceTaxProServiceProvider']; //append "Provider" to name
  //Inject the service provider into the Config
  function Config(ServiceTaxProServiceProvider){
    ServiceTaxProServiceProvider.defaults.taxRate = 0.10; //10%
    //ensures that the taxRate remains 10% till the lifetine of the app
  }

  // inject the service
  ServiceTaxController.$inject = ['ServiceTaxProService'];
  // define the conroller
  function  ServiceTaxController(ServiceTaxProService){
    var controller = this;
    controller.amount = "";
    controller.tax ="";

    controller.calculateTax = function(){
      // delegate the business logic to the Service
      controller.tax = ServiceTaxProService.calculateTax(controller.amount);
    }
  }

  // Service definition function
  function ServiceTaxCalculationService(taxRate){
    var service = this;

    service.calculateTax = function(chargeAmount){
      if(taxRate == undefined) taxRate = 0.05

      return taxRate * chargeAmount;
    }
  }

  function ServiceTaxProvider()
  {
    var provider = this;
    //used for later in the config
    provider.defaults = {
      taxRate : 0.05
    }
    provider.$get = function(){
      var service = new ServiceTaxCalculationService(provider.defaults.taxRate);
      return service;
    }
  }

})();
