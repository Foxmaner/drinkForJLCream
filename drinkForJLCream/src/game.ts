
import rules from './rules.json' assert { type: "json" };

class Player {

    gender: string
    nrDrinks: number
    name: string

    public constructor(Name:string, nrDrinks: number, Gender: string) {
        this.gender = Gender
        this.nrDrinks = nrDrinks
        this.name = Name
    }
}

class Game {
    
    players: { [key: string]: Player }
    genders: { [key: string]: string[]}
    rules: string[]

    public constructor() {
        this.players = {}
        this.genders = {}
        this.rules = rules["rules"]
    }

    addPlayer(Name: string, Gender: string): void{
        let p = new Player(Name, 0, Gender)
        this.players[Name] = p
        if (!this.genders[Gender]){
            this.genders[Gender] = [Name]
        } else {
            this.genders[Gender].push(Name)
        }
    }


    getPlayers(): string[]{

        let ret: string[] = []
        for (let key in this.players) {
            ret.push(key)
        }

        return ret
    }

    getMales(): string[]{
        let ret: string[] = []
        for (let item in this.genders["Male"]) {
            ret.push(item)
        }
        return ret
    }


    getFemales(): string[]{
        let ret: string[] = []
        for (let item in this.genders["Females"]) {
            ret.push(item)
        }
        return ret
    }


    getNonBinary(): string[]{
        let ret: string[] = []
        for (let item in this.genders["Non+binary"]) {
            ret.push(item)
        }
        return ret
    }


    getCard(): string {
        let max: number = Object.keys(this.rules).length
        let val = Math.floor(Math.random() * (max - 0 + 1) + 0)

        
        
        return "test"
    }
}


export default Game