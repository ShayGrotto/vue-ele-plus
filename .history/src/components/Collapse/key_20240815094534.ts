import type { InjectionKey } from 'vue'

interface CollapseContext {
    activeNames: string[]
    handleChange: (name: string) => void

}

export const collapseContextKey = Symbol('collapseContextKey') as InjectionKey< CollapseContext>