<script lang="ts">
    import Game from "../game.ts"
    let g = new Game()
    console.log(window.location.search + "aaaaa")
    const params = window.location.search
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

    // Import Swiper Vue.js components
    import { Swiper, SwiperSlide } from 'swiper/vue';

    // Import Swiper styles
    import 'swiper/css';

    import 'swiper/css/effect-cards';

    import './style.css';

    // import required modules
    import { EffectCards } from 'swiper/modules';

    export default {
        components: {
            Swiper,
            SwiperSlide,
        },
        setup() {
            return {
                modules: [EffectCards],
            };
        },
    };
</script>


<template>
    <swiper
      :effect="'cards'"
      :grabCursor="true"
      :modules="modules"
      class="mySwiper"
    >
      <swiper-slide>Slide 1</swiper-slide>
      <swiper-slide>Slide 2</swiper-slide>
      <swiper-slide>Slide 3</swiper-slide>
      <swiper-slide>Slide 4</swiper-slide>
      <swiper-slide>Slide 5</swiper-slide>
      <swiper-slide>Slide 6</swiper-slide>
      <swiper-slide>Slide 7</swiper-slide>
      <swiper-slide>Slide 8</swiper-slide>
      <swiper-slide>Slide 9</swiper-slide>
    </swiper>
  </template>


