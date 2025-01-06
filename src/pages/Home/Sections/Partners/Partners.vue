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
                    <svg-icon :name="item.url" />
                </div>
            </Vue3Marquee>
        </div>
    </div>
</template>

<script setup>
import { reactive } from "vue";
import { Vue3Marquee } from "vue3-marquee";
import SvgIcon from "../../../../components/UI/SvgIcon.vue";

const list = reactive([
    {
        url: "cointelegraph",
    },
    {
        url: "bloomberg",
    },
    {
        url: "fortune",
    },
    {
        url: "yahoofinance",
    },
    {
        url: "decrypt",
    },
    {
        url: "coindesk",
    },
    {
        url: "independent",
    },
]);
</script>

<style scoped>
@import "./index.scss";
</style>
