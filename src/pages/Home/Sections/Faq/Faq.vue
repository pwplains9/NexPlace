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
        title: "What is a digital asset or security token?",
        text: "A digital asset or security token represents traditional financial instruments, such as stocks, bonds, or real-world assets, in digital form using blockchain technology. These tokens provide enhanced liquidity, transparency, global accessibility, and direct exposure to the economic rights of any asset class in a simple and efficient way.",
        open: false,
    },
    {
        key: 1,
        title: "What is NexPlace?",
        text: "NexPlace is a regulated exchange that allows users to buy, sell, and trade tokenized digital assets, such as security tokens, alongside cryptocurrencies like Bitcoin and Ethereum. It serves as the gateway to the next generation of capital markets.",
        open: false,
    },
    {
        key: 2,
        title: "What products does NexPlace offer?",
        text:
            "Trade tokenized assets like equities, bonds, and real-world instruments. <br> Buy and sell cryptocurrencies like Bitcoin and Ethereum. <br> Access lending, borrowing, and other financial services with tokenized assets, unlocking liquidity. <br> Participate in capital-raising and pre-sale opportunities. <br> >See more in Products",
        open: false,
    },
    {
        key: 3,
        title: "How can I buy Bitcoin and digital assets on NexPlace?",
        text:
            "Create and verify your account through NexPlace's KYC process. <br> Deposit funds using your preferred payment method. <br> Browse and select the digital asset you wish to purchase. <br> Confirm your transaction and manage your holdings in the dashboard.",
        open: false,
    },
    {
        key: 4,
        title: "How can I earn with tokenized digital assets on NexPlace?",
        text:
            "Earn passive income through staking programs. <br> Invest in curated opportunities with regulated digital assets. <br> Utilize leverage and margin trading for potential returns. <br> >See Earn Products",
        open: false,
    },
    {
        key: 5,
        title: "Why choose NexPlace over other exchanges?",
        text: "NexPlace is the first regulated exchange focused on tokenized real-world assets, offering unique access to global liquidity, innovative financial tools, and a secure trading environment powered by Bitcoin infrastructure.",
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
