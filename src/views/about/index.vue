<template>
    <MainContent>
        {{ res }}
        <el-button @click="addNum1">add(num1)</el-button>
        <el-button @click="addNum2">add(num2)</el-button>
        <el-button @click="add">add</el-button>
    </MainContent>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
const num1 = ref(1)
const num2 = ref(2)
const res = ref(0)
const addNum1 = () => {
    num1.value += 2
}
const addNum2 = () => {
    num2.value += 3
}
const add = () => {
    res.value = num1.value + num2.value
}
watch(
    () => [num1.value, num2.value, res.value],
    () => {
        console.log('change!')
    }
)
</script>

<style scoped></style>
