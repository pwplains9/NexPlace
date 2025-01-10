<template>
    <div id="products" class="ourProducts mb-160 mb-sm-60">
        <CustomTitle
            className="title--md mb-40 text-center-m mb-sm-25"
            data-aos="fade-right"
        >
            Our Products</CustomTitle
        >
        <swiper
            :modules="modules"
            @swiper="onSwiper"
            :initial-slide="0"
            :loopAdditionalSlides="30"
            :loop="true"
            :slidesPerView="1"
            :autoplay="swiperOptions.autoplay"
            :breakpoints="swiperOptions.breakpoints"
        >
            <swiper-slide v-for="(item, index) in data" :key="index" v-slot="{ isActive }">
                <div
                    :class="[
                    'ourProducts__card border-theme',
                    `ourProducts__card--${index + 1}`,
                ]"
                    data-aos="fade-up"
                    :data-aos-delay="index + '00'"
                >
                    <div class="ourProducts__card-image mb-20 mb-sm-15">
                        <Image v-if="!helperStore.themeName" :url="item.image" />
                        <Image v-else :url="item.imageWhite" />
                    </div>
                    <CustomTitle className="title--xs mb-10 mb-sm-5">
                        {{ item.title }}</CustomTitle
                    >
                    <Text
                        className="color-06 font-weight--300"
                        v-html="item.text"
                    ></Text>
                </div>
            </swiper-slide>
        </swiper>
    </div>
</template>

<script setup>
import {reactive, ref} from 'vue';
import { useHelperStore } from "../../../../stores/helpersStore.js";
let { helperStore } = useHelperStore();

import { Swiper, SwiperSlide } from "swiper/vue";
import 'swiper/css/bundle'
import { Autoplay } from "swiper/modules";
const modules = [Autoplay];
const slider = ref(null);
const swiperOptions = {
    autoplay:{
        delay: 5000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
    },
    breakpoints: {
        1025: {
            slidesPerView: 3,
            spaceBetween: 24,
        },
        1: {
            spaceBetween: 16,
        }
    },
};

const onSwiper = (swiper) => {
    slider.value = swiper;
};

const data = reactive([
    {
        image: "/images/image-4.webp",
        imageWhite: `/images/image-4-w.webp`,
        title: "Real-time Spot Trading",
        text: 'Trade tokenized assets such as equities, bonds, and real-world instruments in real-time, supported by deep liquidity and efficient order execution',
    },
    {
        image: "/images/image-5.webp",
        imageWhite: `/images/image-5-w.webp`,
        title: "Custody Services",
        text: 'Secure custody solutions for tokenized assets, utilizing advanced MPC wallets and ensuring compliance with global regulatory standards. Designed for institutional clients and professional investors',
    },
    {
        image: "/images/image-6.webp",
        imageWhite: `/images/image-6-w.webp`,
        title: "OTC Trading",
        text: 'Execute large-scale trades of tokenized assets off the order book, providing enhanced privacy, efficiency, and competitive pricing for institutional and high-net-worth clients',
    },
    {
        image: `/images/image-2.webp`,
        imageWhite: `/images/image-2-w.webp`,
        title: "Listing Services",
        text: "Allow issuers to list tokenized assets—including equity, debt, and real-world instruments—on a regulated marketplace, catering to issuers, institutions, and private investors",
    },
    {
        image: `/images/image-14.webp`,
        imageWhite: `/images/image-14-w.webp`,
        title: "Lending and Borrowing",
        text: "Unlock liquidity and financial flexibility with innovative lending solutions that use tokenized real-world assets as collateral in a secure environment",
    },
    {
        image: `/images/image-15.webp`,
        imageWhite: `/images/image-15-w.webp`,
        title: "Pre-Sale and Capital Raise",
        text: "Facilitate tokenized asset pre-sales and fundraising by connecting issuers with investors in a compliant and secure marketplace for capital formation",
    },
    {
        image: `/images/image-16.webp`,
        imageWhite: `/images/image-16-w.webp`,
        title: "Margin Trading",
        text: "Amplify trading potential by leveraging positions on tokenized assets through secure and transparent margin trading mechanisms, with tokenized assets as collateral",
    },
    {
        image: `/images/image-17.webp`,
        imageWhite: `/images/image-17-w.webp`,
        title: "Futures Trading",
        text: "Access futures markets for tokenized assets, providing advanced tools for managing risk and exploring speculative trading opportunities",
    },
    {
        image: `/images/image-12.webp`,
        imageWhite: `/images/image-12-w.webp`,
        title: "Options Trading",
        text: "Trade innovative options instruments on tokenized and real-world assets via a professional and state-of-the-art trading desk, offering flexibility and risk management",
    },{
        image: `/images/image-13.webp`,
        imageWhite: `/images/image-13-w.webp`,
        title: "NexPlace Pro",
        text: "A professional trading desk for institutions and advanced traders, offering innovative tools and full compliance for optimized asset management",
    },
]);
</script>

<style scoped lang="scss">

@import "./index.scss";
</style>
