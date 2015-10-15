angular.module('starter.services', [])
  .factory('user', function () {
    return {
      esString: function (nombre) {
        var expRegNom = /^\w{4,}$/;
        if (!expRegNom.test(nombre)) {
          alert("El Usuario debe contener al menos 4 caracteres.")
          return;
        }
      },
      passOk: function (pass1, pass2) {
        if (pass1 !== pass2) {
          alert("Las contraseñas no coinciden")
          return;
        }
      },
      emailOk: function (email) {
        var expRegEm = /^[a-z][\w.-]+@\w[\w.-]+\.[\w.-]*[a-z][a-z]$/i;
        if(!expRegEm.test(email)){
          alert("El formato de email no es valido");
          return;
        }
      }



    }
  })

  .factory('Posiciones', function () {
    // Might use a resource here that returns a JSON arra
 
 
 
    // Some fake testing data
    var posiciones = [{
      name: 'p1',
      lat: -33.30222020000,
      lng: -66.33679760000,
      message: 'Esta es su posicion',
      focus: true,
      draggable: true
    } ];

    return {
      all: function () {
        return posiciones;
      },

      remove: function (chat) {
        posiciones.splice(posiciones.indexOf(chat), 1);
      },

      get: function (chatId) {
        for (var i = 0; i < posiciones.length; i++) {
          if (posiciones[i].id === parseInt(chatId)) {
            return posiciones[i];
          }
        }
        return null;
      }
    };


  });
