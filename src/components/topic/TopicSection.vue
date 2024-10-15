<script lang="ts" setup>
import TopicIndex from '@/components/topic/index.vue'
interface progressProps {
    title: string;
    count: number;
    imageUrl: string;
    color: string;
}
defineProps<{
    testArray: Array<progressProps>
    TopicTitle: string
}>()

</script>

<template>
    <div class="sectionTcontainer">
        <p class="titleT">{{ TopicTitle }} </p>
        <div class="TContainer">

            <TopicIndex v-for="(topics, index) in testArray" :key="index" :title="topics.title" :count="topics.count"
                :imageUrl="topics.imageUrl" :color="topics.color" />

        </div>
    </div>

</template>

<style lang="css" scoped>
.titleT {
    color: #00000080;
    font-size: 14px;
    font-weight: 600;
}

.TContainer {
    display: flex;
    flex-direction: column;
    gap: 32px;
}

.sectionTcontainer {
    padding: 18px 18px 32px 18px;
    background-color: white;
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    gap: 18px;
    border: 1px solid #EFF0F6;
    box-shadow: 0px 5px 20px 0px #0000000D;

}
</style>