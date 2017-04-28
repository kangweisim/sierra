app.controller('ShopController', ['$scope', 'heroDataService', function ($scope, heroDataService) {
    $scope.hero = heroDataService;
}]);