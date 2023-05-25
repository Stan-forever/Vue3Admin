<template>
    <div class="table-main">
        <el-table :data="tableData" border style="width: 100%">
            <el-table-column prop="date" label="Date" width="180" />
            <el-table-column prop="name" label="Name" width="180" />
            <el-table-column prop="address" label="Address" />
        </el-table>
        <el-pagination
            v-model:current-page="computedCurrentPage"
            v-model:page-size="computedPageSize"
            background
            :layout="paginationLayout"
            :total="total"
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
        />
    </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue'

const props = defineProps({
    tableData: {
        type: Array
    },
    paginationLayout: {
        type: String,
        default: 'total, prev, pager, next, sizes, jumper'
    },
    total: {
        type: Number
    },
    currentPage: {
        type: Number,
        default: 1
    },
    pageSize: {
        type: Number,
        default: 10
    }
})
const computedCurrentPage = computed(() => {
    return props.currentPage
})
const computedPageSize = computed(() => {
    return props.pageSize
})
const emit = defineEmits<{
    (e: 'handleSizeChange', value: number): void
    (e: 'handleCurrentChange', value: number): void
}>()
const handleSizeChange = () => {
    emit('handleSizeChange', 1)
}
const handleCurrentChange = () => {
    emit('handleCurrentChange', 1)
    console.log('back')
}
</script>
