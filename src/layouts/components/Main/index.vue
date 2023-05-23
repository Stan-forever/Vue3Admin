<template>
    <Tabs></Tabs>
    <el-main id="scroll-content">
        <!-- <section class="app-mian-height"> -->
        <router-view v-slot="{ Component, route }">
            <!-- <transition appear name="fade-transform" mode="out-in"> -->
            <component :is="Component" :key="route.path" />
            <!-- </transition> -->
        </router-view>
        <el-backtop target="#scroll-content"></el-backtop>
        <!-- </section> -->
    </el-main>
    <el-footer></el-footer>
</template>

<script setup lang="ts">
import Tabs from '../Tabs/index.vue'
</script>

<style scoped lang="scss">
@import './index.scss';

.app-mian-height {
    /* min-height: $base-app-main-height; */

    // padding: 20px;
    background-color: inherit;
}
</style>
