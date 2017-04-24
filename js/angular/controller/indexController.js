var app = angular.module('horaDeSonhar', []);
app.controller('indexCtrl', function($scope) {

    $scope.loaded = function() {
        angular.element('#side-menu').metisMenu();
    }
});