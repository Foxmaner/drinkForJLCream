<script setup lang="ts">
import player from '../components/player.vue'
import VueRouter from 'vue-router';

import { ref } from 'vue'

const Name = ref()
const Gender = ref()

let players:{[key:string]:string} = {"Gibbis":"Male", "Max":"Non binary", "Axel":"Male", "Eskil":"Female", "Björn":"Non binary"}

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
            <template #name>{{pp}}</template>
            <template #gender>{{p}}</template>
            <button @click="removePlayer(String(pp))">Remove</button>
        </player>
    </div>
    <div v-if="Object.keys(players).length >= 5">
        <button>Start game</button>
        <router-link :to="`/game/${players}`">test</router-link>
    </div>

</template>
