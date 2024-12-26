<template>
    <div id="products" class="ourProducts mb-160">
        <CustomTitle className="title--md mb-40"> Our Products</CustomTitle>
        <div class="ourProducts__content">
            <div
                v-for="(item, index) in data"
                :class="[
                    'ourProducts__card border-theme',
                    `ourProducts__card--${index + 1}`,
                ]"
            >
                <div class="ourProducts__card-image mb-20">
                    <Image :url="item.image" />
                </div>
                <CustomTitle
                    className="title--xs"
                    v-html="item.title"
                ></CustomTitle>
            </div>
        </div>
    </div>
</template>

<script setup>
import { reactive } from "vue";

const data = reactive([
    {
        image: "/images/image-4.webp",
        title: "Real Asset<br>Tokenization",
    },
    {
        image: "/images/image-5.webp",
        title: "Real-Time<br> Trading",
    },
    {
        image: "/images/image-6.webp",
        title: "Transparency and Auditing<br> on Bitcoin's Blockchain",
    },
]);
</script>

<style scoped>
@import "./index.scss";
</style>
