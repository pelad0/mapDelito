angular.module('starter.controllers', [])

  .controller('MapaCtrl', function ($scope, Posiciones) {

    $scope.puntero=1;
    var objMarkers = {};
    var pos = Posiciones.all();
    console.log(pos);
    for (var i = 0; i < pos.length; i++) {
      var p = pos[i];

      objMarkers[p.name] = p;// Dentro del objeto "objMarkers", se crea una propiedad con el nombre q contenga p.name, a esa propiedad se le asigna el objeto p.
       
      console.log(p);
      
    }
    
    
    
    $scope.anterior=function(){
      if($scope.puntero>1){
        $scope.puntero--;
      }
    };
    
    $scope.sgte=function(){
        if($scope.puntero<3){
        $scope.puntero++;
      }
    };
    
    

    angular.extend($scope, {
      center: {
        lat: -33.30222020000,
        lng: -66.33679760000,
        zoom: 16
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



  .controller('RegistroCtrl', function ($scope, user) {
      $scope.registro=function(us, pass, pass2, em){
        
        user.esString(us);
        user.passOk(pass,pass2);
        user.emailOk(em);
        console.log(us);
        console.log(pass);
        console.log(pass2);
        console.log(em);
       
      }
  })

  .controller('PerfilCtrl', function ($scope, $http) {
  
    /* $http.get("http://app.eatnow.com.do/regions").success(function(data){
       
       console.log(data);
})*/

  });


