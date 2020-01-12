<template>
    <li  class="item clearfix" v-bind:class="{'is-completed':todo.status}">
        <input type="checkbox" v-on:change="()=>toggleStatus(todo.id)">
        <span class="todo-title">{{todo.title}}</span>
        <span class="float-right">&#128337; {{ date(todo.created_at)}}</span>
    </li>
</template>

<script>
export default {
    name: "ToDoItem",
    props: ["todo"],
    methods: {
        // toggleStatus(id){
        //     // this.todos.forEach(item => {
        //     //     // if(item.id === id){
        //     //     //     this.todos[item.id-1].status = !this.todos[item.id-1].status;
        //     //     // }
        //     // });
        // },
        date(timestamp){
            let day = new Date(timestamp).getDate();
            day = day<9 ? '0'+day : day;
            let month = new Date(timestamp).getMonth()+1;
            month = month<9 ? '0'+month : month;
            const year = new Date(timestamp).getFullYear();
            const date = day+'/'+month+'/'+year;

            return date;
        }
    }
}
</script>

<style scoped>
    .items{
        list-style: none;
    }
    .item{
        margin: 8px 0;
        padding: 8px 10px;
        font-size: 18px;
        line-height: 22px;
        background-color: #f4f4f4;
        border-bottom: 1px solid #f4f4f4;
    }
    .item:hover{
        background-color: #7CEC9F;
        border-bottom: 1px solid #000000;
    }
    .todo-title{
        padding:0 10px;
    }
    .is-completed{
        background-color: #7CEC9F;
        text-decoration: line-through;
    }
    .clearfix {
        overflow: auto;
    }
    .clearfix::after {
        content: "";
        clear: both;
        display: table;
    }
    .float-right{
        float: right;
    }
</style>