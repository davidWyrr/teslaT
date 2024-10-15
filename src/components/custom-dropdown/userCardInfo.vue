<script setup lang="ts">
import { ref } from 'vue';
defineProps<{
    title: string,
}>()

const items = [
    { title: 'All', count: 400 },
    { title: 'Active', count: 200 },
    { title: 'Inactive', count: 150 },
    { title: 'Best Performing', count: 300 },
    { title: 'Worst Performing', count: 10 },
]
const selected = ref('All')
const count = ref(400)
const onSlected = (item: {
    title: string;
    count: number;
}) => {
    selected.value = item.title
    count.value =  item.count
}
</script>

<template>
    <div class="mainContainer">
        <div class="infoContainer">
            <div class="secG">
                <img src="../../assets/icons/People.svg" alt="">
                <p class="cardTitle">
                {{title}}
            </p>
            </div>
          
            <div>
                <v-menu>
                    <template v-slot:activator="{ props }">
                        <div v-bind="props" class="menuP">
                            <p>{{ selected }}</p>
                            <img src="../../assets/icons/caret.svg" alt="" />
                        </div>
                    </template>
                    <v-list>
                        <v-list-item v-for="(item, index) in items" :key="index" :value="index" >
                            <v-list-item-title @click.prevent="onSlected(item)" :value="selected" class="listTitle">{{
                                item.title
                                }}</v-list-item-title>
                        </v-list-item>
                    </v-list>
                </v-menu>
            </div>
        </div>

        <p class="cardCount">
          {{count}}
        </p>
    </div>

</template>

<style lang="css" scoped>
.mainContainer {
    background: white;
    border-radius: 20px;
    padding: 16px;
   
    width: 100%;
    height: fit-content;
    border: 1px solid #EFF0F6;
   
    display: flex;
    justify-content: space-between;
 
    flex-direction: column;
    height: 150px;
}
.secG{
    display: flex;
    align-items: center;
    gap: 8px;
}
.infoContainer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 24px;
}

.cardCount {
    color: #000000;
    font-weight: 700;
    font-size: 24px;
    line-height: 29px;


}

.cardTitle {
    font-weight: 500;
    font-size: 14px;
    color: #000000B2;
    line-height: 17px;
    text-transform: capitalize;

}

.menuP {
    display: flex;
    align-items: center;
    gap: 8px;
    cursor: pointer;
    border: 2px solid #EFF0F6;
    border-radius: 20px;
    padding-inline: 10px;
    padding-block: 5px;
}

.menuP p {
    color: #000000;
    font-weight: 600;
    font-size: 14px;
    line-height: 20px;
}

.listTitle {
    color: #000000;
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
}
</style>