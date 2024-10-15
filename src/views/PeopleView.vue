<script setup lang="ts">
import UserCardInfo from '@/components/custom-dropdown/userCardInfo.vue';
import image1 from '@/assets/icons/eye.svg'
import image2 from '@/assets/icons/ban.svg'
import image3 from '@/assets/icons/edit.svg'


const userList = [
    {
        title: 'Users'
    },
    {
        title: 'Managers'
    },
    {
        title: 'Trainers'
    },

]
const data = [
    {
        name: 'John Doe',
        userRole: 'manager',
        rank: 24,
        totalPoints: 200,
        strongTopic: 'Topic A',
        weakTopic: 'Topic B'

    },
    {
        name: 'John Doe',
        userRole: 'Trainer',
        rank: 24,
        totalPoints: 200,
        strongTopic: 'Topic A',
        weakTopic: 'Topic B'

    },
    {
        name: 'John Doe',
        userRole: 'Trainer',
        rank: 24,
        totalPoints: 200,
        strongTopic: 'Topic A',
        weakTopic: 'Topic B'

    },

    {
        name: 'John Doe',
        userRole: 'Trainer',
        rank: 24,
        totalPoints: 200,
        strongTopic: 'Topic A',
        weakTopic: 'Topic B'

    },
    {
        name: 'John Doe',
        userRole: 'manager',
        rank: 24,
        totalPoints: 200,
        strongTopic: 'Topic A',
        weakTopic: 'Topic B'

    },
    {
        name: 'John Doe',
        userRole: 'manager',
        rank: 24,
        totalPoints: 200,
        strongTopic: 'Topic A',
        weakTopic: 'Topic B'

    },
    {
        name: 'John Doe',
        userRole: 'manager',
        rank: 24,
        totalPoints: 200,
        strongTopic: 'Topic A',
        weakTopic: 'Topic B'

    },
    {
        name: 'John Doe',
        userRole: 'manager',
        rank: 24,
        totalPoints: 200,
        strongTopic: 'Topic A',
        weakTopic: 'Topic B'

    },
]
const items = [
    {
        title: 'View',
        value: 'View',
        imageurl: image1

    },
    {
        title: 'Edit',
        value: 'Edit',
        imageurl: image3
    },
    {
        title: 'Deactivate',
        value: 'Deactivate',
        imageurl: image2
    },

]
</script>

<template>
    <main class="module-container">
        <div class="title-container">
            <p class="title">People</p>
            <div elevation="0" class="btn-download">

                <p>Create User </p>
                <img src="../assets/icons/report.svg" alt="" width="22" height="22" />
            </div>

        </div>

        <div class="gridList">
            <UserCardInfo v-for="(x, i) in userList" :key="i" :title="x.title" />
        </div>

        <div class="tableContainer1">
            <div class="searchComp">
                <img src="../assets/icons/search_24px.svg" alt="" />
                <input placeholder="Search" type="text" />
            </div>

            <div class="tableContainer">
                <table>
                    <thead>
                        <tr>
                            <th>
                                Name
                            </th>
                            <th>
                                User Role
                            </th>
                            <th>
                                Total Point
                            </th>

                            <th>
                                Strong Topic
                            </th>
                            <th>
                                Weak Topic
                            </th>
                            <th>
                                Rank
                            </th>
                            <th>

                            </th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr v-for="item in data" :key="item.name">
                            <td>{{ item.name }}</td>
                            <td>{{ item.userRole }}</td>
                            <td>{{ item.totalPoints }}</td>
                            <td>{{ item.strongTopic }}</td>
                            <td>{{ item.weakTopic }}</td>
                            <td>{{ item.rank }}</td>
                            <td>
                                <div>
                                    <v-menu>
                                        <template v-slot:activator="{ props }">
                                            <div v-bind="props" class="menuP">
                                                <img src="../assets/icons/more-vertical.svg" alt=" " />
                                            </div>
                                        </template>
                                        <v-list>
                                            <v-list-item v-for="(item, index) in items" :key="index" :value="index">
                                                <v-list-item-title class="listTitle">
                                                    <img :src="item.imageurl" alt="" />
                                                    {{
                                                        item.title
                                                    }}</v-list-item-title>
                                            </v-list-item>
                                        </v-list>
                                    </v-menu>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

        </div>


    </main>

</template>

<style lang="css" scoped>
.module-container {
    display: grid;
    gap: 24px;
    width: 100%;

}

.listTitle {
    display: flex;
    justify-items: space-between;
    align-items: center;
    gap: 4px;
    color: #000000;
    font-weight: 400;
    font-size: 12px;
    line-height: 20px;
}

.menuP {
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
}


table {
    border-collapse: collapse;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
    overflow: hidden;
    border-style: hidden;
    /* border-bottom: 2px solid red; */
    width: 100%;
    min-width: 700px;


}


.tableContainer1 {
    overflow: scroll !important;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;


}


.tableContainer {
    overflow-x: auto !important;
    min-width: 700px !important;
    width: 100%;

}

table th {

    background: #1B59F8;
    color: #ECEFFE;
    text-align: start !important;

    padding-inline: 16px;
    padding-block: 12px;
    border-left: 2px solid #e4e7f5;


}

table td {
    /* border-bottom: 2px solid red; */
    text-align: start;
    padding: 12px;

}

tr:nth-child(even),
tr:nth-child(odd) {
    background: white;
    border-bottom: 1px solid #ECEFFE;
}

tr:nth-child(even):hover,
tr:nth-child(odd):hover {
    background: #F3F4F6;
}


.searchComp {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    border: 1px solid #b8b8ba;
    margin-block: 20px;
    padding: 12px;
    width: 60%;

}

.searchComp input {
    border: none !important;
    width: 100%;
    outline: hidden !important;
    /* height: 30px; */

    box-shadow: none !important;

    background: transparent;
}

*:focus {
    outline: none; 
 } 

.title-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 24px;
    border-bottom: 1px solid #0000001A;
}

.btn-download {
    display: flex;
    justify-content: end;
    align-items: center;
    gap: 10px !important;
    cursor: pointer;
    background: #ECEFFE;
    padding-inline: 24px;
    padding-block: 12px;
    border-radius: 20px;

}

.btn-download:hover {
    background: #c1cff4;


}

.btn-download p {
    font-weight: 600;
    color: #1B59F8;
    text-transform: capitalize !important;
}

.gridList {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 24px;
}

@media (max-width: 1024px) {
    .gridList {
    display: grid;
    grid-template-columns: repeat(1, minmax(0, 1fr));
    gap: 24px;
}
.tableContainer1 {
    overflow: scroll !important;
    width: 100%;
    display: block;
   


}
.searchComp{
    display: none !important
}
}
</style>