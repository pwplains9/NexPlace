<template>
    <div class="faq">
        <CustomTitle
            data-aos="fade-right"
            className="title--md text-center mb-40 mb-sm-25"
        >
            FAQ</CustomTitle
        >

        <div class="faq__items" data-aos="fade-up">
            <FaqItem
                v-for="(item, index) in data"
                :title="item.title"
                :text="item.text"
                :open="item.open"
                @open="openFaqItem"
                @close="closeFaqItem"
                :data-key="item.key"
                :key="item.key"
            />
        </div>
    </div>
</template>

<script setup>
import { reactive } from "vue";
import FaqItem from "./FaqItem.vue";

const data = reactive([
    {
        key: 0,
        title: "What is a cryptocurrency exchange?",
        text: "Cryptocurrency exchanges are digital marketplaces that enable users to buy and sell cryptocurrencies like Bitcoin, Ethereum, and Tether. The NexPlace exchange is the largest crypto exchange by trade volume.",
        open: false,
    },
    {
        key: 1,
        title: "How to track cryptocurrency prices",
        text: "text 1",
        open: false,
    },
    {
        key: 2,
        title: "What products does NexPlace provide?",
        text: "text 1",
        open: false,
    },
    {
        key: 3,
        title: "How to trade cryptocurrencies on NexPlace",
        text: "text 1",
        open: false,
    },
    {
        key: 4,
        title: "How to buy Bitcoin and other cryptocurrencies on NexPlace",
        text: "text 1",
        open: false,
    },
    {
        key: 5,
        title: "How to earn from crypto on NexPlace",
        text: "text 1",
        open: false,
    },
]);

const openFaqItem = (key) => {
    data[key].open = true;
};

const closeFaqItem = (key) => {
    data[key].open = false;
};
</script>

<style scoped>
@import "./index.scss";
</style>
