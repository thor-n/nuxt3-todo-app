<!-- filepath: /d:/Propelcom/test-vs-copilot/nuxt3-todo-app/components/TodoItem.vue -->
<template>
  <li class="flex justify-between items-center p-2 border-b border-gray-200">
    <span :class="{ 'line-through': todo.done }">{{ todo.text }}</span>
    <div>
      <button v-if="!todo.done" @click="$emit('done', todo.id)" class="text-green-500 hover:text-green-700 mr-2">Done</button>
      <button v-else @click="$emit('undone', todo.id)" class="text-yellow-500 hover:text-yellow-700 mr-2">Undone</button>
      <button @click="$emit('remove', todo.id)" class="text-red-500 hover:text-red-700">Remove</button>
    </div>
  </li>
</template>

<script setup lang="ts">
defineProps<{ todo: { id: string, text: string, done: boolean } }>()
</script>

<style scoped>
/* Add your styles here */
</style>