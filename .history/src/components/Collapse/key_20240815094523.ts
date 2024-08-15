import type { InjectionKey } from 'vue'

interface CollapseContext {
    
}

export const collapseContextKey = Symbol('collapseContextKey') as InjectionKey<string>