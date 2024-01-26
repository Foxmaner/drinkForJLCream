<script setup lang="ts">
import WelcomeItem from './WelcomeItem.vue'
import DocumentationIcon from './icons/IconDocumentation.vue'
import ToolingIcon from './icons/IconTooling.vue'
import EcosystemIcon from './icons/IconEcosystem.vue'
import CommunityIcon from './icons/IconCommunity.vue'
import SupportIcon from './icons/IconSupport.vue'
import player from '../components/player.vue'

import { ref } from 'vue'

const Name = ref()
const Gender = ref()

let players:{[key:string]:string} = {}

function addPlayer() {
    
    if (Name.value in players) {
        console.log("Player already exists")
        Name.value = ""
        Gender.value = ""
        return
    }
    console.log("Adding player: " + Name.value + ". With gender: " + Gender.value)
    players[Name.value] = Gender.value
    for (let p in players) {
        console.log(p + " " + players[p])
    }
    Name.value = ""
    Gender.value = ""

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
    
    <div v-for="(p, pp) in players">
        <player>{{pp}}, {{p}}</player>
    </div>

</template>
