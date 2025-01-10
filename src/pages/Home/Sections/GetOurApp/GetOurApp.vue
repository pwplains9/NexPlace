<template>
    <div
        class="getOurApp border-theme border-theme mb-160 mb-sm-60"
        data-aos="fade-up"
    >
        <div class="getOurApp__bg getOurApp__bg--1 for-desktop"></div>
        <div class="getOurApp__bg getOurApp__bg--2 for-desktop"></div>
        <CustomTitle className="title--lg text-center mb-35 relative mb-sm-20"
            >Get our App</CustomTitle
        >
        <Text className="text-center lh-28 mb-35 mb-sm-15 relative"
            >Take control of your assets anywhere</Text
        >

        <div class="getOurApp__buttons">
            <a href="" class="getOurApp__button">
                <Image url="/images/apple.svg" />
            </a>
            <a href="" class="getOurApp__button">
                <Image url="/images/google.svg" />
            </a>

<!--            <div class="getOurApp__button" @click="popups.continueQR = true">-->
<!--                QR-->
<!--            </div>-->
        </div>
    </div>
</template>

<script setup>
import {useHelperStore} from '../../../../stores/helpersStore.js';

const { baseDir, signUpOpen, popups } = useHelperStore();
</script>

<style scoped>
@import "./index.scss";
</style>
