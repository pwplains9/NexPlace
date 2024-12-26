<template>
    <footer class="footer">
        <div class="footer__container">
            <div class="footer__top">
                <router-link :to="baseDir" class="footer__logo">
                    <Image url="/images/logo.svg" />
                </router-link>

                <ul class="footer__nav">
                    <li v-for="item in dataFooter">
                        <a :href="item.url">{{ item.name }}</a>
                    </li>
                </ul>
            </div>
            <div class="footer__bottom">
                <div class="footer__copyright">
                    Copyright © 2024 NexPlace - All rights reserved.
                </div>

                <div class="footer__production">
                    Desing support by
                    <a href="https://roobinium.io/" target="_blank"
                        ><svg-icon name="roobinium" />roobinium.io</a
                    >
                </div>
            </div>
        </div>
    </footer>
</template>

<script setup>
import { useHelperStore } from "../../stores/helpersStore.js";
import { reactive } from "vue";
import SvgIcon from "../UI/SvgIcon.vue";

const { baseDir } = useHelperStore();

const dataFooter = reactive([
    {
        url: "",
        name: "About",
    },
    {
        url: "",
        name: "Terms & Conditions",
    },
    {
        url: "",
        name: "Privacy Policy",
    },
    {
        url: "",
        name: "Cookie Policy",
    },
]);
</script>

<style scoped>
@import "./index.scss";
</style>
