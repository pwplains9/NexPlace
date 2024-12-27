<template>
    <div class="keyBenefits mb-160 mb-sm-60">
        <CustomTitle
            data-aos="fade-right"
            className="title--md mb-40 text-center-m mb-sm-25"
        >
            Key Benefits</CustomTitle
        >

        <div class="keyBenefits__content">
            <div
                v-for="(item, index) in data"
                :class="[
                    'keyBenefits__card border-theme',
                    `keyBenefits__card--${index + 1}`,
                ]"
                data-aos="fade-up"
                :data-aos-delay="index + '00'"
            >
                <div class="keyBenefits__card-image mb-20 mb-sm-15">
                    <Image :url="item.image" />
                </div>
                <CustomTitle className="title--xs mb-10 mb-sm-5">
                    {{ item.title }}</CustomTitle
                >
                <Text
                    className="color-06 font-weight--300"
                    v-html="item.text"
                ></Text>
            </div>
        </div>
    </div>
</template>

<script setup>
import { reactive } from "vue";

const data = reactive([
    {
        image: "/images/image-1.webp",
        title: "Full Regulation",
        text: "Brief explanation of compliance",
    },
    {
        image: "/images/image-2.webp",
        title: "Easy Access",
        text: "Simple interface and instant<br>registration options",
    },
    {
        image: "/images/image-3.webp",
        title: "Bitcoin Infrastructure",
        text: "Emphasizing security and transparency",
    },
]);
</script>

<style scoped>
@import "./index.scss";
</style>
