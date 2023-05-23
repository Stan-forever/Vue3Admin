<template>
    <template v-for="subItem in menuList" :key="subItem.path">
        <el-sub-menu v-if="subItem.children && subItem.children.length > 0" :index="subItem.path">
            <template #title>
                <span>{{ subItem.meta.title }}</span>
            </template>
            <SubMenu :menuList="subItem.children"></SubMenu>
        </el-sub-menu>
        <el-menu-item v-else :index="subItem.path" @click="handleClickMenu(subItem)">
            <template #title>
                <span>{{ subItem.meta.title }}</span>
            </template>
        </el-menu-item>
    </template>
</template>

<script setup lang="ts">
import { AuthStore } from '@/store/modules/auth'

import { onMounted } from 'vue'
import { useRouter } from 'vue-router'

const props = defineProps<{ menuList: Menu.MenuOptions[] }>()

const router = useRouter()
const authStore = AuthStore()
const handleClickMenu = (subItem: Menu.MenuOptions) => {
    if (subItem.meta.isLink) return window.open(subItem.meta.isLink, '_blank')

    router.push(subItem.path)
}
onMounted(() => {
    // console.log('menuList', authStore.authMenuList)
})
</script>
