app.controller('HeroStatsController', ['$scope', 'heroDataService', function ($scope, heroDataService) {
    $scope.hero = heroDataService;
}]);