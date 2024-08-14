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
import Collapse from './components/Collapse/Collapse.vue'


const app = createApp(App)

app.component('font-awesome-icon', FontAwesomeIcon)

// 注册自定义组件
app.component("Ele-Icon", Icon)
app.component("Ele-Button", Button)

app.use(router)

app.mount('#app')
