(function() {

  angular
    .module('module1')
    .service('AlertService', Service);

  function Service() {

    _init();

    function _init() {
      console.log("Hello from service");
    }

  }

}());
