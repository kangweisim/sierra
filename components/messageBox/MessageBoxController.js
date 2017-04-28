app.controller('MessageBoxController', ['$scope', function ($scope) {
    $scope.message = "Fine today it is!!";
    
    $scope.nextMessage = function () {
        console.log("hi")
        $('item').transition('scale');
    };
    
}]);