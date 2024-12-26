import { createApp } from "vue";
import "./styles/main.scss";
import components from "@/components/UI";
import App from "./App.vue";
import vhFix from "@/utils/vhFix";
import "virtual:svg-icons-register";
import { createPinia } from "pinia";
import { createRouter, createWebHistory } from "vue-router";
import Home from "@/pages/Home/Home.vue";
import Vue3Marquee from "vue3-marquee";
import VueScrollTo from "vue-scrollto"
const app = createApp(App);

let baseURL = import.meta.env.BASE_URL;

const routes = [
    {
        path: `${baseURL}`,
        name: "Home",
        component: Home,
        meta: {
            title: "Home Title",
            description: "Home Description",
            keyWords: "",
        },
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

router.beforeEach((to) => {
    const { title, description, keyWords } = to.meta;
    const defaultTitle = "Default Title";
    const defaultDescription = "Default Description";
    const defaultKeyWords = "";

    document.title = title || defaultTitle;

    const keyWordsElement = document.querySelector(
        'head meta[name="keywords"]',
    );
    const descriptionElement = document.querySelector(
        'head meta[name="description"]',
    );
    const ogTitle = document.querySelector('head meta[property="og:title"]');
    const ogDescription = document.querySelector(
        'head meta[property="og:description"]',
    );
    const twitterTitle = document.querySelector(
        'head meta[name="twitter:title"]',
    );
    const twitterDescription = document.querySelector(
        'head meta[name="twitter:description"]',
    );

    keyWordsElement.setAttribute("content", keyWords || defaultKeyWords);
    descriptionElement.setAttribute(
        "content",
        description || defaultDescription,
    );
    ogTitle.setAttribute("content", title || defaultTitle);
    ogDescription.setAttribute("content", description || defaultDescription);
    twitterTitle.setAttribute("content", title || defaultTitle);
    twitterDescription.setAttribute(
        "content",
        description || defaultDescription,
    );
});

const pinia = createPinia();

components.forEach((component) => {
    app.component(component.name, component);
});

app.use(vhFix.init);
app.use(pinia);
app.use(VueScrollTo)
app.use(router);
app.use(Vue3Marquee);
app.mount("#app");
