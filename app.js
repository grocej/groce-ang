(function (){
  "use strict";
  angular
    .module('bestPlanet', [
      'ngRoute'
    ])
    .config(function($routeProvider) {
      $routeProvider
      .when('/', {
        templateUrl: "views/home.html",
        controller: "HomeController",
      })
      .when('/planets', {
        templateUrl: "views/planets.html",
        controller: "MainController",
      })
      otherwise({
       redirectTo: "/"
     });
   })
})();
