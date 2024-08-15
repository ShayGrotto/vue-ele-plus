<template>
   <transition name="dialog-fade">
        <!-- 外层容器 -->
    <div class="ele-dialog_wrapper" v-show="visible">
        <!-- 对话框的宽度和高度 -->
        <div class="ele-dialog" :style="{ width, marginTop: top}">
            <!-- 头部 -->
            <div class="ele-dialog_header">
                <slot name="title">
                    <span class="ele-dialog_title">{{ title }}</span>
                </slot>
                <!-- 关闭按钮 -->
                <div class="ele-dialog_headerbtn" @click="clickHandle">
                    <Ele-Icon icon="xmark"/>
                </div>
            </div>
            <!-- 中间部分 -->
            <div class="ele-dialog_body">
                <slot></slot>
            </div>
            <!-- 底部部分 -->
            <div class="ele-dialog_footer">
                <slot name="footer">
                </slot>
            </div>
        </div>

    </div>
    </transition>
</template>

<script setup lang="ts">
interface DialogProps {
    visible?: boolean
    width?: string
    top?: string
    title?: string
}

defineOptions({
    name: "Ele-Dialog"
})

withDefaults(defineProps<DialogProps>(), {
    visible: false,
    width: "50%",
    top: "15vh",
    title: "提示"
})


</script>

<style scoped>

</style>