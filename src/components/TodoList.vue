<script setup>
import { ref } from 'vue';

const props = defineProps({
    todos:Array
})
const emit = defineEmits(["removeTodo"])
const handleRemove = todo =>{
    //第一個參數引發父組件的removeTodo事件
    //第二個參數是要傳遞到removeTodo事件發生要執行的方法的資料
    emit("removeTodo", todo)
}

const editedTodo = ref(null)
const beforeEditCache = ref('')

const editTodo = todo =>{
    editedTodo.value = todo
    beforeEditCache.value = todo.title
}
const doneEdit = todo =>{
    todo.title = todo.title.trim()
    editedTodo.value = null
}
const cancelEdit = todo =>{
    todo.title = beforeEditCache.value
    editedTodo.value = null
}


</script>
<template>
        <ul class="list-group mt-3">
                    <li v-for="(todo, index) in props.todos" :key="index" class="list-group-item">
                        <div v-if="editedTodo !== todo" class="d-flex justify-content-between">
                            <div>
                                <input v-model="todo.completed" class="form-check-input me-3" type="checkbox">
                                <label @dblclick="editTodo(todo)" :class="{completed:todo.completed}" class="form-check-label">{{ todo.title }}</label>
                            </div>
                            <button @click="handleRemove(todo)" class="badge bg-danger rounded-pill border-0">X</button>
                        </div>
                        <input v-else v-model="todo.title" @blur="doneEdit(todo)" @keyup.enter="doneEdit(todo)" @keyup.escape="cancelEdit(todo)"  type="text" class="form-control">
                    </li>    
                </ul>
</template>
<style scoped>
.completed{
    color:#949494;
    text-decoration:line-through;
}
</style>