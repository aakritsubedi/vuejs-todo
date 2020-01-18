<template>
  <div class="add-form">
    
    <div>
      <label for="title">Title: </label>
      <input type="text" name="title" placeholder="Enter Title"/>
    </div>
    <div>
      <input type="text" name="status" value="false" />
      <input type="text" name="created_at" value="123" />
      <input type="text" name="updated_at" value="123" />
    </div>
    <div>
      <input type="submit" value="Add">
    </div>
  </div>
</template>

<script>
export default {
  name: "AddForm"
};
</script>

<style scoped>
.add-form {
  width: 30%;
  /* display: none; */
  border: 1px solid #f4f4f4;
}
input[type=text] {
  width: 100%;
  height: 25px;
  margin-bottom: 5px;
}
input[type=submit]{
  border: none;
  padding: 3px 6px;
  font-size: 18px;
  line-height: 25px;
  border-radius: 5px;
  background-color: #26ae60;
}
</style>