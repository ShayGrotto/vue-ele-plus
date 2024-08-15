import type { InjectionKey } from 'vue'

interface CollapseContext {
    activeNames: 
    handleChange: (name: string) => void

}

export const collapseContextKey = Symbol('collapseContextKey') as InjectionKey< CollapseContext>