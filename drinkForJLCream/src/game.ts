
import rules from './rules.json' assert { type: "json" };

class Player {

    gender: string
    nrDrinks: number
    name: string

    public constructor(Name:string, nr: number, Gender: string) {
        this.gender = Gender
        this.nrDrinks = nr
        this.name = Name
    }
}

class Game {
    
    players: { [key: string]: Player }
    genders: { [key: string]: string[]}
    rules: string[]

    public constructor() {
        this.players = {}
        this.genders = {"Male": [], "Female": [], "Non+binary": []}
        this.rules = rules["rules"]
    }

    addPlayer(Name: string, Gender: string): void{
        let p = new Player(Name, 0, Gender)
        this.players[Name] = p
        this.genders[Gender].push(p.name)
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
            ret.push(this.genders["Male"][item])
        }
        return ret
    }


    getFemales(): string[]{
        let ret: string[] = []
        for (let item in this.genders["Female"]) {
            ret.push(this.genders["Female"][item])
        }
        return ret
    }


    getNonBinaries(): string[]{
        let ret: string[] = []
        for (let item in this.genders["Non+binary"]) {
            ret.push(this.genders["Non+binary"][item])
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