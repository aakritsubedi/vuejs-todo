<template>
  <div>
    <ToDo v-bind:todos="todo"/>
  </div>
</template>

<script>
import ToDo from './components/ToDo'

export default {
  name: 'app',
  components: {
    ToDo
  },
  data(){
    return {
      todo: [
        { id: 1, title: 'Complete Vue Crash Course', status: false, created_at: Date.now(), updated_at: Date.now() },
        { id: 2, title: 'Complete 3Star Hotel Website', status: false, created_at: Date.now(), updated_at: Date.now()},
        { id: 3, title: 'Complete EJ-Note Website', status: false, created_at: Date.now(), updated_at: Date.now()}
      ]
    }
  }
}
</script>

<style>

</style>
