<template>
  <div
    class="item-container">
    <div class="icon-label" :class="{ done: isDone }">
      <v-icon
        @click="$emit('onClickItem')"
        class="icon mr-5"
        :color="isDone ? gray : 'success'"
        icon="mdi-check-circle"
        size="large" />
      {{ todoName }}
    </div>
    <v-icon
      @click="this.$emit('onDelete')"
      class="icon delete-icon"
      color="red"
      icon="mdi-delete"
      size="small" />
  </div>
</template>

<script>
  export default {
    props: {
      todoName: {
        type: String,
        required: true,
      },
      isDone: {
        type: Boolean,
        required: true,
      }
    },
  };
</script>
<style scoped>
  .item-container {
    border: solid #d2d2d2 1px;
    padding: 10px;
    border-radius: 10px;
    font-weight: 600;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .icon-label {
    font-size: 12px;
    color: #000;
  }

  .delete-icon {
    display: none;
  }
  .done {
    color: gray;
    text-decoration: line-through;
  }

  .item-container:hover {
    background-color: rgb(208, 201, 201);
  }

  .item-container:hover .delete-icon {
    display: block;
  }
</style>
