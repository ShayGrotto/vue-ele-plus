<template>
    <div class="ele-pager"
        :class="{
            [`ele-pager--${type}`]: type,
            [`ele-pager--${size}`]: size,
        }"
    >
        <!-- 首页 -->
        <a 
            :class="currentPage === 1 ? 'disabled': ''"
            @click.prevent="goToFirstPage"
        >首页</a>

        <!-- 上一页 -->
        <a :class="currentPage === 1 ? 'disabled': ''"
            @click.prevent="goToPrevPage"
        >
            <Ele-Icon icon="angles-left" />
        </a>

        <!-- 第一页和后面的 ... -->
        <a v-if="currentPage > 5 && total > pageCount" @click.prevent="goToPage(1)">1</a>
        <a v-if="currentPage > 5 && total > pageCount">
            <Ele-Icon icon="ellipsis" size="sm" />
        </a>


        <!-- 中间的页码 -->
        <a v-for="page in pager" 
            :key="page"
            :class="currentPage === page ? 'active': ''"
            @click.prevent="goToPage(page)"
        >
            {{ page }}
        </a>


        <!-- 最后一页和后面的 ... -->
        <a v-if="currentPage < total - 4 && total > pageCount">
            <Ele-Icon icon="ellipsis" size="sm"/>
        </a>
        <a v-if="currentPage < total - 4 && total > pageCount" @click.prevent="goToPage(total)">
            {{ total }}
        </a>

        <a :class="currentPage === total ? 'disabled': ''"
            @click.prevent="goToNextPage"
        >
            <Ele-Icon icon="angles-right" />
        </a>
        <a
            :class="currentPage === total ? 'disabled': ''"
            @click.prevent="goToLastPage"
        >尾页</a>
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

const props = withDefaults(defineProps<PagerProps>(), {
    total: 0,
    pageCount: 10,
    currentPage: 1
})

//中间部分要渲染的页码
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


//点击事件
const goToFirstPage = () => {
    emit('current-change', 1)
}
const goToLastPage = () => {
    emit('current-change', props.total)
}
const goToPrevPage = () => {
    if(props.currentPage === 1) return;
    emit('current-change', props.currentPage - 1)
}
const goToNextPage = () => {
    if(props.currentPage === props.total) return;
    emit('current-change', props.currentPage + 1)
}
const goToPage = (page) => {
    emit('current-change', page)
}  

</script>

<style scoped>

</style>