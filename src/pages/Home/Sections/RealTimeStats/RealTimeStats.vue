<template>
    <CustomTitle
        data-aos="fade-right"
        className="title--md text-center mb-40 text-left-m mb-sm-25"
    >
        Real-Time Stats</CustomTitle
    >
    <div class="realTimeStats mb-160 mb-sm-70">
        <div class="realTimeStats__left" data-aos="fade-right">
            <div
                class="realTimeStats__item realTimeStats__item--1 border-theme"
            >
                <div class="realTimeStats__content">
                    <CustomTitle className="title--xs mb-15">
                        Volume daily</CustomTitle
                    >
                    <CustomTitle className="title--mmd">
                        $1,476,526</CustomTitle
                    >
                </div>
            </div>
        </div>
        <div class="realTimeStats__right" data-aos="fade-left">
            <div
                class="realTimeStats__item realTimeStats__item--2 border-theme"
            >
                <div class="realTimeStats__content">
                    <CustomTitle className="title--xs mb-15">
                        Listings coming</CustomTitle
                    >
                    <CustomTitle className="title--mmd"> 1,952</CustomTitle>
                </div>
            </div>

            <div
                class="realTimeStats__item realTimeStats__item--3 border-theme"
            >
                <div class="realTimeStats__content">
                    <CustomTitle className="title--xs mb-15">
                        User registered</CustomTitle
                    >
                    <CustomTitle className="title--mmd">
                        $1,476,526</CustomTitle
                    >
                </div>
            </div>

            <div
                class="realTimeStats__item realTimeStats__item--4 border-theme"
            >
                <div class="realTimeStats__content">
                    <CustomTitle className="title--xs mb-15">
                        Available assets</CustomTitle
                    >
                    <CustomTitle className="title--mmd"> 88</CustomTitle>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup></script>

<style scoped>
@import "./index.scss";
</style>
