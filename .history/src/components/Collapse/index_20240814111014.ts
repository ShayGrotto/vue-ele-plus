import Collapse from "./Collapse.vue";
import CollapseItem from "./CollapseItem.vue";

Collapse.install = (app) => {
    app.component(Collapse.name, Collapse)
}
