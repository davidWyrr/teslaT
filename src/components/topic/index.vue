<script setup lang="ts">
defineProps<{
    title: string
    count: number
    imageUrl: string
    color: string
}>()
</script>

<template>
    <div class="topicContainer">
        <img :src='imageUrl' alt="" />
        <div class="categoryClassContainer">
            <p class="categoryClass">{{ title }}</p>
            <v-progress-linear :model-value="count" rounded :height="10" class="test11"
                :color="color"></v-progress-linear>
        </div>
        <div class="countContainer">
            <p class="count">{{ count }}% <span>Correct</span> </p>
        </div>
    </div>
</template>

<style lang="css" scoped>
.test11 {
    box-shadow: 0 25px 50px -12px rgb(0 0 0 / 0.25) !important;


}

.topicContainer {
    display: flex;
    justify-content: start;
    align-items: flex-end;
    gap: 15px;

}

.categoryClassContainer {

    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 8px;
}

.categoryClass {
    font-weight: 600;
    color: #000000;
    font-size: 14px;
    line-height: 18px;
}

/* .countContainer{
    display: flex;
    justify-content: flex-end;
   align-items: end;
   border: 2px solid red;
} */

.count {
    color: #000000B2;
    font-size: 14px;
    font-weight: 600;
    text-wrap: nowrap;
}

.count span {
    color: #00000080;
}
</style>