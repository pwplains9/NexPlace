<template>


    <div class="popup__qr mb-25">
        <Image url="/images/qr.svg"/>
        <!-- place QR-->
    </div>

    <div class="popup_stitle mb-15">Scan with your NexPlace App</div>
    <div class="popup_stext mb-25">Don't have the Bybit app yet? Scan the QR code above to download the latest
        version</div>

    <CustomLink
        href="#"
        type="submit"
        className="link--color link--form mb-25"
        name="Download App"
    />

    <div class="text--form text-center">
        Don’t have an account? <span class="color-theme" @click="closePopup">Sign up</span>
    </div>
</template>

<script setup>
import * as Yup from 'yup';
import {useHelperStore} from '../../stores/helpersStore.js';
import Image from '../UI/Image.vue';
import CustomLink from '../UI/CustomLink.vue';

const {
    baseDir,
    signUpOpen,
    popups,
} = useHelperStore();
const phoneRegExp =
    /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

const schema = Yup.object()
    .shape({
        phone: Yup.string()
            .matches(phoneRegExp, 'Phone number is not valid'),
        acceptTerms: Yup.string()
            .required(
                'Accept  Terms of Service and Privacy Policy is required',
            ),
        password: Yup.string()
            .min(5)
            .required(),
        passwordConfirmation: Yup.string()
            .required('Confirm Password')
            .oneOf([Yup.ref('password')], 'Passwords do not match'),
    });

const onSubmit = (values) => {
    console.log(JSON.stringify(values, null, 2));
    if (JSON.stringify(values, null, 2)) {
        popups.signInOpen = false;
        popups.phoneConfigOpen = true;
    }
};

const closePopup = () => {
    popups.signInOpen = false;
    popups.signUpOpen = true;
};
</script>

<style scoped></style>
