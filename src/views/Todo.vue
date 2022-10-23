<script setup>
import TodoList from '../components/TodoList.vue';
import TodoFooter from '../components/TodoFooter.vue';
import { computed, reactive, ref, watch } from 'vue';

const newTodo = ref('')

// const todos = reactive({
//   "data":[
//     {"id":1, "title":"Homework1", "completed":false},
//     {"id":2, "title":"Homework2", "completed":true},
//     {"id":3, "title":"Homework3", "completed":false},
//   ]
// })
//從localStorage中讀出資料
const todos = reactive({"data": JSON.parse(localStorage.getItem("todos")||"[]")})


//新增Todo
const addTodo = ()=>{
  if(!newTodo.value){
    return
  }
  todos.data.push( {"id": todos.data.length + 1, "title":newTodo.value, "completed":false})
  newTodo.value = ''
}

//從子組件傳遞要刪除的todo到父組件
const removeTodo = todo => {
   const index = todos.data.indexOf(todo)
   todos.data.splice(index,1)
}

//將資料儲存到localStorage
watch(todos,(newTodos, oldTodos)=>{
  localStorage.setItem("todos", JSON.stringify(newTodos.data))
},{deep:true})

const remaining = computed(()=>{
  let activeTodos = todos.data.filter(todo => !todo.completed)
  return activeTodos.length
})
//移除所有完成工作
const removeComplete = ()=>{
  for(let i=todos.data.length -1 ;i>=0;i-=1){
      if(todos.data[i].completed){
        todos.data.splice(i,1)
      }
  }
}

</script>

<template> 
  <h3>Todo Page</h3>  
  <input v-model.trim="newTodo" @keyup.enter="addTodo" type="text" class="form-control" autofocus autocomplete="off" placeholder="想要做甚麼?">
  <TodoList :todos="todos.data" @removeTodo="removeTodo"></TodoList>
  <TodoFooter :remaining="remaining" @removeComplete="removeComplete"></TodoFooter>
 </template>

<style scoped>
</style>