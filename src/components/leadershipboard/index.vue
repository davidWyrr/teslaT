<script setup lang="ts">
interface LeaderShipProps {
    name: string;
    percount: number;
    imageUrl?: string | undefined;
    isSucessful: boolean;

}
defineProps<{
    details: LeaderShipProps
    position: number;
}>()

</script>
<template>

    <div class="firstContainer">
        <div class="section1">
            <img :src="details.imageUrl" alt="">
            <div class="nameWrapper">
                <p class="Lname">{{ details.name }}</p>
                <p class="Lpoint">637 Points - {{ details.percount }}% Correct</p>
            </div>
        </div>


        <div class="Lscore">
            <p>{{ position }}</p>
            <img src="../../assets//icons/up.svg" alt="" v-if="details.isSucessful" />
            <img src="../../assets//icons/down.svg" alt="" v-else />
        </div>

    </div>
</template>

<style lang="css" scoped>
.firstContainer {
    display: flex;
    justify-content: space-between;
    align-items: center;

}

.Lscore {
    display: flex;
    justify-content: end;
    align-items: center;
    gap: 12px;
}

.Lscore p {
    color: #151E23;
    font-size: 16px;
    font-weight: 500;

}
.Lscore img {
    object-fit: cover;
}

.Lname {
    color: #000000;
    font-size: 14px;
    font-weight: 600;

}

.Lpoint {
    color: #00000080;
    font-size: 12px;

}

.nameWrapper {
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: start;
    gap: 4px;
}

.section1 {
    display: flex;
    justify-content: start;
    align-items: center;
    gap: 12px;
}
</style>