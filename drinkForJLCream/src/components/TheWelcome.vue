<script setup lang="ts">
import player from '../components/player.vue'

import { RouterLink, RouterView } from 'vue-router'

import { ref } from 'vue'

const Name = ref()
const Gender = ref()

let players: { [key: string]: string } = { "Gibbis": "Male", "Max": "Non binary", "Axel": "Male", "Eskil": "Female", "Björn": "Non binary" }

function addPlayer() {

    if (Name.value in players) {
        console.log("Player already exists")
        Name.value = ""
        Gender.value = ""
        return
    }
    players[Name.value] = Gender.value
    Name.value = ""
    Gender.value = ""

}

function removePlayer(p: string) {
    delete players[p]
    Name.value = "TEMP" // This is a hack to force a re-render
    Name.value = ""
}

</script>

<template>
    <input v-model.trim="Name" placeholder="Name">
    <select v-model="Gender">
        <option disabled value="">Gender</option>
        <option>Male</option>
        <option>Female</option>
        <option>Non binary</option>
    </select>

    <button @click=addPlayer()>Add player</button>
    <div v-if="Object.keys(players).length == 0">
        <p>Add at least five players to start a game</p>
    </div>
    <div v-for="(p, pp) in players">
        <player>
            <template #name>{{ pp }}</template>
            <template #gender>{{ p }}</template>
            <button @click=removePlayer(String(pp))>Remove</button>
        </player>
    </div>
        <RouterLink :to="{path: '/game', query: players}"
        v-if="Object.keys(players).length >= 5"
        class="button">Start game</RouterLink>
</template>

<style scoped>

.button {
    background-color: #587B7F; /* Adjusted background color */
    border: 1px solid #587B7F; /* Matching border color */
    color: #FFFFFF; /* White text color */
    padding: 8px 16px; /* Adjust padding for better appearance */
    font-size: 1rem; /* Adjust font size */
    font-weight: bold; /* Bold text */
    border-radius: 4px; /* Rounded corners */
    cursor: pointer; /* Pointer cursor on hover */
}

.button:hover {
    background-color: #476267; /* Darker background color on hover */
    border-color: #476267; /* Darker border color on hover */
}

</style>