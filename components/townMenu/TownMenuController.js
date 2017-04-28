app.controller('TownMenuController', ['$scope', 'gameDataService', 'heroDataService', '$location', function ($scope, gameDataService, heroDataService, $location) {
    $scope.game = gameDataService;
    $scope.hero = heroDataService;
    $scope.goSleep = function () {
        $scope.game.changeDaysLeft(-1);
        $('.segment').dimmer('show');
        $scope.hero.refresh();
        setTimeout(function () {
            $('.segment').dimmer('hide');
        }, 1500);
    };
    $scope.goShop = function () {
        $location.url('/shop');
    }
}]);