app.controller('DaysLeftController', ['$scope', 'gameDataService', function ($scope, gameDataService) {
    $scope.game = gameDataService;
}]);