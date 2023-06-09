<template>
    <div>
        <el-form
            :model="state.form"
            label-width="120px"
            style="display: flex; flex-direction: column"
            size="large"
        >
            <el-form-item label="用户名">
                <el-input v-model="state.form.username" placeholder="请输入用户名"></el-input>
            </el-form-item>
            <el-form-item label="密码">
                <el-input
                    v-model="state.form.password"
                    placeholder="请输入密码"
                    type="password"
                    show-password
                ></el-input>
            </el-form-item>
            <el-form-item>
                <el-button style="width: 300px" type="primary" @click="handleLogin">登录</el-button>
            </el-form-item>
            <el-form-item>
                <el-button>20230609 14:37</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script setup lang="ts">
import md5 from 'js-md5'

import { reactive, onMounted } from 'vue'

import { useRouter } from 'vue-router'
import { initDynamicRouter } from '@/router/modules/dynamicRouter'
import { GlobalStore } from '@/store/index'

import { loginApi } from '@/api/module/login'

import { HOME_URL } from '@/config/config'

interface stateType {
    form: {
        username: string
        password: string
    }
}

const router = useRouter()
const globalStore = GlobalStore()

const state = reactive<stateType>({
    form: {
        username: '',
        password: ''
    }
})
const handleLogin = async () => {
    //1.调用登录登录
    const { data } = await loginApi({ ...state.form, password: md5(state.form.password) })

    //2、获取token
    const token = data.access_token

    //3.存入token
    globalStore.setToken(token)

    router.push(HOME_URL)

    //4.动态路由
    await initDynamicRouter()
}
onMounted(() => {})
</script>

<style scoped></style>
