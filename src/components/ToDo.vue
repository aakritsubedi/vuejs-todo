<template>
    <div class="app">
        <span class="app-title">ToDo Application</span>
        <hr>
        <ul v-bind:key="todo.id" v-for="todo in todos">
            <ToDoItem v-bind:todo="todo"/>
        </ul>
    </div>
</template>

<script>
import ToDoItem from './ToDoItem';

export default {
    name: 'ToDo',
    props: ["todos"],
    components: {
        ToDoItem
    }
}
</script>

<style scoped>
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    .app{
        width: 40%;
        height: 97vh;
        margin: 0 auto;
        padding: 0px 10px;
        border: 1px solid #000000;
    }
    .app-title{
        font-size: 30px;
        line-height: 40px;
        font-weight: bold;
    }
</style>