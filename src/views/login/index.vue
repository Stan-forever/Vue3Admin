<template>
    <div class="login-container flx-center">
        <div class="login-box">
            <div class="login-box-left">
                <!-- <img src="@/assets/images/login/login_left.png" alt="login" srcset=""> -->
            </div>
            <div class="login-box-right">
                <loginForm></loginForm>
                <el-input></el-input>
            </div>
            <div>login test2</div>
        </div>
    </div>
</template>

<script setup lang="ts">
import loginForm from './components/loginForm.vue'
</script>

<style scoped>
@import './index.scss';
</style>
