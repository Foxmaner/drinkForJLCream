<template>
    <div class="cards">
        <game-card
        v-for="(card, index) in cards"
        :key="card"
        :card="card"
        :is-current="index ===0"></game-card>
    </div>
</template>
<script>
import GameCard from '@/components/GameCard';

export default {
    components: {
        GameCard
    },
    props: {
        cards: {
            type: Array,
            required: true
        }
    }
}
</script>

<export default CardStack>