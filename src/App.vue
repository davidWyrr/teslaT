<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import Sidebar from '../src/components/Sidebar.vue'
import { ref } from 'vue';

const isSideBarOpen = ref(false)
const isSideBarOpenLg = ref(true)

const onclickHandler = () => {
  isSideBarOpen.value = !isSideBarOpen.value;

}
</script>

<template>

  <main class="mainContainer">
    <div :class="isSideBarOpenLg ? 'side' : 'sideClose'">
      <div class="sideBarparent">
        <Sidebar />
      </div>
      <div :class="isSideBarOpenLg ? 'toggler22' : 'toggler22close'">
        <img src="./assets/icons/arrowRight.svg" alt="" @click.stop="isSideBarOpenLg = !isSideBarOpenLg">
      </div>
    </div>


    <div class="MobileNav" v-if="isSideBarOpen" @click="onclickHandler()">
      <div>
        <Sidebar />
      </div>
    </div>

    <div class="toggler">
      <img src="./assets/icons/arrowRight.svg" alt="" @click.stop="isSideBarOpen = !isSideBarOpen">
    </div>


    <div :class="isSideBarOpenLg ? 'childrenClass' : 'childrenClassClose'">
      <RouterView />
    </div>

  </main>

</template>

<style scoped>
.mainContainer {
  display: flex;
  background: #F9F9F9;
  height: 100vh;
  max-height: 100vh;
  position: fixed;
  width: 100%;

}

.MobileNav {
  position: fixed;
  top: 0;
  left: 0;
  background: rgba(51, 51, 51, 0.9);
  color: #FFFFFF;
  z-index: 999;
  width: 100%;
  height: 100vh;
}

.MobileNav div {
  width: 350px;
  height: 100%;
  overflow: auto;
  background: white;
  opacity: 1;
}

.side {
  position: relative;
  width: 15%;
  min-width: 250px;
  transition: width 0.5s ease-in-out;
  /* display: flex; */
}

.sideClose {
  position: relative;
  width: 1%;
  transition: width 0.5s ease-in-out;
  /* min-width: 250px; */

}

.sideBarparent {
  overflow-y: auto;
  overflow-x: hidden;
  background: #FFFFFF;
  box-shadow: 0px 5px 20px 0px #0000000D;

  padding-right: 20px;
  border: 2px solid red;
  border-top-right-radius: 20px;

  border: 1px solid #EFF0F6;
}

.toggler {
  display: none;
}

.toggler22 {
  display: flex !important;
  justify-content: start;
  align-items: start;
  margin-top: 20%;
  position: absolute;
  right: -5%;
  top: 0;
  height: 100%;
}

.toggler22close {
  display: flex !important;
  justify-content: start;
  align-items: start;
  margin-top: 20%;
  position: absolute;
  right: -100%;
  top: 0;
  height: 100%;
}

.toggler22close img {
  border: 2px solid #53525A;
  border-radius: 100%;
  background: #cfcccc;
  cursor: pointer;
}

.toggler22 img {
  border: 2px solid #53525A;
  border-radius: 100%;
  background: #cfcccc;
  cursor: pointer;
}

@media (max-width: 768px) {

  .side,
  .sideClose {
    display: none !important
  }

  .childrenClass {
    width: 100% !important;
    transition: width 0.5s ease-in-out;
  }

  .mainContainer {
    position: relative !important;
  }

  .toggler22 {
    display: none !important;
  }

  .toggler {
    display: flex !important;
    justify-content: center;
    align-items: center;
    /* background: grey; */
    position: absolute;
    height: 100%;
    width: 5px;
    border-left: 5px solid #53525A;
  }

  .toggler img {
    border: 2px solid #53525A;
    border-radius: 100%;
    margin-left: 20px;
    cursor: pointer;
  }
}

.childrenClassClose {
  width: 100%;
  margin-inline: auto;
  overflow-x: hidden !important;
  overflow-y: scroll !important;
  padding: 20px;
  transition: width 0.5s ease-in-out;
}

.childrenClass {
  width: 84%;
  margin-inline: auto;
  overflow-x: hidden !important;
  overflow-y: scroll !important;
  padding: 20px;
  transition: width 0.5s ease-in-out;

}
</style>
