<template>
    <div class="main-content" :style="{ width: props.width }">
        <slot></slot>
    </div>
</template>

<script setup lang="ts">
const props = withDefaults(
    defineProps<{
        width: string
    }>(),
    { width: '100%' }
)
</script>

<style lang="scss" scoped>
.main-content {
    /* width: 78%; */
    margin: 4px;
    height: calc(100vh - 120px);
    background-color: #fff;
    padding: 20px;
    box-sizing: border-box;
}
</style>
