import { type App } from "vue"
import Collapse from "./Collapse.vue";
import CollapseItem from "./CollapseItem.vue";

const CollapseName = Collapse.name || "Ele-Collapse"
const CollapseItemName = CollapseItem.name || "Ele-CollapseItem"

Collapse.install = (app: App) => {
    app.component(CollapseName, Collapse)
}

CollapseItem.install = (app: App) => {
    app.component(CollapseItemName, CollapseItem)
}

export {
    Collpase
}