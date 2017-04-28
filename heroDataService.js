app.service('heroDataService', function () {
    var hero = this;

    // constants here
    var strHPModifier, agiAtkModifier, intMPModifier;
    strHPModifier = 5; // every point in STR adds 5 maxHealth
    agiAtkModifier = 2; // every point in AGI adds 2 atk
    intMPModifier = 3; // every point in INT adds 3 maxMana

    hero.name = "My Hero Name";
    hero.setName = function (name) {
        hero.name = name;
    };

    hero.maxHealth = 100;
    hero.currentHealth = hero.maxHealth;
    hero.maxMana = 100;
    hero.currentMana = hero.maxMana;
    hero.atk = 25;
    hero.armor = 0;
    hero.gold = 100;
    hero.equipment = {
        armor:
            {name: "Cheap Leather Armor", type: "Armor"},
        weapon:
            {name: "Blunt Wooden Axe", type: "Weapon"}
    };
    hero.items = [{name: "Cheap Leather Armor", type: "Armor"}, {name: "Blunt Wooden Axe", type: "Weapon"}];
    
    hero.changeMaxHPMP = function (HPMP, change) {
        if (HPMP === "hp") {
            hero.maxHealth += change;
        }
        if (HPMP === "mp") {
            hero.maxMana += change;
        }
    };
    hero.changeAtk = function (change) {
        hero.atk += change;
    };

    hero.str = 10;
    hero.changeStr = function (change) {
        if (hero.str + change >= 0) {
            hero.str += change;
            hero.changeMaxHPMP("hp", strHPModifier * change);
        }
    };

    hero.agi = 10;
    hero.changeAgi = function (change) {
        if (hero.agi + change >= 0) {
            hero.agi += change;
            hero.changeAtk(agiAtkModifier * change);
        }
    };
    hero.int = 10;

    hero.changeInt = function (change) {
        if (hero.int + change >= 0) {
            hero.int += change;
            hero.changeMaxHPMP("mp", intMPModifier * change);
        }
    };
    
    hero.refresh = function () {
        hero.currentHealth = hero.maxHealth;
        hero.currentMana = hero.maxMana;
    };
    
    hero.changeGold = function (change) {
        if (hero.gold + change >= 0) {
            hero.gold += change;
        }
    };
});