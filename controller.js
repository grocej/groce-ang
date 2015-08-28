(function() {
  'use strict';
  angular
    .module('bestPlanet')
    .controller("MainController", function($scope, PlanetService, $http) {

      $scope.Planets = PlanetService.Planets();

})
}());
