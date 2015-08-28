(function (){
  "use strict";
  angular
    .module('bestPlanet', [
      'ngRoute',
    ])
    .config(function($routeProvider) {
      $routeProvider
      .when('/', {
        controller: "MainController",
        templateUrl: 'views/planets.html'
      })
      .when('/404', {
        template: "<h2>Sorry, Not Found</h2>",

      })
      .otherwise({
       redirectTo: "/404"
     });
   })
})();
