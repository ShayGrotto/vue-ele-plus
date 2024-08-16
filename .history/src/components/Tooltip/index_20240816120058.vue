<template>
   <div class="ele-tooltip" v-on="outerEvents">
    <!-- 触发元素 -->
    <div class="ele-tooltip__trigger" ref="triggerRef" v-on="events">
      <slot />
    </div>
    <!-- 要提示的内容 -->
    <div class="ele-tooltip__popper" ref="popperRef" v-if="isOpen">
      <slot name="content">
        {{ content }}
      </slot>
      <!-- 箭头 -->
      <div id="arrow" data-popper-arrow></div>
    </div>
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

const emits = defineEmits(['visible-change'])

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



const debounceOpen = debounce(() => {
    isOpen.value = true
    emits('visible-change', true)
}, props.openDelay)

const debounceClose = debounce(() => {
    isOpen.value = false
    emits('visible-change', false)
}, props.closeDelay)

const open = () => {
    debounceOpen.cancel();
    debounceOpen()
}

const close = () => {
    debounceClose.cancel();
    debounceClose()
}
type EventHandler = (event: Event) => void

//绑定事件
const events: Record<string, EventHandler> = reactive({})
const outerEvents:Record<string, EventHandler>  = reactive({})

const attachEvents = () => {
  if (props.trigger === 'hover') {
    // 鼠标移入触发
    events['mouseenter'] = open
    outerEvents['mouseleave'] = close
  } else if (props.trigger === 'click') {
    // 点击触发
    events['click'] =   () => (isOpen.value ? close() : open())
  }
}

if (!props.manual) {
  attachEvents()
}

defineExpose({
    show: open,
    hide: close
})

</script>

<style scoped>

</style>