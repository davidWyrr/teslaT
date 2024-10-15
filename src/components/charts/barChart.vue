<script setup lang="ts">
import { ref } from 'vue';



const lineChartSeries = ref([
    {
        name: 'Series 1',
        data: [70, 50, 75, 130, 60, 85, 157, 169,50, 130, 57, 169]
    }
])

const lineChartOption = ref({
    xaxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr','may', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
   
      axisTicks: {
          show: true,
          borderType: 'solid',
          color: 'red',
          height: 60,
          offsetX: 0,
          offsetY: 0
      },
    },
    yaxis: {
        axisBorder: {
            show: true,
        },
        // axisTicks: {
        //     show: true,
        // },
        labels: {
            show: true
        }
    },
    crosshairs: {
        show: true,
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
    tooltip: {
        enabled : true
    }
    ,
    colors: ['#1B59F8', '#0062FF'],
    plotOptions: {
      bar: {
          horizontal: false,
          borderRadius: 5,
          borderRadiusApplication: 'around',
          columnWidth :'10px',
          colors: {
              
              backgroundBarColors: ['#F2F7FF'],
            //   backgroundBarOpacity: 1,
              backgroundBarRadius: 5,
          },
      },
    },


})
</script>


<template>

    <div class="chartParent">
        <apexchart type="bar"  :series="lineChartSeries" :options="lineChartOption"  width="100%" :height="300"
            class="chartID"></apexchart>
    </div>
</template>


<style lang="css" scoped>
.chartParent {
    width: 95%;
    height: 100%;
   

}

.chartID .apexcharts-bar-area {
    width: 100%;
    height: 100%;
     border: 2px solid red;


}
</style>