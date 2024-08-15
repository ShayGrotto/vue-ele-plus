<template>
   <div
    class="ele-collapse-item"
    :class="{
      'is-disabled': disabled
    }"
  >
    <!-- 标题部分    -->
    <div
      class="ele-collapse-item__header"
      :class="{
        'is-disabled': disabled,
        'is-active': isActive
      }"
      :id="`item-header-${name}`"
      @click="itemHandleClick"
    >
      <!-- 标题插槽 -->
      <slot name="title">
        {{ title }}
      </slot>
      <!-- 右侧图标 -->
      <Ele-Icon icon="angle-right" class="header-angle"></Ele-Icon>
    </div>

    <!-- 内容部分 -->
    <Transition name="slide" v-on="transitionEvents">
      <div class="ele-collapse-item__wrapper" v-show="isActive">
        <div class="ele-collapse-item__content" :id="`item-content-${title}`">
          <slot />
        </div>
      </div>
    </Transition>
  </div>
</template>

<script setup lang="ts">
import { computed, inject} from "vue"
import { Coll}

import { collapseContextKey } from "./key"
interface CollapseItemProps {
    name: string
    title: string
    disabled?: boolean
}

defineOptions({
    name: "Ele-CollapseItem"
})

const props = defineProps<CollapseItemProps>()

const collapseContext  = inject(collapseContextKey)

const isActive = computed(() => {
    return collapseContext && collapseContext?.activeNames.value.includes(props.name)
})

const itemHandleClick = () => {
    if(props.disabled) return;
    collapseContext.handleItemClick(props.name)
}

const transitionEvents = {
    beforeEnter(el: HTMLElement) {
        el.style.height = '0px'
        el.style.overflow = 'hidden'
    },
    enter(el:HTMLElement) {
        el.style.height = `${el.scrollHeight}px`
    },
    afterEnter(el: HTMLElement) {
        el.style.height = "",
        el.style.overflow = ""
    },
    beforeLeave(el: HTMLElement) {
        el.style.height = `${el.scrollHeight}px`;
        el.style.overflow = "hidden";
    },
    leave(el: HTMLElement) {
        el.style.height = "0px";
    },
    afterLeave(el: HTMLElement) {
        el.style.height = "",
        el.style.overflow = ""
    }
}

</script>

<style scoped>

</style>