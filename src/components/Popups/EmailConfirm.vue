<template>
    <Popup :open="popups.emailConfigOpen" @close="closeSignUp">
        <CustomTitle className="title--sd mb-20"
            >Email Confirmation</CustomTitle
        >
        <div class="text mb-25">
            To complete the registration, follow the instructions sent in the
            email to the email address you specified
        </div>
        <Button
            @click="closeSignUp"
            className="link--color link--form"
            name="Got it"
        />
    </Popup>
</template>

<script setup>
import { useHelperStore } from "../../stores/helpersStore.js";
import Popup from "../Popup/Popup.vue";
import { lockScroll } from "../../utils/lock-scroll.js";

const { baseDir, signUpOpen, popups } = useHelperStore();

const closeSignUp = () => {
    popups.emailConfigOpen = false;
    lockScroll(false, document.querySelector("body"), "body");
};
</script>

<style></style>
