app.controller('BackStoryController', ['$scope', '$location', function ($scope, $location) {
    $scope.goCreateHero = function () {
        $location.url("/createHero");
    };
}]);