<template>
    <header class="header" data-aos="fade-down">
        <div class="header__left">
            <div @click="openMenu" class="header__burger for-devices">
                <svg-icon name="menu-button"/>
            </div>
            <router-link :to="baseDir" class="header__logo">
                <svg-icon name="logo"/>
            </router-link>
        </div>

        <ul class="header__list" :class="{ 'is-active': menuOpen }">
            <li
                @click="closeMenu"
                class="header__list-close for-devices"
            >
                <svg-icon name="close"/>
            </li>
            <li v-for="link in headerData">
                <a
                    @click="closeMenu"
                    v-scroll-to="'#' + link.url"
                    :href="link.url"
                >{{ link.name }}</a
                >
            </li>
            <li class="for-devices">
                <ThemeSwitcher/>
            </li>
        </ul>
        <div class="header__right">
            <ThemeSwitcher class="for-desktop"/>
            <Button
                className="link--border link--header"
                name="Sign up"
                @click="popups.signUpOpen = true"
            />
            <CustomLink
                link="/"
                class-name="link--bg link--header"
                name="<span class='for-desktop'>Download App</span> <span class='for-devices'>App</span>"
            />
        </div>
    </header>
</template>

<script setup>
import {useHelperStore} from '@/stores/helpersStore.js';
import {onMounted, reactive, ref} from 'vue';
import CustomLink from '../UI/CustomLink.vue';
import SvgIcon from '../UI/SvgIcon.vue';
import ThemeSwitcher from '../ThemeSwitcher/ThemeSwitcher.vue';
import {lockScroll} from '../../utils/lock-scroll.js';

onMounted(() => {
    console.log(popups);
});
const headerData = reactive([
    {
        url: 'top',
        name: 'Home',
    },
    {
        url: 'products',
        name: 'Products',
    },
    {
        url: 'works',
        name: 'How It Works',
    },
    {
        url: 'regulation',
        name: 'Regulation',
    },
    {
        url: 'contact',
        name: 'Contact',
    },
]);

const {
    baseDir,
    signUpOpen,
    popups,
} = useHelperStore();

const menuOpen = ref(false);

const openMenu = () => {
    menuOpen.value = true;
    lockScroll(true, document.querySelector('body'), 'body');
};
const closeMenu = () => {
    menuOpen.value = false;
    lockScroll(false, document.querySelector('body'), 'body');
};
</script>

<style scoped>
@import "./index.scss";
</style>
