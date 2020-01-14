<template>
  <ul>
    <div v-bind:key="todo.id" v-for="todo in todos">
      <ToDoItem v-bind:todo="todo" v-on:del-todo="$emit('del-todo', todo.id)" />
    </div>
  </ul>
</template>

<script>
import ToDoItem from "./ToDoItem";

export default {
  name: "ToDo",
  props: ["todos"],
  components: {
    ToDoItem
  }
};
</script>
