<script setup lang="ts">
    import Game from "../game.ts"
 
    import cards from '../components/cards.vue'

    let g = new Game()

    const params = window.location.search
        .slice(1)
        .split("&")
        .map((p) => p.split("="))
        .reduce((obj, [key, value]) => ({ ...obj, [key]: value }), {});

    for (let i in params) {
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

<style scoped>
  #body {
    background-color: #000000 !important;
    margin-top: 100px;
  }
</style>