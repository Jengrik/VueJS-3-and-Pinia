//* Imports Necessary Methods from Vue & Pinia
import { createApp } from 'vue'
import { createPinia } from 'pinia'

//* Imports the Root Component
import App from './App.vue'

//* Creates the application instance
const MountElement = document.querySelector("#bodyVueContainer");
const VueApp = createApp(App, { ...MountElement.firstElementChild.dataset });

//* Installs the store instance as a plugin
VueApp.use(createPinia());

//* Mounts the application instance
VueApp.mount('#bodyVueContainer');
