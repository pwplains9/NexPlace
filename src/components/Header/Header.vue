<template>
    <header class="header" data-aos="fade-down">
        <div class="header__left">
            <div @click="openMenu" class="header__burger for-devices">
                <svg-icon name="menu-button"/>
            </div>
            <router-link :to="baseDir" class="header__logo">
                <svg
                    width="97"
                    height="16"
                    viewBox="0 0 97 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M11.92 15H9.64L2.78 4.62V15H0.5V1.08H2.78L9.64 11.44V1.08H11.92V15ZM17.1941 2.94V7.02H21.9941V8.88H17.1941V13.14H22.5941V15H14.9141V1.08H22.5941V2.94H17.1941ZM31.7823 8.06L36.1023 15H33.5423L30.4023 9.96L27.4623 15H24.9223L29.2423 8.06L24.9023 1.1H27.4623L30.6223 6.18L33.5823 1.1H36.1223L31.7823 8.06ZM48.3255 5.24C48.3255 5.94667 48.1588 6.61333 47.8255 7.24C47.4921 7.86667 46.9588 8.38 46.2255 8.78C45.4921 9.16667 44.5521 9.36 43.4055 9.36H40.8855V15H38.6055V1.1H43.4055C44.4721 1.1 45.3721 1.28667 46.1055 1.66C46.8521 2.02 47.4055 2.51333 47.7655 3.14C48.1388 3.76667 48.3255 4.46667 48.3255 5.24ZM43.4055 7.5C44.2721 7.5 44.9188 7.30667 45.3455 6.92C45.7721 6.52 45.9855 5.96 45.9855 5.24C45.9855 3.72 45.1255 2.96 43.4055 2.96H40.8855V7.5H43.4055ZM52.78 13.16H57.48V15H50.5V1.1H52.78V13.16ZM67.7667 12.16H61.9467L60.9467 15H58.5667L63.5467 1.08H66.1867L71.1667 15H68.7667L67.7667 12.16ZM67.1267 10.3L64.8667 3.84L62.5867 10.3H67.1267ZM72.572 8.02C72.572 6.66 72.8854 5.44 73.512 4.36C74.152 3.28 75.012 2.44 76.092 1.84C77.1854 1.22667 78.3787 0.919999 79.672 0.919999C81.152 0.919999 82.4654 1.28667 83.612 2.02C84.772 2.74 85.612 3.76667 86.132 5.1H83.392C83.032 4.36667 82.532 3.82 81.892 3.46C81.252 3.1 80.512 2.92 79.672 2.92C78.752 2.92 77.932 3.12667 77.212 3.54C76.492 3.95333 75.9254 4.54667 75.512 5.32C75.112 6.09333 74.912 6.99333 74.912 8.02C74.912 9.04667 75.112 9.94667 75.512 10.72C75.9254 11.4933 76.492 12.0933 77.212 12.52C77.932 12.9333 78.752 13.14 79.672 13.14C80.512 13.14 81.252 12.96 81.892 12.6C82.532 12.24 83.032 11.6933 83.392 10.96H86.132C85.612 12.2933 84.772 13.32 83.612 14.04C82.4654 14.76 81.152 15.12 79.672 15.12C78.3654 15.12 77.172 14.82 76.092 14.22C75.012 13.6067 74.152 12.76 73.512 11.68C72.8854 10.6 72.572 9.38 72.572 8.02ZM91.0808 2.94V7.02H95.8808V8.88H91.0808V13.14H96.4808V15H88.8008V1.08H96.4808V2.94H91.0808Z"
                        fill="currentColor"
                    />
                </svg>
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
