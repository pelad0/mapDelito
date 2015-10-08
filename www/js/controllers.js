angular.module('starter.controllers', [])

  .controller('MapaCtrl', function ($scope, Posiciones) {

    var objMarkers = {};
    var pos = Posiciones.all();
    console.log(pos);
    for (var i = 0; i < pos.length; i++) {
      var p = pos[i];

      objMarkers[p.name] = p;// Dentro del objeto "objMarkers", se crea una propiedad con el nombre q contenga p.name, a esa propiedad se le asigna el objeto p.
       
      console.log(p);
    }
    console.log(objMarkers);

    angular.extend($scope, {
      center: {
        lat: -33.30222020000,
        lng: -66.33679760000,
        zoom: 10
      },
      markers: objMarkers,

      default: {
        scrollWheelZoom: false
      }

    });

  })





  .controller('LoginCtrl', function ($scope) {
    // With the new view caching in Ionic, Controllers are only called
    // when they are recreated or on app start, instead of every page change.
    // To listen for when this page is active (for example, to refresh data),
    // listen for the $ionicView.enter event:
    //
    //$scope.$on('$ionicView.enter', function(e) {
    //});

  })



  .controller('RegistroCtrl', function ($scope) {

  })

  .controller('PerfilCtrl', function ($scope, $http) {
  
    /* $http.get("http://app.eatnow.com.do/regions").success(function(data){
       
       console.log(data);
       
      
       
      
     })*/

  });


