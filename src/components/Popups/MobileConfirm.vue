<template>
    <Popup :open="popups.phoneConfigOpen" @close="closeSignUp">
        <CustomTitle className="title--sd mb-20"
            >Phone Confirmation</CustomTitle
        >
        <div class="text mb-15">
            To confirm the phone number change, enter the confirmation code sent in an SMS to the number you specified
        </div>
        <div class="mobile-inputs mb-10">
            <input type="number">
            <input type="number">
            <input type="number">
            <input type="number">
            <input type="number">
            <input type="number">
        </div>
        <div class="mobile-timer mb-15">Send code again <span>00:57</span></div>
        <Button
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
    popups.phoneConfigOpen = false;
    lockScroll(false, document.querySelector("body"), "body");
};
</script>

<style></style>
