app.service('gameDataService', function () {
    var game = this;
    game.daysLeft = 100;
    game.changeDaysLeft = function (days) {
        game.daysLeft += days;
    };
});