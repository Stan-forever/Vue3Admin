<template>
    <div class="tab-box">
        <div class="tab-menu">
            <el-tabs v-model="tabsValue" type="card" @tab-click="tabClick" @tab-remove="tabRemove">
                <el-tab-pane
                    v-for="item in tabsList"
                    :key="item.path"
                    :label="item.title"
                    :name="item.path"
                    :closable="item.close"
                >
                </el-tab-pane>
            </el-tabs>
            <MoreButtons></MoreButtons>
        </div>
    </div>
</template>
<script lang="ts" setup>
import { ref, watch, computed } from 'vue'

import { TabsPaneContext } from 'element-plus'
import MoreButtons from './components/MoreButtons.vue'

import { useRoute, useRouter } from 'vue-router'
import { TabsStore } from '@/store/modules/tabs'

const route = useRoute()
const router = useRouter()
const tabsStore = TabsStore()

const tabsValue = ref(route.fullPath)
const tabsList = computed(() => tabsStore.tabsMenuList)

const tabRemove = (path: string) => {
    tabsStore.removeTabs(path, route.fullPath === path)
}

// Tab Click
const tabClick = (tabItem: TabsPaneContext) => {
    const fullPath = tabItem.props.name as string
    router.push(fullPath)
}
watch(
    () => route.fullPath,
    () => {
        console.log('fullPath')

        tabsValue.value = route.fullPath
        const tabsParams = {
            icon: route.meta.icon as string,
            title: route.meta.title as string,
            path: route.fullPath,
            name: route.name as string,
            close: !route.meta.isAffix
        }
        tabsStore.addTabs(tabsParams)
    },
    {
        immediate: true
    }
)
</script>
<style lang="scss" scoped>
/* .demo-tabs > .el-tabs__content {
    padding: 32px;
    color: #6b778c;
    font-size: 32px;
    font-weight: 600;
} */
@import './index.scss';
</style>
