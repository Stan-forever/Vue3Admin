<template style="back">
    <div style="background-color: white; height: 95%; padding: 10px">
        <div>home</div>
        <el-button @click="handleLoginOut">退出登录</el-button>
        <el-button @click="jump">jump</el-button>
        <el-button @click="testFn">test</el-button>
        <div>num:{{ realNum }}</div>
        <el-button @click="add">add</el-button>
        <el-form>
            <el-form-item>
                <el-input></el-input>
            </el-form-item>
            <el-form-item> el-select </el-form-item>
        </el-form>
        <!-- <FilterCard :filterForm="state.filterForm" :filterParams="filterParams"></FilterCard> -->
    </div>
</template>

<script setup lang="ts">
import { computed, reactive, ref, watch } from 'vue'
import { ElMessageBox, ElMessage } from 'element-plus'

import { useRouter } from 'vue-router'
import { GlobalStore } from '@/store'

import { logoutApi } from '@/api/module/login'

import { LOGIN_URL } from '@/config/config'

import FilterCard from '@/components/FilterCard/index.vue'

import { attributeMap, typeMap, levelMap, methodMap } from './'
interface formType {
    attribute: number
    type: number
    level: number
    order: number
}
const state = reactive<{
    filterForm: formType
}>({
    filterForm: {
        attribute: 0,
        type: 0,
        level: 0,
        order: 0
    }
})
const router = useRouter()
const globalStore = GlobalStore()
// 退出登录
const handleLoginOut = () => {
    ElMessageBox.confirm('您是否确认退出登录?', '温馨提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
    }).then(async () => {
        // 1.调用退出登录接口
        await logoutApi()
        // 2.清除 Token
        globalStore.setToken('')

        // 3.重定向到登陆页
        router.replace(LOGIN_URL)
        ElMessage.success('退出登录成功！')
    })
}
const jump = () => {
    router.push('/proTable/useProTable')
}
const filterParams = computed(() => {
    return [
        { key: 'attribute', label: '资产属性', content: attributeMap },
        { key: 'type', label: '数据项分类', content: typeMap },
        { key: 'level', label: '数据敏感等级', content: levelMap },
        { key: 'method', label: '条件筛选', content: methodMap }
    ]
})
const fnA = () => {
    console.log('a')
}
const fnB = () => {
    console.log('b')
}
const testFn = () => {
    paramWithFn('A', fnA)
}
const paramWithFn = (type: string, fn: () => void) => {
    console.log('fn', fn)
}
const num = ref<number>(0)
const add = () => {
    num.value++
}
const realNum = computed({
    get: () => {
        return {
            num
        }
    },
    set: (val: any) => {
        console.log('val', val)
    }
})
</script>

<style scoped></style>
