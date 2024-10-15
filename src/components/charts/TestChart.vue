<script setup lang="ts">
import { ref } from 'vue';



const lineChartSeries = ref([
    {
        name: 'Series 1',
        data: [10,50,75,130, 60, 85, 157, 169]
    }
])

const lineChartOption = ref({
    xaxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr'],
        labels: {
            show: false
        },
        
    },
    yaxis: {
        axisBorder: {
            show: false,
        },
        axisTicks: {
            show: false,
        },
         labels: {
            show: false
        }
    },
    crosshairs: {
        show: false,
    },
    // stroke: {
    //     curve: 'smooth'
    // },
    dataLabels: {
        enabled: false
    },
    grid: {
        show: false
    },
    chart: {
        zoom: {
            enabled: false
        }
    }
    ,
    colors : ['#1B59F8','#0062FF'],
    tooltip: {
        enabled : false
    }


})
</script>

<template>
    <div class="chartParent">
        <apexchart type="area" :series="lineChartSeries" :options="lineChartOption"  :height="75" width="100%" class="chartID"></apexchart>
    </div>
</template>


<style lang="css" scoped>
        .chartParent{
            width: 95%;
            height: 100%;
           /* border: 2px solid red; */
           
        }    
        .chartID{
            width: 100%;
            height: 100%;
           
           
        }
</style>