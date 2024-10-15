<script lang="ts" setup>
import { ref } from 'vue'
import { RouterLink } from 'vue-router'
import { routesList } from '@/utils/helpers'



</script>


<template>

    <main class="sideBarContainer">



        <div class="Navcontainer">

            <div class="appLogo">
                <img src="../assets/icons/TESLA.svg" alt="logo" width="138px" height="17px" />
            </div>
            <div class="linkcontainer">
                <div v-for="(routeObj, index) in routesList" :key="index">
                    <RouterLink :class="routeObj.path ==='/test' ?'disableLink': 'inactiveLink' " active-class="activeLink" :to="routeObj.path" >
                        <img :src="routeObj.icon" alt="" width="24px" height="24px" />
                        {{ routeObj.name }}

                    </RouterLink>

                    <div v-if="index === 3">
                        <p class="sectionS">Support</p>
                    </div>
                </div>

            </div>


        </div>

        <div class="bottomNav">
            <div>
                <img src="../assets/icons/Photo.svg" />
                <p class="name">Sam Wheeler</p>
                <p class="emailClass">samwheeler@example.com</p>

            </div>

        </div>

    </main>
</template>

<style scoped>
.sideBarContainer {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: start;
    height: 100vh;
}

.Navcontainer {

    padding-block: 40px;

    width: 100%;
    /* display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center; */


}

.appLogo {
    margin-bottom: 40px;
    width: 100%;

    padding-left: 38px;

}

.appLogo img {

    
    object-fit: cover;
}

.linkcontainer {
    display: flex;
    flex-direction: column;
    gap: 10px;

    width: 100%;

}

.inactiveLink {
    padding-block: 16px;
    color: #000000B2;
    font-weight: 500 !important;
    font-size: 14px;
    line-height: 17px;
    letter-spacing: -0.15px;
    text-decoration: none !important;
    text-transform: capitalize;
    cursor: pointer !important;

    display: flex;
    justify-content: start;
    align-items: center;
    gap: 16px;
    padding-left: 20px;


    margin-left: 27px;
    margin-right: 10px;


}

.disableLink {
    padding-block: 16px;
    color: #000000B2;
    font-weight: 500 !important;
    font-size: 14px;
    line-height: 17px;
    letter-spacing: -0.15px;
    text-decoration: none !important;
    text-transform: capitalize;
    cursor: not-allowed !important;

    display: flex;
    justify-content: start;
    align-items: center;
    gap: 16px;
    padding-left: 20px;


    margin-left: 27px;
    margin-right: 10px;


}

.activeLink {
    border-radius: 10px;
    background: #1B59F81A;
    color: #1B59F8;
    cursor: pointer !important;
}

.inactiveLink:hover {
    border-radius: 10px;
    background: #1B59F81A;
    color: #1B59F8;
    /* text-decoration: none; */
    transition: background 0.4s ease-in-out, color 0.4s ease-in-out;
}

.sectionS {
    /* border: 2px solid red; */
    padding-block: 16px;
    color: #000000B2;
    font-weight: 500 !important;
    font-size: 16px;
    line-height: 20px;
    letter-spacing: -0.2px;

    padding-left: 20px;
    gap: 16px;
    margin-top: 24px;
    margin-left: 27px;
    margin-right: 10px;
}

.bottomNav {
    width: 100%;
}

.bottomNav div {
    padding-block: 32px;
    margin-inline: 20px;
    padding-inline: 12px;
    border-top: 1px solid #E5E5E5;
}
.bottomNav img {
margin-bottom: 10px;
}

.bottomNav .name {
    font-size: 14px;
    line-height: 18px;
    font-weight: 600;
    color: #000000;
}


.bottomNav .emailClass {
    font-size: 12px;
    line-height: 14px;
    font-weight: 400;
    color: #00000080;
}
</style>