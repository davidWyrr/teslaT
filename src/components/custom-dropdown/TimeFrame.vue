<script setup lang="ts">
import { reactive, ref, useTemplateRef, watch } from 'vue';

interface dropdownItemList {
    id: number;
    name: string;
}
interface dropdownStateProps {
    selectedItems: string;
    list: dropdownItemList[];

}
const props = defineProps({
    isTimeFrameDropdownOpen: {
        type: Boolean,
        required: true,
    },
});

const emit = defineEmits(['update:isTimeFrameDropdownOpen']);
const input = useTemplateRef<HTMLDivElement>('test');

const toggleFrameOpen = () => {
    emit('update:isTimeFrameDropdownOpen', !props.isTimeFrameDropdownOpen);
};
const state: dropdownStateProps = reactive({
    selectedItems: 'Last 7 Days',
    list: [
        {
            id: 1,
            name: 'Last 7 Days',
        },
        {
            id: 2,
            name: 'This Month',
        },
        {
            id: 2,
            name: 'This Year',
        },
        {
            id: 4,
            name: 'Custom',
        }
    ],

})
const handleDropdownClickOutsideTest = (event: MouseEvent) => {
    if (
        input.value &&
        !input.value.contains(event.target as any)
    ) {
        toggleFrameOpen()
    }
};

watch(() => props.isTimeFrameDropdownOpen, (newValue) => {
    if (newValue) {
        document.body.addEventListener('mousedown', handleDropdownClickOutsideTest);
    } else {
        document.body.removeEventListener('mousedown', handleDropdownClickOutsideTest);
    }
});

const onselect = (value: string) => {
    state.selectedItems = value;
    toggleFrameOpen()
}

</script>

<template>
    <div class="">
        <div class="timeTitleContainer1" @click.stop="toggleFrameOpen">
            <p class="timeTitle1">Timeframe: <span>{{ state.selectedItems }}</span> </p>
            <img src="../../assets/icons/caret.svg" alt="" />
        </div>

        <div class="parent-11" ref="test" v-if="props.isTimeFrameDropdownOpen"  >
            <div class="dropdownParent1">
                <div>
                    <p v-for="(dropdownObj, index) in state.list" :key="index"
                        :class="dropdownObj.name.trim() === state.selectedItems.trim() ? 'dropdownitemsActive' : 'dropdownitems'"
                        @click="onselect(dropdownObj.name)">{{ dropdownObj.name
                        }}
                    </p>
                </div>

            </div>
        </div>

    </div>

</template>


<style lang="css" scoped>
.parent-11 {

    width: 100%;
    border-bottom-right-radius: 20px;
    border-bottom-left-radius: 20px;
    overflow: hidden;
    position: absolute;
    z-index: 100 !important;
   


}

.dropdownParent1 {
    padding: 0 16px 16px 16px;
    background: white;



}

.dropdownParent1 div {
    width: 100%;
    border-top: 1px solid #0000001A;
    padding-block: 10px;

}

.dropdownitems {
    padding-block: 10px;
    padding-inline: 15px;


    margin-bottom: 5px;
    cursor: pointer;

}

.dropdownitemsActive {
    padding-block: 10px;
    padding-inline: 15px;
    margin-bottom: 5px;
    cursor: pointer;
    background: #F2F7FF;
    border-radius: 11px;
    cursor: pointer !important;
}


.dropdownitems:hover {
    background: #F2F7FF;
    border-radius: 11px;
    cursor: pointer !important;
}

.timeTitleContainer1 {
    margin-inline: 15px;
    padding-block: 15px;

    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer !important;
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