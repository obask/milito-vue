import { createApp } from "vue";
import App from "./App.vue";
import store from "./publicStore";

// @ts-ignore
document.app = createApp(App).mount("#app");


// @ts-ignore
console.log(document.app)

// @ts-ignore
document.store = store
