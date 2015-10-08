angular.module('starter.services', [])

  .factory('Posiciones', function () {
    // Might use a resource here that returns a JSON arra
 
    // Some fake testing data
    var posiciones = [{
      name: 'p1',
      lat: -33.30222020000,
      lng: -66.33679760000,
      message: 'Aca estoy1',
      focus: true,
      draggable: false
    },
      {
        name: 'p2',
        lat: -33.38222020000,
        lng: -66.37679760000,
        message: 'Aca estoy2',
        focus: true,
        draggable: false

      },

      {
        name: 'p3',
        lat: -33.40222020000,
        lng: -66.28679760000,
        message: 'Aca estoy3',
        focus: true,
        draggable: false
      },
      {
        name: 'p4',
        lat: -33.33222020000,
        lng: -66.43679760000,
        message: 'Aca estoy4',
        focus: true,
        draggable: true
      }



    ];

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
