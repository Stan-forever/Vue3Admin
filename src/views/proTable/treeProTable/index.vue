<template>
    <MainContent>
        <canvas style="width: 350px; height: 200px"></canvas>
    </MainContent>
</template>

<script setup lang="ts">
import { onMounted, nextTick } from 'vue'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'

const getSizes = () => {
    nextTick(() => {
        const sizes = {
            width: document.querySelector('canvas')?.style.width,
            height: document.querySelector('canvas')?.style.height
        }
        return sizes
    })
}
const initThreeModel = () => {
    const sizes = {
        width: 350,
        height: 200
    }
    // console.log('sizes', sizes)

    // 初始化渲染器
    const canvas = document.querySelector('canvas')
    const renderer = new THREE.WebGLRenderer({ canvas: canvas })
    renderer.setSize(sizes.width, sizes.height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

    // 初始化场景
    const scene = new THREE.Scene()

    // 初始化相机
    const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 100)
    camera.position.z = 3
    scene.add(camera)

    // 页面缩放事件监听
    window.addEventListener('resize', () => {
        sizes.width = window.innerWidth
        sizes.height = window.innerHeight
        // 更新渲染
        renderer.setSize(sizes.width, sizes.height)
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
        // 更新相机
        camera.aspect = sizes.width / sizes.height
        camera.updateProjectionMatrix()
    })

    const geometry = new THREE.BoxGeometry(1, 1, 1)
    const material = new THREE.MeshBasicMaterial({ color: 0x03c03c })
    const mesh = new THREE.Mesh(geometry, material)
    scene.add(mesh)

    // 动画
    const tick = () => {
        // 更新渲染器
        renderer.render(scene, camera)
        // 给网格模型添加一个转动动画
        mesh && (mesh.rotation.y += 0.02)
        mesh && (mesh.rotation.x += 0.02)
        // 页面重绘时调用自身
        window.requestAnimationFrame(tick)
    }
    tick()
}

const initStarLight = () => {
    // 定义渲染尺寸
    const sizes = {
        width: window.innerWidth,
        height: window.innerHeight
    }

    // 初始化渲染器
    const canvas = document.querySelector('canvas.webgl')
    const renderer = new THREE.WebGLRenderer({ canvas: canvas })
    renderer.setSize(sizes.width, sizes.height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

    // 初始化场景
    const scene = new THREE.Scene()
    scene.background = new THREE.Color(0x1a1a1a)
    scene.fog = new THREE.Fog(0x1a1a1a, 1, 1000)

    // 初始化相机
    const camera = new THREE.PerspectiveCamera(40, sizes.width / sizes.height)
    scene.add(camera)
    camera.position.set(20, 100, 450)

    // 页面缩放事件监听
    window.addEventListener('resize', () => {
        sizes.width = window.innerWidth
        sizes.height = window.innerHeight
        // 更新渲染
        renderer.setSize(sizes.width, sizes.height)
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
        // 更新相机
        camera.aspect = sizes.width / sizes.height
        camera.updateProjectionMatrix()
    })
}

onMounted(() => {
    initThreeModel()
})
</script>

<style scoped></style>
