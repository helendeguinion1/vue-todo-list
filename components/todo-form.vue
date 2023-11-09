<template>
  <div class="form-container mt-3">
    <div class="inner">
      <input
        @keyup.enter="onSubmit"
        v-model="task"
        type="text"
        placeholder="New Task">
      <v-icon
        @click="onSubmit"
        icon="mdi-plus-circle"
        color="#3371b5"
        size="large">
      </v-icon>
    </div>
  </div>
</template>

<script>
  export default {
    data: () => ({
      task: '',
    }),
    methods: {
      onSubmit() {
        this.$emit('onSubmit', this.task);
        this.task = '';
      },
    },
  };
</script>
<style scoped>
  .form-container {
    display: flex;
    justify-content: center;
  }
  .inner {
    display: flex;
    border: solid #3371b5 2px;
    padding: 5px;
    background-color: #fff;
    border-radius: 20px;
    width: 93%;
  }
  input {
    padding: 5px;
    outline: none;
    font-size: 14px;
  }
</style>