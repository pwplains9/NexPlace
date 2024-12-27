<template>
    <div class="welcome mb-160 mb-sm-60">
        <CustomTitle
            data-aos="fade-right"
            className="title--md text-center mb-15 text-left-m"
        >
            Welcome to NexPlace</CustomTitle
        >
        <Text
            className="text-center mb-40 text-left-m mb-sm-25"
            data-aos="fade-right"
            data-aos-delay="200"
        >
            The ultimate all-in-one platform where Bitcoin meets real-world
            assets</Text
        >

        <div class="welcome__content">
            <div
                v-for="(item, index) in data"
                :class="[
                    'welcome__card border-theme',
                    `welcome__card--${index + 1}`,
                ]"
                data-aos="fade-up"
                :data-aos-delay="index + '00'"
            >
                <div class="welcome__card-image">
                    <Image :url="item.image" />
                </div>
                <div class="welcome__card-inner">
                    <CustomTitle className="title--xs mb-15 mb-sm-10">
                        {{ item.title }}</CustomTitle
                    >
                    <Text className="color-06 font-weight--300 text--xs lh-24">
                        {{ item.text }}</Text
                    >
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { reactive } from "vue";

const data = reactive([
    {
        image: "/images/ico-1.webp",
        title: "Trade",
        text: "Trade seamlessly, invest in tokenized assets like bonds and equities, and unlock the full potential of your portfolio",
    },
    {
        image: "/images/ico-2.webp",
        title: "Security",
        text: "Use your holdings to access liquidity or engage in advanced financial strategies—all with unmatched security, transparency, and efficiency",
    },
]);
</script>

<style scoped>
@import "./index.scss";
</style>
