angular.module("bestPlanet").factory('PlanetService', function($http) {
  var url = "http://swapi.co/api/planets/";

  function getPlanets() {
    return $http.get(url)
  };

  return {
    gotMyPlanets: getPlanets
  },

  //searchText = searchText.toLowerCase();
    //angular.forEach(items, function(item) {
        //if( item.label.toLowerCase().indexOf(searchText) >= 0 ) filtered.push(item);
    //});
  //};
});
