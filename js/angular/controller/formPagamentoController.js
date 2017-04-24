var app = angular.module('horaDeSonhar', []);
app.controller('formPagamentoCtrl', function($scope) {

    $scope.loaded = function() {
        angular.element('#side-menu').metisMenu();
    }
});