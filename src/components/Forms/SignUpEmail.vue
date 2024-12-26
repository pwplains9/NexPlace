<template>
    <Form @submit="onSubmit" :validation-schema="schema" v-slot="{ errors }">
        <CustomInput
            :errors="errors"
            class="mb-15"
            name="email"
            type="email"
            label="Email"
        />
        <CustomInput
            :errors="errors"
            class="mb-15"
            name="password"
            type="password"
            label="Password"
        />
        <CustomInput
            :errors="errors"
            class="mb-25"
            name="passwordConfirmation"
            type="password"
            label="Confirm Password"
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

        <div class="text--form text-center">
            Have an account?
            <span class="color-theme" @click="closePopup">Sign in</span>
        </div>
    </Form>
</template>

<script setup>
import * as Yup from "yup";
import { ErrorMessage, Field, Form } from "vee-validate";
import { useHelperStore } from "../../stores/helpersStore.js";
const { baseDir, signUpOpen, popups } = useHelperStore();
const schema = Yup.object().shape({
    acceptTerms: Yup.string().required(
        "Accept  Terms of Service and Privacy Policy is required",
    ),
    email: Yup.string().required().email(),
    password: Yup.string().min(5).required(),
    passwordConfirmation: Yup.string()
        .required("Confirm Password")
        .oneOf([Yup.ref("password")], "Passwords do not match"),
});

const onSubmit = (values) => {
    if (JSON.stringify(values, null, 2)) {
        popups.signUpOpen = false;
        popups.emailConfigOpen = true;
    }
};

const closePopup = () => {
    popups.signInOpen = true;
    popups.signUpOpen = false;
};
</script>

<style scoped></style>
