<template>
  <li class="item clearfix" v-bind:class="{'is-completed':todo.status}">
    <button class="delete-btn"  @click="$emit('del-todo', todo.id)">Delete</button>
    <input type="checkbox" v-on:change="toggleStatus" />
    <span class="todo-title">{{todo.title}}</span>
    
    <span class="float-right">
      <span class="todo-date">&#128337; {{ date(todo.created_at)}}</span>
    </span>

  </li>
</template>

<script>
export default {
  name: "ToDoItem",
  props: ["todo"],
  methods: {
    toggleStatus() {
      this.todo.status = !this.todo.status;
    },
    date(timestamp) {
      let day = new Date(timestamp).getDate();
      day = day < 9 ? "0" + day : day;
      let month = new Date(timestamp).getMonth() + 1;
      month = month < 9 ? "0" + month : month;
      const year = new Date(timestamp).getFullYear();
      const date = day + "/" + month + "/" + year;

      return date;
    }
  }
};
</script>

<style scoped>
.items {
  list-style: none;
}
.item {
  margin: 8px 0;
  padding: 8px 10px;
  font-size: 18px;
  line-height: 22px;
  background-color: #f4f4f4;
  border-bottom: 1px solid #f4f4f4;
}
.item:hover {
  background-color: #7cec9f;
  border-bottom: 1px solid #000000;
}
.todo-title {
  padding: 0 10px;
}
.todo-date {
  font-size: 12px;
}
.is-completed {
  background-color: #7cec9f;
  text-decoration: line-through;
}
.delete-btn{
  border: none;
  font-size: 10px;
  padding: 5px 9px;
  color:  #ffffff;
  margin-right: 5px;
  border-radius: 5%;
  font-weight:  bolder;
  background-color: #ff0000;

}
.clearfix {
  overflow: auto;
}
.clearfix::after {
  content: "";
  clear: both;
  display: table;
}
.float-right {
  float: right;
}
</style>