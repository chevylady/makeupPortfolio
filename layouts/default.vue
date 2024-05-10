<template>
    <div class="content min-h-svh px-4 bg-gradient-to-br from-white via-white to-pink-50 font-mont leading-10 overflow-hidden">
            <slot />
    </div>
</template>
<script setup>
import { initFlowbite } from 'flowbite'
onMounted(() => {
    initFlowbite();
})
</script>
