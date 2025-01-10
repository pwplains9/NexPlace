<template>
    <Popup :open="popups.continueQR" @close="closeSignIn">
        <CustomTitle className="title--sd mb-20">Trade on the go.<br>
            Anywhere, anytime</CustomTitle>
        <div class="c-qr mb-25">
            <Image url="/images/qr.svg" />
        </div>
        <Button
            type="submit"
            className="link--color link--form"
            name="Download"
        />
    </Popup>
</template>

<script setup>

import { useHelperStore } from "../../stores/helpersStore.js";
import Popup from "../Popup/Popup.vue";
import { lockScroll } from "../../utils/lock-scroll.js";

const { baseDir, signUpOpen, popups } = useHelperStore();

const closeSignIn = () => {
    popups.continueQR = false;
    lockScroll(false, document.querySelector("body"), "body");
};

</script>

<style></style>
