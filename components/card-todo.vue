<template>
  <h1 class="text-center text-h2">Vue ToDo List</h1>
  <v-card
    class="container my-5 rounded-0"
    height="100%"
    max-height="290"
    width="100%"
    max-width="600">
    <v-row no-gutters class="py-3">
      <div class="btn-container pr-3">
        <TodoBtn
          :hasSuffix="true"
          btnLabel="Tasks"
          :btnLabelCount="todo.length"/>
        <TodoBtn
          :hasSuffix="true"
          btnLabel="Tasks Done"
          :btnLabelCount="doneTodo.length" />
        <TodoBtn
          v-if="doneTodo.length"
          :isRounded="false"
          :isDanger="true"
          :hasIcon="true"
          @onClick="removeDoneTodoHandler"
          btnLabel="Tasks Done" />
        <TodoBtn
          @onClick="clearTodo"
          :isRounded="false"
          :hasIcon="true"
          :isDanger="true"
          btnLabel="Tasks" />
      </div>
    </v-row>
    <div class="list-container px-5 py-5">
      <transition-group class="items" name="list" tag="ul"
        v-if="todo.length"
        >
        <li class="item py-1" v-for="item in todo" :key="item.id">
          <TodoItem
            :isDone="item.status.done"
            :todoName="item.name"
            @onDelete="deleteTodoHandler(item.id)"
            @onClickItem="setTodoDoneHandler(item.id)" />
        </li>
      </transition-group>
      <span v-else class="no-todo-label text-center">No more ToDo</span>
    </div>
    <TodoForm @onSubmit="addTodoHandler" />
  </v-card>
</template>

<script>
  export default {
    computed: {
      todo() {
        return this.$store.state.todo;
      },
      doneTodo() {
        return this.$store.state.todo.filter(item => item.status.done);
      }
    },
    methods: {
      addTodoHandler(val) {
        this.$store.dispatch('addNewTodo', val);
      },
      setTodoDoneHandler(id) {
        this.$store.dispatch('updateTodoStatus', id);
      },
      removeDoneTodoHandler() {
        this.$store.dispatch('removeDoneTodo');
      },
      clearTodo() {
        this.$store.dispatch('clearTodo');
      },
      deleteTodoHandler(id) {
        this.$store.dispatch('deleteTodo', id);
      }
    },
  }
</script>

<style scoped>
  .container {
    background-size: 5px 5px;
    background-image: 
      linear-gradient(45deg, #e9eaea 25%, transparent 25%, transparent 75%, #e9eaea 75%, #e9eaea),
      linear-gradient(45deg, #e9eaea 25%, transparent 25%, transparent 75%, #e9eaea 75%, #e9eaea);
    background-position: 0 0, 10px 10px;
    background-color: #fff;
  }
  h1 {
    color: #fff;
  }
  .list-container {
    height: 170px;
    overflow: auto;
    display: flex;
    gap: 10px;
    flex-direction: column;
    background-color: #fff;
  }
  .btn-container {
    display: flex;
    justify-content: flex-end;
    gap: 10px;
  }
  .items { 
    list-style: none;
  }
.list-enter-active {
  animation: fade-in 0.5s ease-in-out;
}

.list-leave-active {
  animation: fade-in 0.5s ease-in-out reverse;
}

@keyframes fade-in {
  0% {
    opacity: 0;
    transform: translateX(30px);
  }
  100% {
    transform: translateX(0px);
  }
}
  .no-todo-label {
    color: grey;
    font-size: 14px;
    font-weight: 700;
  }
</style>