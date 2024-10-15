<script setup lang="ts">
import TestChart from './charts/TestChart.vue';

defineProps<{
    cardTitle: string,
    subTitle: string,
    spanDetails?: string,
    isChart?: boolean,
    isIcon?: boolean,
}>()


</script>

<template>
    <div class="card-container">
        <div class="card-container111">
            <div class="cardTitleContainer">
                <p class="cardTitle">
                    {{ cardTitle }}
                </p>
                <img src="../assets/icons/Icon-info-circle-line.svg" alt="" v-if="isIcon" />
            </div>

            <p class="cardCount">
                {{ subTitle }}<span>{{ spanDetails }}</span>
            </p>
        </div>

        <div class="chartContainer" v-if="isChart">
            <TestChart />
        </div>
    </div>
</template>

<style lang="css" scoped>
.chartContainer {

    width: 100%;
    /* height: 100%; */
}

.card-container111 {
    display: flex;
    flex-direction: column;
    align-items: start;
    gap: 14px;
    padding-inline: 16px;
    margin-top: 23px;
    width: 100%;
    text-align: start;

}

.card-container {
    display: flex;
    justify-content: space-between;
    align-items: start;
    /* gap: 10px; */
    border: 1px solid #EFF0F6;
    flex-direction: column;
    background: white;
    border-radius: 20px;
    min-height: 170px;
    height: 170px;



}
.cardTitleContainer{
    display: flex;
    justify-content: start;
    align-items: center;
    gap: 4px;
}

.cardTitle {
    font-weight: 500;
    font-size: 14px;
    color: #000000B2;
    line-height: 17px;
    text-transform: capitalize;

}

.cardCount span {
    color: grey;
    font-size: 17px;
}

.cardCount {
    color: #000000;
    font-weight: 700;
    font-size: 24px;
    line-height: 29px;


}
</style>