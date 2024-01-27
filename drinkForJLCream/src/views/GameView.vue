<script setup lang="ts">

    import Gamecard from '../components/GameCard.vue'

    import Game from "../game.ts"

    let g = new Game()
    const params =  window.location.search
        .slice(1)
        .split('&')
        .map(p => p.split('='))
        .reduce((obj, [key, value]) => ({ ...obj, [key]: value }), {})
    
    for (let i in params) {
        g.addPlayer(i, params[i])
    }

    console.log("players: " + g.getPlayers())
    console.log("males: " + g.getMales())
    console.log("females: " + g.getFemales())
    console.log("nonbinaries: " + g.getNonBinaries())
</script>




<template>
    <p>Starta spelet</p>
    <Gamecard title="Game 1" description="Björn dricker 8 klunkar"/>
    <Gamecard title="Game 1" description="Björn dricker 8 klunkar"/>
    <Gamecard title="Game 1" description="Björn dricker 8 klunkar"/>
    <Gamecard title="Game 1" description="Björn dricker 8 klunkar"/>
    <Gamecard title="Game 1" description="Björn dricker 8 klunkar"/>
    <Gamecard title="Game 1" description="Björn dricker 8 klunkar"/>
    <Gamecard title="Game 1" description="Björn dricker 8 klunkar"/>
    <Gamecard title="Game 1" description="Björn dricker 8 klunkar"/>
    <Gamecard title="Game 1" description="Björn dricker 8 klunkar"/>
    <Gamecard title="Game 1" description="Björn dricker 8 klunkar"/>
</template>
