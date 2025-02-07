import { ref, onMounted, watch } from 'vue'
import { v4 as uuidv4 } from 'uuid'

export function useTodos() {
  const todos = ref<{ id: string, text: string, done: boolean }[]>([])

  // Load todos from local storage
  const loadTodos = () => {
    if (typeof window !== 'undefined') {
      const storedTodos = localStorage.getItem('todos')
      if (storedTodos) {
        todos.value = JSON.parse(storedTodos)
      }
    }
  }

  // Save todos to local storage
  const saveTodos = () => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('todos', JSON.stringify(todos.value))
    }
  }

  const addTodo = (text: string) => {
    todos.value.push({ id: uuidv4(), text, done: false })
    saveTodos()
  }

  const removeTodo = (id: string) => {
    if (confirm('Are you sure you want to delete this todo?')) {
      todos.value = todos.value.filter(todo => todo.id !== id)
      saveTodos()
    }
  }

  const markTodoDone = (id: string) => {
    const todo = todos.value.find(todo => todo.id === id)
    if (todo) {
      todo.done = true
      saveTodos()
    }
  }

  const markTodoUndone = (id: string) => {
    const todo = todos.value.find(todo => todo.id === id)
    if (todo) {
      todo.done = false
      saveTodos()
    }
  }

  // Load todos on initialization
  onMounted(() => {
    loadTodos()
  })

  // Watch for changes in todos and save to local storage
  watch(todos, saveTodos, { deep: true })

  return { todos, addTodo, removeTodo, markTodoDone, markTodoUndone }
}