import { createApp } from "vue";
import App from "./App.vue";
import store from "./publicStore";
import IRPlayerState from "@milito-entities/IRPlayerState";

// @ts-ignore
window.app = createApp(App).mount("#app");

console.log("OLOLO1");

// @ts-ignore
console.log(window.app)

// @ts-ignore
window.store = store
