import { type App } from "vue"
import Collapse from "./Collapse.vue";
import CollapseItem from "./CollapseItem.vue";

const CollapseName = Collapse.name || "Ele-Collapse"

Collapse.install = (app: App) => {
    app.component(Collapse.name, Collapse)
}

CollapseItem.install = (app: App) => {
    app.component(CollapseItem.name, CollapseItem)
}