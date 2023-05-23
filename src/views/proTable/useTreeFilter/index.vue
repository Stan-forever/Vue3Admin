<template>
    <div style="width: 100%; height: 100%; display: flex; flex-direction: row">
        <dragTree style="width: 20%; height: calc(100vh - 120px)"></dragTree>
        <MainContent :width="'78%'">
            <el-button @click="handleShow">Open</el-button>
            <CDialog ref="dialogRef"></CDialog>
        </MainContent>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import dragTree from './components/dragTree.vue'
import CDialog from './components/dialog.vue'
interface DialogExpose {
    handleShow: () => void
}
const dialogRef = ref<null | DialogExpose>(null)
const handleShow = () => {
    dialogRef.value?.handleShow()
}
</script>

<style scoped></style>
