class Achievements {

    constructor(name, description) {
        this.name = name;
        this.description = description;
        this.isAchieved = false;
        this.counter = 0;
    }

    checkAchieved() {

    }
}

// A_ is used to differentiate achievements from other classes.
class A_Played extends Achievements {
    
    constructor() {
        super('Played', 'You played the game.')
    }

    checkAchieved() {
        if (game) {
            if (true) {
                this.isAchieved = true;
            }
        }
    }

}

class A_Survivor extends Achievements {

    constructor() {
        super('Survivor', 'You survived until turn 25.')
    }

    checkAchieved() {
        if (game) {
            if (game.currentTurn == 25) {
                this.isAchieved = true;
            }
        }
    }

}

class A_SpiderHunter extends Achievements {

    constructor() {
        super('Spider Hunter', 'Obtain 5 string.')
    }

    checkAchieved() {
        if (game) {
            if (game.getItemCount(String) >= 5) {
                this.isAchieved = true;
            }
        }
    }

}

class A_BeastSlayer extends Achievements {

    constructor() {
        super('Beast Slayer', 'You killed a bear.')
    }

    checkAchieved() {
        if (game) {
            for (let object of game.objectArray) {
                if (object instanceof Bear && object.health <= 0) {
                    this.isAchieved = true;
                }
            }
        }
    }

}

class A_Deforestation extends Achievements {
    
    constructor() {
        super('Deforestation', 'You monster!')
    }

    checkAchieved() {
        if (game) {
            if (game.getItemCount(Wood) >= 100) {
                this.isAchieved = true;
            }
        }
    }
}