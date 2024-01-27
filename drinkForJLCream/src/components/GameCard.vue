<script>
export default {
    props: {
        title: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true
        }
    }
}
</script>


<template>
    <div class="game-card">
            <p class="card-text">{{ description }}</p>
        
    </div>
</template>



<style scoped>
.game-card {
    background-color: white;
    border: 1px solid black;
    border-radius: 5px;
    padding: 10px;
    margin-bottom: 10px;
    height: 80vh;
}

.card-text {
    color:black;

    display: flex;
justify-content: center;
align-items: center;
text-align: center;
min-height: 100vh;
}

</style>
