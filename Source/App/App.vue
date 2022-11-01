<template>
  <h1>Vue and Pinia Application</h1>
  <h2>{{message}}</h2>

  <form @submit.prevent="AddTaskToList">
    <input type="text" v-model="InputTask" />
    <button>Add</button>
  </form>

  <p>The pending tasks are: </p>
  <ul>
    <li v-for="(item, index) in AppStore.Tasks" :key="index">
      {{ item }}
      <button
        @click="cart.removeItem(item.name)"
        type="button"
      >X</button>
    </li>
  </ul>

</template>

<script>
  import { useAppStore } from './AppStore'
  import { mapStores } from 'pinia'
  
  export default {
    name: 'VueApp',
    props: {
      message: String,
    },
    data() {
      return {
        InputTask: '',
      };
    },
    computed: {
      ...mapStores(useAppStore)
    },
    methods: {
      AddTaskToList() {
        if(!!this.InputTask && !this.AppStore.Tasks.includes(this.InputTask)){
          this.AppStore.AddTask(this.InputTask);
          this.InputTask = '';
        }
      }
    }
  }
</script>