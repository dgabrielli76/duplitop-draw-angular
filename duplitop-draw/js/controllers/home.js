
angular.module('duplitop').controller('HomeCtrl', function($scope, DrawAPI) {
  $scope.makeADraw = function(length) {
    $scope.outputLetters = DrawAPI.makeADraw(length);
  };
});
