<template>
    <el-dropdown trigger="click">
        <el-button type="primary" size="small">
            更多<el-icon class="el-icon--right"><arrow-down /></el-icon>
        </el-button>
        <template #dropdown>
            <el-dropdown-menu>
                <el-dropdown-item>刷新</el-dropdown-item>
                <el-dropdown-item>最大化</el-dropdown-item>
                <el-dropdown-item @click="closeCurrent">关闭当前</el-dropdown-item>
                <el-dropdown-item @click="closeOthers">关闭其他</el-dropdown-item>
                <el-dropdown-item @click="closeAll"> 关闭所有</el-dropdown-item>
            </el-dropdown-menu>
        </template>
    </el-dropdown>
</template>

<script lang="ts" setup>
import { ArrowDown } from '@element-plus/icons-vue'
import { useRoute } from 'vue-router'
import { TabsStore } from '@/store/modules/tabs'
import router from '@/router'
import { HOME_URL } from '@/config/config'

const route = useRoute()
const tabsStore = TabsStore()

const closeCurrent = () => {
    console.log('route', route)
    if (route.meta.isAffix) return
    tabsStore.removeTabs(route.fullPath, true)
}
const closeOthers = () => {
    tabsStore.removeMultipleTabs(route.fullPath)
}
const closeAll = () => {
    tabsStore.removeMultipleTabs()
    router.push(HOME_URL)
}
</script>
<style scoped>
.example-showcase .el-dropdown + .el-dropdown {
    margin-left: 15px;
}
.example-showcase .el-dropdown-link {
    cursor: pointer;
    color: var(--el-color-primary);
    display: flex;
    align-items: center;
}
</style>
