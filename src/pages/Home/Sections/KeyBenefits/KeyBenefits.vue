<template>
    <div class="keyBenefits mb-160 mb-sm-60">
        <CustomTitle
            data-aos="fade-right"
            className="title--md mb-40 text-center-m mb-sm-25"
        >
            Key Benefits
        </CustomTitle
        >

        <div class="keyBenefits__content">
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
                        'keyBenefits__card border-theme',
                        `keyBenefits__card--${index + 1}`,
                    ]"
                        data-aos="fade-up"
                        :data-aos-delay="index + '00'"
                    >
                        <div class="keyBenefits__card-image mb-20 mb-sm-15">
                            <Image v-if="!helperStore.themeName" :url="item.image"/>
                            <Image v-else :url="item.imageWhite"/>
                        </div>
                        <CustomTitle className="title--xs mb-10 mb-sm-5">
                            {{ item.title }}
                        </CustomTitle
                        >
                        <Text
                            className="color-06 font-weight--300"
                            v-html="item.text"
                        ></Text>
                    </div>
                </swiper-slide>
            </swiper>
        </div>
    </div>
</template>

<script setup>
import {reactive, ref} from 'vue';
import {useHelperStore} from '../../../../stores/helpersStore.js';

import {Swiper, SwiperSlide} from 'swiper/vue';
import 'swiper/css/bundle';
import {Autoplay} from 'swiper/modules';

const modules = [Autoplay];
const slider = ref(null);
const swiperOptions = {
    autoplay: {
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
        },
    },
};

const onSwiper = (swiper) => {
    slider.value = swiper;
};
let {helperStore} = useHelperStore();

const data = reactive([
    {
        image: `/images/image-1.webp`,
        imageWhite: `/images/image-1-w.webp`,
        title: 'Full Regulation',
        text: 'A secure marketplace for tokenizing and trading stocks, bonds, and real-world assets with global compliance',
    },
    {
        image: '/images/image-2.webp',
        imageWhite: `/images/image-2-w.webp`,
        title: 'Easy Access',
        text: 'Quick and simple registration with easy access, Bitcoin wallet integration, and efficient asset management tools',
    },
    {
        image: '/images/image-3.webp',
        imageWhite: `/images/image-3-w.webp`,
        title: 'Bitcoin Infrastructure',
        text: 'Built on Bitcoin and Liquid Network, offering robust tokenization and cutting-edge blockchain security standards',
    },
    {
        image: `/images/image-7.webp`,
        imageWhite: `/images/image-5-w.webp`,
        title: 'Guaranteed Liquidity Through TradFi Innovation',
        text: ' Direct banking system integration ensures constant liquidity and instant T0 settlement for tokenized RWAs',
    },
    {
        image: `/images/image-8.webp`,
        imageWhite: `/images/image-8-w.webp`,
        title: 'Advanced Trading Tools',
        text: 'Quick swaps and advanced order books provide trading tools for users of all experience levels and preferences',
    },
    {
        image: `/images/image-9.webp`,
        imageWhite: `/images/image-9-w.webp`,
        title: 'Comprehensive Asset Tokenization',
        text: 'Tokenize equities, bonds, and financial instruments for issuers and investors of every class and tier efficiently',
    },
    {
        image: `/images/image-10.webp`,
        imageWhite: `/images/image-10-w.webp`,
        title: 'Institutional-Grade Security',
        text: 'Protect your assets with MPC wallets, secure storage solutions, and advanced real-time risk management tools',
    },
    {
        image: `/images/image-11.webp`,
        imageWhite: `/images/image-11-w.webp`,
        title: 'Global Compliance Integration',
        text: 'Seamless KYC, KYT, and AML processes aligned with international standards for secure and trusted operations',
    },
    {
        image: `/images/image-12.webp`,
        imageWhite: `/images/image-12-w.webp`,
        title: 'Proprietary Issuance Platform',
        text: 'Easily issue and manage tokenized assets through a compliance-ready platform built for ease and efficiency',
    },
    {
        image: `/images/image-13.webp`,
        imageWhite: `/images/image-13-w.webp`,
        title: 'Market Accessibility',
        text: 'Secure, non-custodial access through Liquid-compatible wallets in a scalable Bitcoin-powered ecosystem',
    },
]);
</script>

<style scoped>
@import "./index.scss";
</style>
