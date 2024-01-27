<script setup lang="ts">

    import Gamecard from '../components/GameCard.vue'

    import Game from "../game.ts"

    let g: Game = new Game()

    const item = this.$router.params.item

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
