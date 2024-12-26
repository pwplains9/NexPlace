<template>
    <Popup :open="popups.signInOpen" @close="closeSignIn">
        <CustomTitle className="title--sd mb-20">Sign In</CustomTitle>
        <div class="tabs">
            <div class="tabs__nav mb-25">
                <div
                    class="tabs__nav-link"
                    :class="{ 'is-active': activeTab === 'email' }"
                    @click="openTab"
                    data-part="email"
                >
                    Email
                </div>
                <div
                    class="tabs__nav-link"
                    :class="{ 'is-active': activeTab === 'phone' }"
                    @click="openTab"
                    data-part="phone"
                >
                    Phone number
                </div>
                <div
                    class="tabs__nav-link"
                    :class="{ 'is-active': activeTab === 'qr' }"
                    @click="openTab"
                    data-part="qr"
                >
                    QR Code
                </div>
            </div>
            <div class="tabs__content">
                <div
                    class="tabs__item"
                    data-tab="email"
                    :class="{ 'is-active': activeTab === 'email' }"
                >
                    <SignInEmail />
                </div>
                <div
                    class="tabs__item"
                    data-tab="phone"
                    :class="{ 'is-active': activeTab === 'phone' }"
                >
                    <SignInPhone />
                </div>

                <div
                    class="tabs__item"
                    data-tab="phone"
                    :class="{ 'is-active': activeTab === 'qr' }"
                >
                    <SignInQR />
                </div>
            </div>
        </div>
    </Popup>
</template>

<script setup>
import { ErrorMessage, Field, Form } from "vee-validate";
import CustomInput from "../../components/UI/CustomInput.vue";
import { useHelperStore } from "../../stores/helpersStore.js";
import Popup from "../Popup/Popup.vue";
import { lockScroll } from "../../utils/lock-scroll.js";
import { ref } from "vue";
import SignUpEmail from "../Forms/SignUpEmail.vue";
import SignUpPhone from "../Forms/SignUpPhone.vue";
import SignInEmail from "../Forms/SignInEmail.vue";
import SignInPhone from "../Forms/SignInPhone.vue";
import SignInQR from "../Forms/SignInQR.vue";

const { baseDir, signUpOpen, popups } = useHelperStore();

const closeSignIn = () => {
    popups.signInOpen = false;
    lockScroll(false, document.querySelector("body"), "body");
};

const activeTab = ref("email");

const openTab = (event) => {
    activeTab.value = event.currentTarget.getAttribute("data-part");
};
</script>

<style></style>
