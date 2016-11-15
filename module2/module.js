(function() {

  angular
    .module('module2', []);

}());

(function() {

  angular
    .module('module2')
    .controller('module2Controller', Controller);

  function Controller() {
    this.message = 'Hello from a lazy loaded controller';
  }

}());

(function() {

  angular
    .module('module2')
    .directive('greeting', Directive);

  function Directive() {
    var ddo = {
      template: '<div>{{message}}</div>',
      link: function($scope) {
        $scope.message = 'hello from a directive';
      }
    };

    return ddo;
  }

}());
