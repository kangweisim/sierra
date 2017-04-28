app.controller('CreateHeroController', ['$scope', 'heroDataService', '$location', function ($scope, heroDataService, $location) {
    $scope.input = {};

    $scope.hero = heroDataService;

    $scope.startingStatPoints = $scope.hero.str + $scope.hero.agi + $scope.hero.int;
    $scope.remainingStatPoints = 0;
    $scope.goMainMenu = function () {
        if ($scope.input.nameField) {
            $location.url("/mainMenu");
            $scope.hero.setName($scope.input.nameField);
            $scope.hero.refresh();
        }
    };
    function validStatAssignment(change) {
        if ($scope.remainingStatPoints + $scope.hero.str + $scope.hero.agi + $scope.hero.int === $scope.startingStatPoints && $scope.remainingStatPoints - change >= 0 && $scope.hero.str + change >= 0 && $scope.hero.agi + change >= 0 && $scope.hero.int + change >= 0) {
            return true;
        } else {
            return false;
        }
    }
    
    $scope.changeStr = function (change) {
        if (validStatAssignment(change)) {
            $scope.hero.changeStr(change);
            $scope.remainingStatPoints -= change;
        }
    };

    $scope.changeAgi = function (change) {
        if (validStatAssignment(change)) {
            $scope.hero.changeAgi(change);
            $scope.remainingStatPoints -= change;
        }
    };

    $scope.changeInt = function (change) {
        if (validStatAssignment(change)) {
            $scope.hero.changeInt(change);
            $scope.remainingStatPoints -= change;
        }
    };
    
    
}]);