<script setup lang="ts">
    import Game from "../game.ts"
 
    import cards from '../components/cards.vue'

    let g = new Game()

    console.log(window.location.search)
    const params = window.location.search
        .slice(1)
        .split("&")
        .map((p) => p.split("="))
        .reduce((obj, [key, value]) => ({ ...obj, [key]: value }), {});
    console.log(params)

    for (let i in params) {
        console.log(i)
        console.log(params[i])
        g.addPlayer(i, params[i])
    }

    console.log("players: " + g.getPlayers())
    console.log("males: " + g.getMales())
    console.log("females: " + g.getFemales())
    console.log("nonbinaries: " + g.getNonBinaries())


</script>


<template>

    <cards></cards>

</template>


