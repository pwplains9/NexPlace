<template>
    <div class="intro">
        <div class="intro__left">
            <CustomTitle
                data-aos="fade-right"
                className="title--lg mb-30 mb-sm-25"
                >Your <span class="color-theme">All-in-One</span> Platform
            </CustomTitle>
            <Text
                data-aos="fade-right"
                data-aos-delay="200"
                className=" lh-28 mb-45 mb-sm-25"
                >Trade Bitcoin. Access Real-World Assets. Unlock Liquidity.
            </Text>
            <div
                data-aos="fade-right"
                data-aos-delay="400"
                class="intro__form mb-55 mb-sm-15"
            >
                <Form @submit="onSubmit">
                    <Field
                        name="email"
                        type="email"
                        placeholder="Email or Phone number"
                        :rules="validateEmail"
                    />
                    <Button
                        type="submit"
                        link="/"
                        class-name="link--color"
                        name="Sign up"
                    />
                    <ErrorMessage name="email" />
                </Form>
            </div>
            <div
                class="intro__continue mb-sm-70"
                data-aos="fade-right"
                data-aos-delay="600"
            >
                <span> Or continue with </span>
                <div class="intro__continue-buttons mt-15 mt-sm-10">
                    <div class="intro__continue-button">
                        <svg-icon name="google" />
                        Google
                    </div>
                    <div class="intro__continue-button">
                        <svg-icon name="apple" />
                        Apple
                    </div>
                </div>
            </div>
        </div>
        <div class="intro__right" data-aos="fade-left">
            <div
                class="intro__list border-theme"
                :class="{ 'is-active': openList }"
            >
                <div class="intro__list-top">
                    <div class="intro__nav">
                        <div
                            class="intro__nav-link"
                            :class="{ 'is-active': activeTab === 'Popular' }"
                            @click="activeTab = 'Popular'"
                        >
                            Popular
                        </div>
                        <div
                            class="intro__nav-link"
                            :class="{ 'is-active': activeTab === 'New' }"
                            @click="activeTab = 'New'"
                        >
                            New Listing
                        </div>
                    </div>
                    <div
                        class="intro__text color-theme"
                        @click="openList = !openList"
                    >
                        {{ openList ? "Hide all" : "View all" }}
                    </div>
                </div>
                <div class="intro__list-center">
                    <div
                        class="intro__tab"
                        :class="{ 'is-active': activeTab === 'Popular' }"
                    >
                        <div class="intro__tab-item" v-for="item in list">
                            <div class="intro__tab-content">
                                <div class="intro__tab-ico">
                                    <svg-icon :name="item.name" />
                                </div>
                                <div class="intro__tab-name">
                                    {{ item.name }}
                                </div>
                                <div
                                    class="intro__tab-sname font-weight--300 for-desktop"
                                >
                                    {{ item.sName }}
                                </div>
                            </div>
                            <div class="intro__tab-price font-weight--300">
                                {{ item.price }}
                            </div>

                            <div class="intro__tab-percent font-weight--300">
                                {{ item.percent }}
                            </div>
                        </div>
                    </div>

                    <div
                        class="intro__tab is-hidden"
                        :class="{ 'is-active': activeTab === 'New' }"
                    >
                        <div class="intro__tab-item" v-for="item in list">
                            <div class="intro__tab-content">
                                <div class="intro__tab-ico">
                                    <svg-icon :name="item.name" />
                                </div>
                                <div class="intro__tab-name">
                                    {{ item.name }}
                                </div>
                                <div
                                    class="intro__tab-sname font-weight--300 for-desktop"
                                >
                                    {{ item.sName }}
                                </div>
                            </div>
                            <div class="intro__tab-price">
                                {{ item.price }}
                            </div>

                            <div class="intro__tab-percent">
                                {{ item.percent }}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="intro__news border-theme">
                <div class="intro__news-top">
                    <CustomTitle className="title--xxs">News</CustomTitle>
                    <div
                        class="intro__text color-theme"
                        @click="openNews = !openNews"
                    >
                        {{ openNews ? "Hide all" : "View all" }}
                    </div>
                </div>
                <div
                    class="intro__news-content font-weight--300"
                    :class="{ 'is-active': openNews }"
                >
                    CoinMarketCap Resolves PENGU Token Price Display Error
                    Tether CEO Plans Hadron Integration By February Nigeria
                    Arrests Hundreds In Cryptocurrency Romance Scam
                    Cryptocurrency Market Sees $349 Million in Liquidations Over
                    24 Hours
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import Button from "../../../../components/UI/Button.vue";
import SvgIcon from "../../../../components/UI/SvgIcon.vue";
import { reactive, ref } from "vue";
import { ErrorMessage, Field, Form } from "vee-validate";

const list = reactive([
    {
        name: "BTC",
        sName: "Bitcoin",
        price: "$106,874.97",
        percent: "+0.14%",
    },
    {
        name: "ETH",
        sName: "Ethereum",
        price: "$106,874.97",
        percent: "+0.27%",
    },
    {
        name: "BNB",
        sName: "BNB",
        price: "$106,874.97",
        percent: "+7.23%",
    },
    {
        name: "XRP",
        sName: "XRP",
        price: "$106,874.97",
        percent: "+0.11%",
    },
    {
        name: "SOL",
        sName: "Solana",
        price: "$106,874.97",
        percent: "+0.89%",
    },
    {
        name: "LTC",
        sName: "Litecoin",
        price: "$106,874.97",
        percent: "+3.14%",
    },
    {
        name: "DOGE",
        sName: "Dogecoin",
        price: "$106,874.97",
        percent: "+2.88%",
    },
    {
        name: "TRON",
        sName: "Tron",
        price: "$106,874.97",
        percent: "+12.05%",
    },
    {
        name: "TRON",
        sName: "Tron",
        price: "$106,874.97",
        percent: "+12.05%",
    },
]);

const activeTab = ref("Popular");
const openList = ref(false);
const openNews = ref(false);

const onSubmit = (values) => {
    console.log(JSON.stringify(values, null, 2));
};

const validateEmail = (value) => {
    if (!value) {
        return "This field is required";
    }

    const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;

    if (!regex.test(value)) {
        return "This field must be a valid email";
    }

    // send form

    return true;
};
</script>

<style>
@import "./index.scss";
</style>
