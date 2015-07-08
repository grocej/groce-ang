angular.module('bestPlanet').controller("MainController", function($scope,PlanetService) {

 $scope.getAllPlanets = function() {
    //console.log("GRABBING DATA");
    PlanetService.gotMyPlanets().success(function(data) {
      //console.log("CONTROLLER DATA: ", data)
      $scope.planets = data.results;
      //console.log("PLANETS: ", $scope.planets);
    });
  }
})
