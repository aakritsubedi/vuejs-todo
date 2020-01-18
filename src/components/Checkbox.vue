<template>
    <span class="checkbox" v-bind:class="{'checked':status}" v-on:click="$emit('toggle-status')">
        <i v-if="status" class="fa fa-check"></i>
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
        width: 20px;
        height: 20px;
        border-radius: 2px;
        display: inline-block;
        border: 1px solid #000000;
    }
    .checked {
        border: none;
        color: #2ecc72;
        transition: 2s ease-in-out;
    }
</style>