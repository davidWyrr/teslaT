<template>
    <v-data-table
      :headers="headers"
      :items="items"
      class="elevation-1"
    >
      <template v-slot:items="{ item }">
        <tr>
          <td>{{ item.userName }}</td>
          <td>{{ item.totalPoints }}</td>
          <td>{{ item.strongTopic }}</td>
          <td>{{ item.weakTopic }}</td>
          <td>{{ item.rank }}</td>
          <td>{{ item.role }}</td>
          <td>
            <v-icon color="primary">mdi-information</v-icon>
          </td>
        </tr>
      </template>
    </v-data-table>
  </template>
  
  <script lang="ts" setup>
  import { ref } from 'vue';
  
  export default {
    setup() {
      const headers = ref([
        { text: 'User Name', value: 'userName' },
        { text: 'Total Points', value: 'totalPoints' },
        { text: 'Strong Topic', value: 'strongTopic' },
        { text: 'Weak Topic', value: 'weakTopic' },
        { text: 'Rank', value: 'rank' },
        { text: 'Role', value: 'role' },
        { text: 'Action', value: 'action' }
      ]);
  
      const items = ref([
        {
          userName: 'John Doe',
          totalPoints: 100,
          strongTopic: 'Math',
          weakTopic: 'Science',
          rank: 1,
          role: 'Student'
        },
        // Add more items here
      ]);
  
      return {
        headers,
        items
      };
    }
  };
  </script>