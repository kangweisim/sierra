var app = angular.module('lastBattleOfSierra', ['ngRoute'])
.config(['$routeProvider', function ($routeProvider) {
    $routeProvider
        .when('/', {
        templateUrl: 'welcome/welcome.html',
        controller: 'WelcomeController'
    })
        .when('/backstory', {
        templateUrl: 'backstory/backstory.html',
        controller: 'BackStoryController'
    })
        .when('/createHero', {
        templateUrl: 'createHero/createHero.html',
        controller: 'CreateHeroController'
    })
        .when('/mainMenu', {
        templateUrl: 'mainMenu/mainMenu.html',
        controller: 'MainMenuController'
    })
        .when('/shop', {
        templateUrl: 'shop/shop.html',
        controller: 'ShopController'
    })
        .otherwise({redirectTo: '/mainMenu'});
}]);