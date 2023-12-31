import './assets/Style/style.scss'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { fas } from '@fortawesome/free-solid-svg-icons'
library.add(fas);
import { fab } from '@fortawesome/free-brands-svg-icons';
library.add(fab);
import { far } from '@fortawesome/free-regular-svg-icons';
library.add(far);
import { dom } from "@fortawesome/fontawesome-svg-core";
dom.watch();

import { create, NConfigProvider } from 'naive-ui'


import App from './App.vue'
import router from './router'


// library.add(faUserSecret)
const naive = create()

const app = createApp(App)

.component('font-awesome-icon', FontAwesomeIcon)

app.use(createPinia())
app.use(router)

app.use(naive)
app.component('NConfigProvider', NConfigProvider)


app.mount('#app')