import Tooltip from "./index.vue"
import type { App } from "vue"

Tooltip.install= (app: App) => {
    app.component(Tooltip.name, Tooltip))
}