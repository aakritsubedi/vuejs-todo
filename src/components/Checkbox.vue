<template>
    <span class="checkbox" v-bind:class="{'checked':status}" v-on:click="$emit('toggle-status')">
        <i v-if="status" class="fa fa-check-double"></i>
    </span>
</template>

<script>
export default{
    name: "Checkbox",
    props: ['status']
}
</script>

<style scoped>
    .checkbox {
        width: 15px;
        height: 15px;
        border-radius: 2px;
        display: inline-block;
        border: 1px solid #000000;
    }
    .checked {
        background-color: #00ff00;
    }
</style>