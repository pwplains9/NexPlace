<template>
    <div class="keyBenefits mb-160">
        <CustomTitle className="title--md mb-40"> Key Benefits</CustomTitle>

        <div class="keyBenefits__content">
            <div
                v-for="(item, index) in data"
                :class="[
                    'keyBenefits__card border-theme',
                    `keyBenefits__card--${index + 1}`,
                ]"
            >
                <div class="keyBenefits__card-image mb-20">
                    <Image :url="item.image" />
                </div>
                <CustomTitle className="title--xs mb-10">
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
