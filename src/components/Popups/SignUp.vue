<template>
    <Popup :open="popups.signUpOpen" @close="closeSignUp">
        <CustomTitle className="title--sd mb-20">Sign Up</CustomTitle>
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
            </div>
            <div class="tabs__content">
                <div
                    class="tabs__item"
                    data-tab="email"
                    :class="{ 'is-active': activeTab === 'email' }"
                >
                    <SignUpEmail />
                </div>
                <div
                    class="tabs__item"
                    data-tab="phone"
                    :class="{ 'is-active': activeTab === 'phone' }"
                >
                    <SignUpPhone />
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

const { baseDir, signUpOpen, popups } = useHelperStore();

const closeSignUp = () => {
    popups.signUpOpen = false;
    lockScroll(false, document.querySelector("body"), "body");
};

const activeTab = ref("email");

const openTab = (event) => {
    activeTab.value = event.currentTarget.getAttribute("data-part");
};
</script>

<style></style>
