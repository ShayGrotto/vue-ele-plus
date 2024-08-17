import './assets/main.css'
import './styles/index.scss'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'
/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
/* import all icons */
import { fas } from '@fortawesome/free-solid-svg-icons'

/* add icons to the library */
library.add(fas)

//导入自定义组件
import  Icon  from '@/components/Icon/index.vue'
import Button from "@/components/Button/index.vue"
import Collapse from '@/components/Collapse/Collapse.vue'
import CollapseItem from '@/components/Collapse/CollapseItem.vue'
import Dialog from '@/components/Dialog/index.vue'
import Pager from "@/components/Pager/index.vue"
import Tooltip from '@/components/Tooltip/index.vue'
import Dropdown from '@/components/Dropdown/index.vue'


const app = createApp(App)

app.component('font-awesome-icon', FontAwesomeIcon)

// 注册自定义组件
app.component("Ele-Icon", Icon)
app.component("Ele-Button", Button)
app.component("Ele-Collapse", Collapse)
app.component("Ele-CollapseItem", CollapseItem)
app.component("Ele-Dialog", Dialog)
app.component("Ele-Pager", Pager)
app.component("Ele-Tooltip", Tooltip)
app.component("Ele-Dropdown", Dropdown)

app.use(router)

app.mount('#app')
