(function(){
  'use strict';

  angular.module('ApiApp',[])
  .controller('ApiServicesController',ApiServicesController)
  .service('StarWarsApiService',StarWarsApiService);
  // regiter the service to the angular module

  StarWarsApiService.$inject = ['StarWarsApiService'];
  // inject the service
  // define the conroller
  function  ApiServicesController(StarWarsApiService){
    var controller = this;

    controller.getFilms = function(){
      var promise = StarWarsApiService.getFilmsFromApi();
      promise.then(function(response){
        controller.films = response.data.results;
      })
      .catch(function(error){
        console.log("Something went really wrong");
      });
    }

  }

  StarWarsApiService.$inject= ['$http'];
  // Service definition function
  function StarWarsApiService($http){
    var service = this;
    service.getFilmsFromApi = function(){
      var response = $http({
        method:"GET",
        url: ("http://swapi.co/api/films")
      });

      return response;
    }
  }

})();
