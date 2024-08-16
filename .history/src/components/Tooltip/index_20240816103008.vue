<template>
    <div>

    </div>
</template>

<script setup lang="ts">
import { ref, computed, watch, reactive } from 'vue'
import { createPopper } from "@popperjs/core"
import { debounce } from 'lodash-es';
import type  { Placement, Instance } from '@popperjs/core'

interface TooltipProps {
    content?: string
    trigger?: string
    placement?: Placement
    manual?: boolean
    openDelay?: number
    closeDelay?: number
}

defineOptions({
    name: "Ele-Tooltip"
})

const props = withDefaults(defineProps<TooltipProps>(), {
    trigger: 'hover',
    placement: 'left',
    manual: false,
    openDelay: 100,
    closeDelay: 100
})

const emit = defineEmits(['visible-change'])

const isOpen = ref(false)

//存储触发元素
const triggerRef = ref(null)
//存储提示框元素
const popperRef = ref(null)

let popperInstance : Instance | null = null


// // 定义popper选项类型以匹配createPopper的要求
// type PopperOptions = Partial<Parameters<typeof createPopper>[2]>;

//计算属性，用于 createPopper 的第三个参数
const popperOptions = computed(() => ({
    placement: props.placement,
    modifiers: [
        {
            name: 'offset',
            options: {
                offset: [0, 6]
            }
        }
    ]
}))

watch(isOpen, (newValue) => {
    if(newValue) {
        if(triggerRef.value && popperRef.value) {
            popperInstance = createPopper(triggerRef.value, popperRef.value,  popperOptions.value)
        } else {
            popperInstance?.destroy()
        }
    }
}, { flush: 'post'})

//绑定事件
const events = reactive({})
const outerEvents = reactive({})

const debounceOpen = debounce(() => {
    
})
</script>

<style scoped>

</style>