( function (){
    "use strict";

    angular.module('MyDependencyModule',[])
    .controller('DIController',DIControllerMethod);

    // Step 6. Additionally to protect DI from minification use this
    //Because minifiers ignore string literals and data
     DIControllerMethod.$inject= ['$scope','$filter','$injector'];

    //Step 1 . In Angular anything with a $ sign is essentially a service
    // So $scope is actually the scope service
    // So as you can see, I am defining a property on the scope service,
    // and I am giving it the string Nitin
    // So what I would like to do next is create a functionality such that when
    // the textbox loses focus like that, whatever is inside this textbox
    // should get uppercased and for that lets use another service $filter
    // Now this begs thae question that how does angular know that this is where
    // the scope service needs to be injected and this is where the filter
    // service needs to be injected

    // Step 3. Add the $injector paremeter
    function DIControllerMethod(
      $scope,
      $filter,
      $injector){
      $scope.name="John";
      $scope.upper = function()
      {
          // first we get a reference to the pre defined filter uppercase
          var upCase = $filter('uppercase');
          $scope.name= upCase($scope.name);
      };

      // Step 5. Log the injector
      console.log($injector.annotate(DIControllerMethod));
      //The output is an array of length 3 - ["$scope", "$filter", "$injector"]
      //Using this the authors  of Angular can parse the array and based on the
      //names invoke the appropriate service
    }

    // Step 2. Lets create a simple function called AnnotateMe that accepts
    // two arguments name, age. If we simply do a console.log we will see the
    // entire function as a string.
    function AnnotateMe(name, age)
    {
      return 'Blah!';
    }

    console.log(AnnotateMe.toString());
    // The output is really just a string and we can parse this string to
    //find where the parentesis is, where the first parameter is, where the
    // comma , is etc. So we can math these arguments with whichever services
    // we need to associate these params with.
    //Using this the authors  of Angular can parse the array and based on the
    //names invoke the appropriate service
    // Also the same thing happpens with the controller method
    console.log(DIControllerMethod.toString());
    // Now the service that does all that in Anguar i.e parse the arguments and
    // match them with appropriate service is called $injector

  }
)();
