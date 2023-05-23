<template>
    <div class="card-box">
        <div v-for="{ key, label, content } in filterParamsComputed" :key="key" class="main">
            <div class="leftCard">
                <div class="leftTitle">
                    {{ label }}
                </div>
            </div>
            <div class="rightCard">
                <el-check-tag
                    style="margin: 8px"
                    v-for="{ key: tagKey, value } in (content as { key: string; value: string; })"
                    :key="tagKey"
                    :checked="tagKey === filterForm[key]"
                    @click="filterForm[key] = tagKey"
                >
                    {{ value }}
                </el-check-tag>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
interface paramsType {
    label: string
    key: string
    content: Record<string, string>
}
const props = defineProps<{
    filterParams: paramsType[]
    filterForm: Record<number, string>
}>()
const filterParamsComputed = computed(() => {
    return props.filterParams.map((item) => {
        if (Array.isArray(item.content)) {
            return item
        } else {
            return {
                ...item,
                content: Object.keys(item.content as Record<string, string>).map((index) => {
                    return {
                        key: index,
                        value: (item.content as Record<string, string>)[index]
                    }
                })
            }
        }
    })
})
</script>

<style lang="scss" scoped>
.card-box {
    display: flex;
    flex-direction: column;
    width: 100%;
    border-radius: 3px;
    border: 1px solid gray;
    .main {
        display: flex;
        flex-direction: row;
        .leftCard {
            width: 12%;
            background-color: #f4f5f9;
            display: flex;
            flex-direction: column;
            padding-left: 20px;
            justify-content: flex-start;
            font-size: 10px;
            .leftTitle {
                height: 40px;
                font-size: 14px;
                line-height: 40px;
                font-size: 14px;
                color: #606266;
                letter-spacing: 0;
                font-weight: 400;
            }
        }

        .rightCard {
            display: flex;
            flex-direction: row;
            line-height: 40px;
        }
    }
}
</style>
