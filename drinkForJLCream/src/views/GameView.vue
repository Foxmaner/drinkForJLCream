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
    <swiper
      :effect="'cards'"
      :grabCursor="true"
      :modules="modules"
      class="mySwiper"
    >
      <swiper-slide>Björn dricker 8 klunkar</swiper-slide>
      <swiper-slide>Mervan får dela ut 3 klunkar</swiper-slide>
      <swiper-slide>Samtliga kör vattenfall</swiper-slide>
      <swiper-slide>Eskil strippar</swiper-slide>
      <swiper-slide>Axel sveper glaset</swiper-slide>
      <swiper-slide>Björn ringer sitt ex</swiper-slide>
      <swiper-slide>Mervan kör pitt eller pung</swiper-slide>
      <swiper-slide>Eskil dricker 3 klunkar</swiper-slide>
    </swiper>
  </template>

    <cards></cards>

</template>

<style scoped>
  #body {
    background-color: #000000 !important;
    margin-top: 100px;
  }
</style>