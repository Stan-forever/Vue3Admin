<template>
    <div class="custom-tree-container">
        <el-tree
            :data="dataSource"
            node-key="id"
            ref="treeRef"
            default-expand-all
            :expand-on-click-node="false"
            @node-contextmenu="nodeContextMenu"
        >
            <template #default="{ node, data }">
                <ContextMenu
                    :contextMenuOptions="contextMenuOptions(data)"
                    :visible="data.id === currentTreeId"
                >
                    <template #reference>
                        <div v-click-outside="closeContextMenu" class="custom-tree-node">
                            <div :draggable="true" @dragend="treeNodeDrag(data)">
                                {{ node.label }}
                            </div>
                        </div>
                    </template>
                </ContextMenu>
            </template>
        </el-tree>
    </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { ClickOutside as vClickOutside } from '@/components/index'
import ContextMenu from '@/components/ContextMenu/index.vue'
interface Tree {
    id: number
    pid: number
    label: string
    children?: Tree[]
}

const dataSource = ref<Tree[]>([
    {
        id: 1,
        pid: 0,
        label: 'Level one 1',
        children: [
            {
                id: 4,
                pid: 1,

                label: 'Level two 1-1',
                children: [
                    {
                        id: 9,
                        pid: 4,

                        label: 'Level three 1-1-1'
                    },
                    {
                        id: 10,
                        pid: 4,

                        label: 'Level three 1-1-2'
                    }
                ]
            }
        ]
    },
    {
        id: 2,
        pid: 0,
        label: 'Level one 2',
        children: [
            {
                id: 5,
                pid: 2,
                label: 'Level two 2-1'
            },
            {
                id: 6,
                pid: 2,

                label: 'Level two 2-2'
            }
        ]
    },
    {
        id: 3,
        pid: 0,

        label: 'Level one 3',
        children: [
            {
                id: 7,
                pid: 3,

                label: 'Level two 3-1'
            },
            {
                id: 8,
                pid: 3,

                label: 'Level two 3-2'
            }
        ]
    }
])
// interface contextMenuType {
//     label: string
//     visible: boolean
//     onClick: () => void
// }
const contextMenuOptions = (data: any) => {
    return [
        {
            label: '新建',
            visible: true,
            onClick: () => {
                console.log(1)
            }
        },
        {
            label: '编辑',
            visible: data.pid != 0,
            onClick: () => {
                console.log(2)
            }
        },
        {
            label: '删除',
            visible: data.pid != 0,

            onClick: () => {
                console.log(3)
            }
        }
    ]
}

const currentTreeId = ref('')
const treeNodeDrag = (data) => {}
const treeRef = ref(null)
const nodeContextMenu = (event, data) => {
    currentTreeId.value = data.id
}
const closeContextMenu = () => {
    currentTreeId.value = ''
}
</script>

<style lang="scss" scoped>
.custom-tree-node {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 14px;
    padding-right: 8px;
}
:deep(.el-tree) {
    height: 100%;
    overflow: auto;
    border-radius: 5px;
    .el-tree-node__content {
        height: 33px;
    }
}
</style>
