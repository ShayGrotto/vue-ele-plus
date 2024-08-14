import { App } from "vue"
import Collapse from "./Collapse.vue";
import CollapseItem from "./CollapseItem.vue";

Collapse.install = (app: App) => {
    app.component(Collapse.name, Collapse)
}

CollapseItem.install = (app) => {
    app.component(CollapseItem.name, CollapseItem)
}