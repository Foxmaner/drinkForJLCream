<script setup lang="ts">
</script>

<template>
    <div class="player-card">
        <div class="info">
            <div class="name">
                <slot name="name">
                </slot>
            </div>
            <div class="gender">
                <slot name="gender">
                </slot>
            </div>
        </div>
        <div class="remove">
            <slot>
            </slot>
        </div>
    </div>
</template>

<style scoped>
.player-card {
    margin-top: 1rem;
    width: 250px;
    background-color: #FFFFFF;
    border-radius: 10px;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
    padding: 16px;
    margin-bottom: 20px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    min-width: 300px;
}

.info {
    display: flex; /* Make the info section flex container */
    justify-content: space-between; /* Space between name and gender */
    flex: 1;
}

.name, .gender {
    font-size: 1.2rem;
    font-weight: 500;
    color: #2e282a;
}

.remove {
    font-size: 1.2rem;
    font-weight: 500;
    color: #2e282a;
    padding: 0 0 0 1rem;
    cursor: pointer;
    transition: color 0.3s ease; /* Add transition for smooth color change */
}

.remove:hover {
    color: #FF0000;
}
</style>
