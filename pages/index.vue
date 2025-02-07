<!-- filepath: /d:/Propelcom/test-vs-copilot/nuxt3-todo-app/pages/index.vue -->
<template>
  <div class="max-w-md mx-auto mt-10 p-4 bg-white shadow-md rounded-lg">
    <h1 class="text-2xl font-bold mb-4">Todo List</h1>
    <form @submit.prevent="handleSubmit" class="mb-4">
      <input v-model="newTodo" placeholder="Enter a new todo" class="w-full p-2 border border-gray-300 rounded mb-2" />
      <button type="submit" class="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-700">Add Todo</button>
    </form>
    <ul class="list-none p-0">
      <TodoItem v-for="(todo, index) in sortedTodos" :key="index" :todo="todo" @remove="removeTodo" @done="markTodoDone" @undone="markTodoUndone" />
    </ul>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { useTodos } from '@/composables/useTodos'
import TodoItem from '@/components/TodoItem.vue'

const { todos, addTodo, removeTodo, markTodoDone, markTodoUndone } = useTodos()
const newTodo = ref('')

const handleSubmit = () => {
  if (newTodo.value.trim()) {
    addTodo(newTodo.value)
    newTodo.value = ''
  }
}

const sortedTodos = computed(() => {
  return todos.value.slice().sort((a, b) => Number(a.done) - Number(b.done))
})
</script>

<style scoped>
/* Add your styles here */
</style>