<script setup lang="ts">
import PeopleDropdown from '@/components/custom-dropdown/peopleDropdown.vue';
import TimeFrame from '@/components/custom-dropdown/TimeFrame.vue';
import ReportCard from '@/components/ReportCard.vue';
import TopicSection from '@/components/topic/TopicSection.vue';
import { onMounted, ref } from 'vue';
import LeadershipSection from '@/components/leadershipboard/leadershipSection.vue';
import BarChart from '@/components/charts/barChart.vue';
import { cardList, LeaderShipSectionArray, TopicSectionArray } from '@/utils/helpers';

const isTimeFrameDropdownOpen = ref(false);
const isPeopleDropdownOpen = ref(false);
const isloading = ref(true);



const updateIsTimeFrameDropdownOpen = (newValue: boolean) => {
    isTimeFrameDropdownOpen.value = newValue;
};
const updateisPeopleDropdownOpen = (newValue: boolean) => {
    isPeopleDropdownOpen.value = newValue;
};

const setLoadingValue = ()=>{
    setTimeout(() => {
        isloading.value = false;
    }, 3000);
    
}

onMounted(()=>{
    setLoadingValue();
})

</script>



<template>
    <main class="module-container">
        <div class="title-container">
            <p class="title">Reports</p>
            <div class="btn-download">
                <img src="../assets/icons/Download.svg" alt="" width="22" height="22" />
                <p>Download </p>
            </div>

        </div>

        <div class="dropdowns">
            <div :class="isTimeFrameDropdownOpen ? 'dropdowns-item' : 'dropdowns-itemActive'">
                <TimeFrame :isTimeFrameDropdownOpen="isTimeFrameDropdownOpen"
                    @update:isTimeFrameDropdownOpen="updateIsTimeFrameDropdownOpen" />
            </div>

            <div :class="isPeopleDropdownOpen ? 'dropdowns-item2' : 'dropdowns-itemActive'">
                <PeopleDropdown :isPeopleDropdownOpen="isPeopleDropdownOpen"
                    @update:isPeopleDropdownOpen="updateisPeopleDropdownOpen" />
            </div>

            <div class="dropdowns-itemActive">
                <div class="timeTitleContainer1">
                    <p class="timeTitle1">Topic: <span>All</span> </p>
                    <img src="../assets/icons/caret.svg" alt="" />
                </div>
            </div>


        </div>

        <div class="chartSection">
            <div class="test33">
                <ReportCard v-for="({ cardTitle, subTitle, isChart, isIcon, spanDetails }, index) in cardList"
                    :key="index" :cardTitle="cardTitle" :subTitle="subTitle" :isChart="isChart" :isIcon="isIcon"
                    :spanDetails="spanDetails" />
            </div>

            <div class="barChartContainer">
                <div class="barContainer">
                    <p class="barTiles">Activity</p>
                    <div class="monthC">
                        <p class="barTilesMonth">Month</p>
                        <img src="../assets/icons/caretMonth.svg" alt="">
                    </div>
                </div>
                <BarChart />
            </div>
        </div>


        <div class="topicSectionGrid">
           
            <v-skeleton-loader type="list-item-three-line"   v-if="isloading"></v-skeleton-loader>
             <v-skeleton-loader type="list-item-three-line"   v-if="isloading"></v-skeleton-loader>
            
         
          
            <TopicSection v-for="(progressDataObj, index) in TopicSectionArray" :key="index"
                :TopicTitle="progressDataObj.TopicTitle" :testArray="progressDataObj.topics" v-else />
        </div>

        <div class="topicSectionGrid">
            
            <v-skeleton-loader type="list-item-three-line"   v-if="isloading"></v-skeleton-loader>
             <v-skeleton-loader type="list-item-three-line"   v-if="isloading"></v-skeleton-loader>
            <LeadershipSection v-for="(x, index) in LeaderShipSectionArray " :key="index" :testArray="x.topics"
                :TopicTitle="x.TopicTitle" v-else />
        </div>
    </main>
</template>


<style scoped>
.topicSectionGrid {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 24px;

}

.barContainer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px 0px 15px 0px;
    margin-inline: 15px;
    border-bottom: 0.8px solid #E4E5E7;
}

.barTiles {
    color: #4D4D4D;
    font-size: 14px;
    font-weight: 500;

}

.barTilesMonth {
    color: #0F2552;
    font-size: 12px;
    font-weight: 600;
}

.monthC {
    display: flex;
    justify-content: flex-end;
    align-items: center;

}

.barChartContainer {
    background: white;
    border: 1px solid #EFF0F6;
    border-radius: 20px;
}

.chartSection {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 24px;
}

@media (max-width: 1024px) {

    .chartSection {
        display: grid;
        grid-template-columns: repeat(1, minmax(0, 1fr));
    }

    .dropdowns {
        display: flex !important;
        flex-direction: column;
        gap: 10px;
    }

    .topicSectionGrid {
        display: grid;
        grid-template-columns: repeat(1, minmax(0, 1fr));
        gap: 24px;

    }
}

@media (max-width: 768px) {
    .test33 {
        display: grid;
        grid-template-columns: repeat(2, minmax(0, 1fr)) !important;
        row-gap: 17px;
        column-gap: 12px
    }

}

.test33 {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    row-gap: 17px;
    column-gap: 12px
}

.module-container {
    display: grid;
    gap: 24px;
    width: 100%;

}

.title {
    color: #000000;
    font-weight: 700;
    font-size: 24px;
    line-height: 29px;
}

.btn-download {
    display: flex;
    justify-content: end;
    align-items: center;
    gap: 2px;
    cursor: pointer;
}

.btn-download:hover {
    border-bottom: 1px solid #4D4D4D;
}

.btn-download p {
    color: #4D4D4D;
    font-weight: 600;
    font-size: 14px;
    line-height: 18px;

}

.title-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 24px;
    border-bottom: 1px solid #0000001A;
}

.dropdowns {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 10px;
}

.dropdowns-item {
    position: relative;
    border: 1px solid #EFF0F6;
    background: #FFFFFF;
    border-top-right-radius: 20px;
    border-top-left-radius: 20px;
    cursor: pointer !important;
}

.dropdowns-item2 {
    position: relative;
    border-radius: 20px;
    background: #FFFFFF;

}

.dropdowns-itemActive {
    position: relative;
    border: 1px solid #EFF0F6;
    background: #FFFFFF;
    border-radius: 20px;
    cursor: pointer !important;
}

.timeTitleContainer1 {
    margin-inline: 15px;
    padding-block: 15px;

    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
}

.timeTitle1 {
    color: #000000B2;
    font-size: 16px;
    line-height: 20px;
    letter-spacing: -0.3px;
}

.timeTitle1 span {
    font-weight: 700;

}
</style>