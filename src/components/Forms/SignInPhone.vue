<template>
    <Form @submit="onSubmit" :validation-schema="schema" v-slot="{ errors }">
        <CustomInput
            :errors="errors"
            class="mb-15"
            name="phone"
            type="number"
            label="Phone number"
        />
        <CustomInput
            :errors="errors"
            class="mb-15"
            name="password"
            type="password"
            label="Password"
            :forGot="true"
        />
        <label class="checkbox mb-25">
            <span class="checkbox__inner">
                <Field name="acceptTerms" type="checkbox" value="agree" />
                <span class="checkbox__span">
                    <svg-icon name="check" />
                </span>

                <span class="checkbox__block">
                    I agree to <a href="#" target="_blank">Terms of Service</a
                    > and <a href="#" target="_blank">Privacy Policy</a>
                </span>
            </span>

            <ErrorMessage name="agree" />

            <div class="invalid-feedback">{{ errors.acceptTerms }}</div>
        </label>

        <Button
            type="submit"
            className="link--color link--form mb-25"
            name="Sign up"
        />
        <div class="text--form text-center mb-15">Or continue with</div>
        <div class="intro__continue-buttons mb-25">
            <div class="intro__continue-button">
                <svg-icon name="google" />
                Google
            </div>
            <div class="intro__continue-button">
                <svg-icon name="apple" />
                Apple
            </div>
        </div>

        <div class="text--form text-center" >
            Don’t have an account?  <span class="color-theme" @click="closePopup">Sign up</span>
        </div>
    </Form>
</template>

<script setup>
import * as Yup from "yup";
const { baseDir, signUpOpen, popups } = useHelperStore();
import { ErrorMessage, Field, Form } from "vee-validate";
import {useHelperStore} from '../../stores/helpersStore.js';
const phoneRegExp =
    /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

const schema = Yup.object().shape({
    phone: Yup.string().matches(phoneRegExp, "Phone number is not valid"),
    acceptTerms: Yup.string().required(
        "Accept  Terms of Service and Privacy Policy is required",
    ),
    password: Yup.string().min(5).required(),

});

const onSubmit = (values) => {
    console.log(JSON.stringify(values, null, 2))
    if (JSON.stringify(values, null, 2)) {
        popups.signInOpen = false;
   }
};

const closePopup = () => {
    popups.signInOpen = false;
    popups.signUpOpen = true;
}
</script>

<style scoped></style>
