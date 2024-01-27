<script setup lang="ts">
</script>

<template>
    <div class="item">
        <div class="name">
            <slot name="name">
            </slot>
        </div>
        <div class="gender">
            <slot name="gender">
            </slot>
        </div>
        <div class="remove">
            <slot>
            </slot>
        </div>
    </div>
</template>


<style scoped>
.item {
    margin-top: 2rem;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    background-color: blue;
    padding: 4px;
    border-radius: 7px;
}

.name {
    font-size: 1.2rem;
    font-weight: 500;
    margin-bottom: 0.4rem;
    min-width: 100px;
    color: var(--color-heading);
}

.gender {
    font-size: 1.2rem;
    font-weight: 500;
    margin-bottom: 0.4rem;
    min-width: 60px;
    color: var(--color-heading);
}
.remove {
    font-size: 1.2rem;
    font-weight: 500;
    margin-bottom: 0.4rem;
    color: var(--color-heading);
    padding: 0 0 0 1rem;
}
</style>
