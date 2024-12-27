<template>
    <div class="partners mb-160 mb-sm-60">
        <CustomTitle data-aos="fade-right" className="title--md mb-40 mb-sm-25">
            Partners
        </CustomTitle>
        <div class="partners__list">
            <Vue3Marquee>
                <div
                    v-for="(item, index) in list"
                    class="border-theme partners__item"
                    data-aos="fade-up"
                    :data-aos-delay="index + '00'"
                >
                    <Image :url="item.url" />
                </div>
            </Vue3Marquee>
        </div>
    </div>
</template>

<script setup>
import { reactive } from "vue";
import { Vue3Marquee } from "vue3-marquee";

const list = reactive([
    {
        url: "/images/partners/cointelegraph.svg",
    },
    {
        url: "/images/partners/bloomberg.svg",
    },
    {
        url: "/images/partners/fortune.svg",
    },
    {
        url: "/images/partners/yahoofinance.svg",
    },
    {
        url: "/images/partners/decrypt.svg",
    },
    {
        url: "/images/partners/coindesk.svg",
    },
    {
        url: "/images/partners/independent.svg",
    },
]);
</script>

<style scoped>
@import "./index.scss";
</style>
