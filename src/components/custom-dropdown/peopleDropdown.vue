<script setup lang="ts">
import { reactive, ref, useTemplateRef, watch } from 'vue';
interface dropdownChildren {
    id: number;
    title: string;
    count?: number | undefined;
    group: string

}
interface dropdownItemList {
    id: number;
    category: string;
    categorylist: dropdownChildren[]
}
interface dropdownStateProps {
    selectedItems: dropdownChildren[];
    list: dropdownItemList[];

}
const props = defineProps({
    isPeopleDropdownOpen: {
        type: Boolean,
        required: true,
    },
});

const state: dropdownStateProps = reactive({
    selectedItems: [
        {
            id: 1,
            title: 'All Users  ',
            count: 400,
            group: 'G'

        },
    ],
    list: [
        {
            id: 1,
            category: 'Groups',
            categorylist: [
                {
                    id: 1,
                    title: 'All Users  ',
                    count: 400,
                    group: 'G'

                },
                {
                    id: 2,
                    title: 'Managers   ',
                    count: 14,
                    group: 'G'

                },
                {
                    id: 3,
                    title: 'Trainers     ',
                    count: 4,
                    group: 'G'

                }
            ]
        },
        {
            id: 1,
            category: 'USERS',
            categorylist: [
                {
                    id: 4,
                    title: 'Adrian Lu',
                    group: 'U'
                },
                {
                    id: 5,
                    title: 'Evelyn Hamilton   ',
                    group: 'U'

                },

            ]
        },

    ],

})

const emit = defineEmits(['update:isPeopleDropdownOpen']);
const inputRefTs = useTemplateRef<HTMLDivElement>('inputRef');
const test = ref<dropdownChildren>({
    id: 1,
    title: 'All Users  ',
    count: 400,
    group: 'G'

},
)

const toggleFrameOpen = () => {
    emit('update:isPeopleDropdownOpen', !props.isPeopleDropdownOpen);
};

const handleDropdownClickOutsideTest = (event: MouseEvent) => {
    if (
        inputRefTs.value &&
        !inputRefTs.value.contains(event.target as any)
    ) {
        toggleFrameOpen()
    }
};

watch(() => props.isPeopleDropdownOpen, (newValue) => {

    if (newValue) {
        document.body.addEventListener('mousedown', handleDropdownClickOutsideTest);
    } else {
        document.body.removeEventListener('mousedown', handleDropdownClickOutsideTest);
    }
});


const updateSelectedItems = (categoryItem: dropdownChildren) => {
    const existingItem = state.selectedItems.find(item => item.group === categoryItem.group);

    if (existingItem) {
        const index = state.selectedItems.indexOf(existingItem);
        state.selectedItems[index] = categoryItem;
    } else {

        state.selectedItems.push(categoryItem);
    }

    return state.selectedItems;
}

const handlerRemoveTag = (id: number) => {
    state.selectedItems = state.selectedItems.filter(item => item.id !== id);
}

watch(test, (newValue) => {

    updateSelectedItems(newValue)
});



</script>

<template>
    <div class="">
        <div class="timeTitleContainer1" @click.stop="toggleFrameOpen">
            <p class="timeTitle1">People: <span>{{ state.selectedItems[0]?.title || 'Empty' }}</span> </p>
            <img src="../../assets/icons/caret.svg" alt="" />
        </div>



        <div class="parentClass" ref="inputRef" v-if="props.isPeopleDropdownOpen">
            <div class="test22">
            <div class="firstSection">
                <p class="PeopleT">People: <span>Multiple Selected</span> </p>
                <p class="clear">Clear</p>
            </div>

            <div class="tagContainer">
                <div class="tagParent" v-for="(selectedItemsObj, index) in state.selectedItems" :key="index">
                    <p class="tagName">{{ selectedItemsObj.title }} </p>
                    <p class="cancelTest" @click="handlerRemoveTag(selectedItemsObj.id)">X</p>
                </div>
            </div>

            <div class="searchComp">
                <img src="../../assets/icons/search_24px.svg" alt="" />
                <input placeholder="Search" type="text" />
            </div>

            <div>
                <div class="groupParent" v-for="(listInfo, index) in state.list" :key="index">
                    <p class="group">{{ listInfo.category }}</p>
                    <div class="groupT" v-for="(categoryList, index) in listInfo.categorylist " :key="index">
                        <input type="radio" :value="categoryList" :id="categoryList.title" v-model="test" />
                        <p>{{ categoryList.title }} <span>{{ categoryList.count }}</span></p>
                    </div>
                </div>
            </div>
        </div>

        </div>


    </div>

</template>


<style lang="css" scoped>
.timeTitleContainer1 {
    margin-inline: 15px;
    padding-block: 15px;

    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
}

.tagContainer {
    display: flex;
    justify-content: start;
    align-items: start;
    gap: 10px;
    margin-top: 8px;
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

.firstSection {
    display: flex;
    justify-content: space-between;
    align-items: center;


}

.clear {
    color: #000000B2;
    font-size: 14px;
    line-height: 16px;
    font-weight: 500;
    cursor: pointer;
}

.PeopleT {
    color: #000000B2;
    font-size: 16px;
    line-height: 20px;
    font-weight: 500;
    letter-spacing: -0.3px;
}

.PeopleT span {
    font-family: 600;
}

.parentClass {

    position: absolute;
    top: 0;
    border: 1px solid #EFF0F6;
    background: #FFFFFF;
    border-radius: 20px;
    width: 100%;
    z-index: 1000 !important;
}
.test22{
    padding-block: 10px;
    padding-inline: 18px;
}


.tagParent {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    width: fit-content;
    padding-inline: 12px;
    padding-block: 4px;
    background: #F0F0F0;
    border-radius: 15px;
    margin-block: 10px;

}

.tagName {
    color: #000000;
    font-size: 14px;
    line-height: 18px;
    font-weight: 600;
}

.cancelTest {
    color: #000000B2;
    font-size: 14px;
    line-height: 18px;
    font-weight: 600;
    cursor: pointer;
}

.searchComp {
    display: flex;
    align-items: center;
    gap: 10px;

}

.searchComp input {
    border: none !important;
    width: 100%;
    outline: hidden !important;
    height: 30px;

    box-shadow: none !important;

    background: transparent;
}

*:focus {
    outline: none;
}

.groupParent {
    padding-block: 12px;
    border-top: 1px solid #0000001A;
    display: flex;
    justify-content: start;
    align-items: start;
    flex-direction: column;
    gap: 10px;
}

.group {
    color: #9098A3;
    font-size: 12px;
    line-height: 14px;
    text-transform: uppercase;

}

.groupT {
    color: #000000B2;
    font-size: 14px;
    line-height: 20px;
    font-weight: 500;
    letter-spacing: -0.3px;
    display: flex;
    justify-content: start;
    align-items: center;
    gap: 10px;

}

.groupT span {
    font-family: 400;
    color: #9098A3;
    font-size: 12px
}
</style>