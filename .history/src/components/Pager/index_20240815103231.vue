<template>
    <div>

    </div>
</template>

<script setup lang="ts">
import { computed } from "vue"

interface PagerProps {
    total?: number
    pageCount?: number
    currentPage?: number
    type?: string
    size?: string
}

defineOptions({
    name: "Ele-Pager"
})

withDefaults(defineProps<PagerProps>(), {
    total: 0,
    pageCount: 10,
    currentPage: 1
})

const pager = computed(() => {
    const renderPage = [];

    //可渲染的页码数大于总的页码数
    if(props.pageCount >= props.total) {
        for(let i = 1; i <= props.total; i++) {
            renderPage.push(i);
        }
    } else {
        // 可渲染的页码数小于 总的页码数
        // 可以再次分为三种情况
        if(props.currentPage <= 5) {
            // 当前渲染的页码比较靠前
            for(let i = 1; i <= 5; i++) {
                renderPage.push(i);
            }
            
        } else if(props.currentPage >= props.total - 4) {
            for(let i = props.total - 4; i <= props.total; i++) {
                renderPage.push(i);
            }
        } else {
            for(let i = props.currentPage - 2; i <= props.currentPage + 2; i++) {
                renderPage.push(i);
            }
        }
    }

    return renderPage;  
})

</script>

<style scoped>

</style>