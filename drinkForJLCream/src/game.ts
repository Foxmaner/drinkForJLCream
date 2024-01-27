import { readFileSync } from 'fs'

class Game {
    
    players: { [key: string]: {[key: string]: number} }
    genders: { [key: string]: string[]}
    rules: string[]

    public constructor() {
        this.players = {}
        this.genders = {}
        const file = readFileSync('./rules.json', 'utf-8')
        this.rules = JSON.parse(file);
    }

    addPlayer(Name: string, Gender: string): void{
        let i: number = 0
        if (Gender == "Male") {
            i = 0
        } else if (Gender == "Female") {
            i = 1
        } else {
            i = 2
        }
        this.players[Name]["gender"] = i
        this.players[Name]["nrDrinks"] = 0;
        this.genders[Gender].push(Name)
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