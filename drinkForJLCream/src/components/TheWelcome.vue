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
    <div class="input-bar">
        <input v-model.trim="Name" placeholder="Name" class="name">
        <select v-model="Gender" class="select">
            <option disabled value="">Gender</option>
            <option>Male</option>
            <option>Female</option>
            <option>Non binary</option>
        </select>
        <button @click=addPlayer() class="add-player">Add player</button>
    </div>
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
        class="button">Start Game</RouterLink>
</template>

<style scoped>
/* Styles for .input-bar container */
.input-bar {
    display: flex;
    align-items: center;
    margin-bottom: 20px;
}

/* Styles for input elements */
.name, .select {
    padding: 10px;
    border: 1px solid #CCCCCC;
    border-radius: 5px;
    font-size: 1rem;
    outline: none;
    margin-right: 10px;
}

/* Style for the button inside .input-bar */
.add-player {
    background-color: #587B7F;
    border: 1px solid #587B7F;
    color: #FFFFFF;
    padding: 10px 20px;
    font-size: 1rem;
    font-weight: bold;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease, border-color 0.3s ease, color 0.3s ease;
}

.add-player:hover {
    background-color: #476267;
    border-color: #476267;
}

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