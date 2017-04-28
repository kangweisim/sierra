app.controller('MainMenuController', ['$scope', 'heroDataService', function ($scope, heroDataService) {
    $scope.hero = heroDataService;
}]);