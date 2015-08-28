(function() {
  'use strict';
angular
  .module('bestPlanet')
  .factory('PlanetService', function($http, $q, $rootScope) {
      var url = "http://swapi.co/api/planets/?page=";

      var Planets = function() {
        var defer = $q.defer();
        var results = [];
        for(var i=1; i<=7; i++) {
          var newUrl = url.concat(i.toString()).concat("&format=json");
          $http.get(newUrl).success(function(data) {
            results.push(data.results)
            console.log(data.results);
          })
        }
        defer.resolve(results);
        setTimeout(function() {
          console.log(defer.promise);
          $rootScope.$broadcast("IM-READY")
          return defer.promise;
        }, 5000)

      };

      return {
        Planets: Planets
      }
    });
}());
