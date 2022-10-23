<script setup>
const props = defineProps({remaining:Number})
const emit = defineEmits(["removeComplete"])

const handleRemoveComplete=()=>{
    emit("removeComplete")
}
</script>
<template>
  <div class="mt-3 d-flex justify-content-between">
                    <strong class=" me-3">尚有 {{props.remaining}} 個工作未完成</strong>
                    <button @click="handleRemoveComplete" class="btn btn-warning me-3">清除完成工作</button>
                </div>
</template>
<style scoped>
</style>