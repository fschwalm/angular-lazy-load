(function() {

  angular
    .module('module1', []);

}());

(function() {

  angular
    .module('module1')
    .controller('module1Controller', Controller);

  Controller.$inject = ['factory1'];

  function Controller(factory1) {
    this.message = factory1.getMessage();
  }

}());

(function() {

  angular
    .module('module1')
    .factory('factory1', Factory);

  function Factory() {
    return {
      getMessage: function() {
        return 'Hello from lazy loaded service';
      }
    };
  }

}());
