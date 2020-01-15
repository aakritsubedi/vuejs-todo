<template>
  <div class="app">
    <Header />
    <ToDo v-bind:todos="todo" v-on:del-todo= "deleteToDo" />
    <Button class="todo-add-btn" title='Add ToDo'/>
    <AddForm class="todo-add-form" />
  </div>
</template>

<script>
import ToDo from "./components/ToDo";
import Button from './components/Button';
import AddForm from './components/AddForm';
import Header from "./components/layout/Header";

export default {
  name: "app",
  components: {
    ToDo,
    Header,
    AddForm,
    Button
  },
  data() {
    return {
      todo: [
        {
          id: 1,
          title: "Complete Vue Crash Course",
          status: false,
          created_at: Date.now(),
          updated_at: Date.now()
        },
        {
          id: 2,
          title: "Complete 3Star Hotel Website",
          status: false,
          created_at: Date.now(),
          updated_at: Date.now()
        },
        {
          id: 3,
          title: "Complete EJ-Note Website",
          status: false,
          created_at: Date.now(),
          updated_at: Date.now()
        },
        {
          id: 4,
          title: "Complete Vue ToDo App",
          status: false,
          created_at: Date.now(),
          updated_at: Date.now()
        }
      ]
    };
  },
  methods: {
    deleteToDo(id) {
      
      this.todos = this.todos.filter(todo => todo.id !== id);
    }
  }
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.app {
  width: 40%;
  height: 97vh;
  margin: 0 10%;
  border: 1px solid #f4f4f4;
}
.todo-add-btn {
  right: 20px;
  top: 5px;
  border: none;
  font-size: 22px;
  padding: 5px 6px;
  position: absolute;
  background-color: #2ecc72;
  box-shadow: 5px 5px 3px 0px rgba(125, 125, 125, 0.75);
}
.todo-add-form {
  right: 20px;
  top: 50px;
  border: none;
  padding: 10px;
  font-size: 22px;
  position: absolute;
  background-color: #f4f4f4;
  box-shadow: 10px 10px 5px 0px rgba(125, 125, 125, 0.75);
}
</style>
