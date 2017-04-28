app.controller('WelcomeController', ['$scope', '$location', function ($scope, $location) {
    $scope.goBackstory = function () {
        $location.url("/backstory");
    };
}]);