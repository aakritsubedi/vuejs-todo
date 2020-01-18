<template>
    <button @click= "$emit('display-form')">{{title}}</button>
</template>

<script>
export default {
    name: "Button",
    props: ['title']
}
</script>

<style>

</style>