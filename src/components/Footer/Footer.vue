<template>
    <footer class="footer">
        <div class="footer__container">
            <div class="footer__top">
                <router-link :to="baseDir" class="footer__logo">
                    <svg-icon name="logo"/>
                </router-link>

                <div class="footer__social">
                    <div class="footer__social-button">
                        <svg-icon name="apple-button"/>
                    </div>
                    <div class="footer__social-button">
                        <svg-icon name="google-button"/>
                    </div>


                </div>
            </div>
            <div class="footer__center">
                <div class="footer__col">
                    <div class="footer__title">
                        SERVICES
                    </div>
                    <ul>
                        <li v-for="item in col1">
                            <a href="">{{item.name}}</a>
                        </li>
                    </ul>
                </div>
                <div class="footer__col">
                    <div class="footer__title">
                        PRODUCTS
                    </div>
                    <ul>
                        <li v-for="item in col2">
                            <a href="">{{item.name}}</a>
                        </li>
                    </ul>
                </div>
                <div class="footer__col">
                    <div class="footer__title">
                        COMPANY
                    </div>
                    <ul>
                        <li v-for="item in col3">
                            <a href="">{{item.name}}</a>
                        </li>
                    </ul>
                </div>
                <div class="footer__col">
                    <div class="footer__title">
                        BUSINESS
                    </div>
                    <ul>
                        <li v-for="item in col4">
                            <a href="">{{item.name}}</a>
                        </li>
                    </ul>
                    <div class="footer__title">
                        LEARN
                    </div>
                    <ul>
                        <li v-for="item in col5">
                            <a href="">{{item.name}}</a>
                        </li>
                    </ul>
                </div>
                <div class="footer__col">
                    <div class="footer__title">
                        SUPPORT
                    </div>
                    <ul>
                        <li v-for="item in col6">
                            <a href="">{{item.name}}</a>
                        </li>
                    </ul>
                </div>
                <div class="footer__col">
                    <div class="footer__title">
                        LEGAL & PRIVACY
                    </div>
                    <ul>
                        <li v-for="item in col7">
                            <a href="">{{item.name}}</a>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="footer__bottom">
                <div class="footer__copyright">
                    Copyright © 2024 NexPlace - All rights reserved.
                </div>

                <div class="footer__production">
                    Desing support by
                    <a href="https://roobinium.io/" target="_blank"
                    >
                        <svg-icon name="roobinium"/>
                        roobinium.io</a
                    >
                </div>
            </div>
        </div>
    </footer>
</template>

<script setup>
import {useHelperStore} from '../../stores/helpersStore.js';
import SvgIcon from '../UI/SvgIcon.vue';

const {baseDir} = useHelperStore();

const col1 = [
    {
        url: '',
        name: 'Exchange',
    }, {
        url: '',
        name: 'Custody services',
    }, {
        url: '',
        name: 'OTC trading',
    }, {
        url: '',
        name: 'Margin trading',
    }, {
        url: '',
        name: 'Futures trading',
    }, {
        url: '',
        name: 'Options trading',
    }, {
        url: '',
        name: 'Listing services',
    }, {
        url: '',
        name: 'Lending & Borrowing',
    }, {
        url: '',
        name: 'Pre sale & capital raise',
    }, {
        url: '',
        name: 'Securities trading',
    }, {
        url: '',
        name: 'API & Websockets',
    }, {
        url: '',
        name: 'Deposits & Withdraws',
    }, {
        url: '',
        name: 'Referral',
    }, {
        url: '',
        name: 'Proof of reserves',
    },
];
const col2 = [
    {
        url: '',
        name: 'Exchange',
    }, {
        url: '',
        name: 'Mobile App',
    }, {
        url: '',
        name: 'Nexplace Pro',
    }, {
        url: '',
        name: 'Nexplace Borrow',
    }, {
        url: '',
        name: 'Learn',
    }, {
        url: '',
        name: 'Launchpad',
    },
];
const col3 = [
    {
        url: '',
        name: 'About',
    }, {
        url: '',
        name: 'Manifesto',
    }, {
        url: '',
        name: 'Careers',
    }, {
        url: '',
        name: 'Press',
    }, {
        url: '',
        name: 'Announcements',
    }, {
        url: '',
        name: 'News',
    }, {
        url: '',
        name: 'Blog',
    }, {
        url: '',
        name: 'Transparency',
    }, {
        url: '',
        name: 'Downloads',
    },
];
const col4 = [
    {
        url: '',
        name: 'Listing Application',
    }, {
        url: '',
        name: 'Institutional & Vip services',
    }, {
        url: '',
        name: 'Labs',
    },
];
const col5 = [
    {
        url: '',
        name: 'How to buy bitcoin',
    }, {
        url: '',
        name: 'Asset Tokenization from 0',
    }, {
        url: '',
        name: 'How to buy tokenized assets',
    }, {
        url: '',
        name: 'Bitcoin Halving',
    },
];
const col6 = [
    {
        url: '',
        name: 'How to buy bitcoin',
    }, {
        url: '',
        name: 'Asset Tokenization from 0',
    }, {
        url: '',
        name: 'How to buy tokenized assets',
    }, {
        url: '',
        name: 'Bitcoin Halving',
    },
];
const col7 = [
    {
        url: '',
        name: '24/7 Chat support',
    }, {
        url: '',
        name: 'Help Center',
    }, {
        url: '',
        name: 'Contact Us',
    }, {
        url: '',
        name: 'Status',
    }, {
        url: '',
        name: 'Product feedback and suggestions',
    },
];
const col8 = [
    {
        url: '',
        name: 'Privacy',
    }, {
        url: '',
        name: 'Cookies Policy',
    }, {
        url: '',
        name: 'Cookies Preferences',
    }, {
        url: '',
        name: 'Exchange Terms',
    }, {
        url: '',
        name: 'Derivates Terms',
    }, {
        url: '',
        name: 'General Terms',
    }, {
        url: '',
        name: 'Token Specific Terms',
    }, {
        url: '',
        name: 'Trading Rulebook',
    },
];
</script>

<style scoped>
@import "./index.scss";
</style>
