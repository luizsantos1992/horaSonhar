var app = angular.module('horaDeSonhar', []);
app.controller('formClienteCtrl', function($scope) {

    $scope.loaded = function() {
        angular.element('#side-menu').metisMenu();
    }
});