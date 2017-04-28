app.controller('HeroItemsController', ['$scope', 'heroDataService', function ($scope, heroDataService) {
    $scope.hero = heroDataService;
}]);