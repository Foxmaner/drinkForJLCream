<script setup lang="ts">
</script>

<template>
    <div class="item">
        <p>
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
        </p>

    </div>
</template>


<style scoped>
.item {
    margin-top: 2rem;
    display: flex;
    position: relative;
    background-color: blue;
    padding: 4px;
    border-radius: 7px;
}

.name {
    font-size: 1.2rem;
    font-weight: 500;
    margin-bottom: 0.4rem;
    min-width: 100px;
    display: inline-block;
    color: var(--color-heading);
}

.gender {
    font-size: 1.2rem;
    font-weight: 500;
    margin-bottom: 0.4rem;
    min-width: 60px;
    display: inline-block;
    color: var(--color-heading);
}
.remove {
    font-size: 1.2rem;
    font-weight: 500;
    margin-bottom: 0.4rem;
    float: right;
    color: var(--color-heading);
}
</style>
