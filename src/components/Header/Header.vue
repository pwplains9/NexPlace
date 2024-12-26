<template>
    <header class="header">
        <router-link :to="baseDir" class="header__logo">
            <Image url="/images/logo.svg" />
        </router-link>
        <ul class="header__list">
            <li v-for="link in headerData">
                <a v-scroll-to="'#' + link.url" :href="link.url">{{
                    link.name
                }}</a>
            </li>
        </ul>
        <div class="header__right">
            <Button
                className="link--border link--header"
                name="Sign up"
                @click="popups.signUpOpen = true"
            />
            <CustomLink
                link="/"
                class-name="link--bg link--header"
                name="Download App"
            />
        </div>
    </header>
</template>

<script setup>
import { useHelperStore } from "@/stores/helpersStore.js";
import { onMounted, reactive } from "vue";
import CustomLink from "../UI/CustomLink.vue";

onMounted(() => {
    console.log(popups);
});
const headerData = reactive([
    {
        url: "top",
        name: "Home",
    },
    {
        url: "products",
        name: "Products",
    },
    {
        url: "works",
        name: "How It Works",
    },
    {
        url: "regulation",
        name: "Regulation",
    },
    {
        url: "contact",
        name: "Contact",
    },
]);

const { baseDir, signUpOpen, popups } = useHelperStore();
</script>

<style scoped>
@import "./index.scss";
</style>
