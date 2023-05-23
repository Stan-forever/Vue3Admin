<template>
    <el-popover
        ref="popover"
        :width="200"
        :visible="visible"
        content="this is content, this is content, this is content"
    >
        <template #reference>
            <slot name="reference"></slot>
        </template>
        <template #default>
            <ul>
                <li
                    v-for="(item, index) in filterOptions"
                    :key="index"
                    @click="() => item.onClick()"
                >
                    {{ item.label }}
                </li>
            </ul>
        </template>
    </el-popover>
</template>

<script setup lang="ts">
import { ref, watch, computed } from 'vue'
interface contextMenuType {
    label: string
    visible: boolean
    onClick: () => void
}
const props = defineProps<{
    visible: boolean
    contextMenuOptions: contextMenuType[]
}>()
const filterOptions = computed(() =>
    props.contextMenuOptions.filter((item) => ('visible' in item ? !!item.visible : true))
)

watch(
    () => props.visible,
    () => {
        // console.log('filterOptions', filterOptions)
    }
)
</script>

<style lang="scss" scoped>
ul {
    list-style: none;
    margin: 0;
    padding: 0;
    li {
        padding: 10px;

        cursor: pointer;
        &:hover {
            background-color: var(--el-color-primary-light-9);
            color: var(--el-color-primary-light-3);
        }
    }
}
</style>
<style lang="scss">
.el-popover.el-popper {
    padding: 0;
}
</style>
