<template>
    <div class="input">
        <div class="input__top">
            <label>{{ props.label }}</label>
            <div v-if="props.forGot" class="input__forgot">Forgot password</div>
        </div>

        <div class="input__control">
            <Field
                :id="props.name"
                value=""
                :name="props.name"
                v-if="props.type !== 'password'"
                :type="props.type"
                :placeholder="props.name"
            />
            <Field
                :name="props.name"
                v-else
                :type="!passToggle ? 'password' : 'text'"
                placeholder="Password"
            />
            <div
                class="input__ico"
                v-if="props.type === 'password'"
                @click="passToggle = !passToggle"
            >
                <svg-icon v-if="!passToggle" name="hide" />
                <svg-icon v-else name="view" />
            </div>
            <div class="invalid-feedback">{{ props.errors[props.name] }}</div>
        </div>
    </div>
</template>

<script>
export default {
    name: "CustomInput",
};
</script>

<script setup>
import { ref } from "vue";
import { ErrorMessage, Field, Form } from "vee-validate";

const props = defineProps({
    type: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    errors: {
        type: String,
        required: true,
    },
    label: {
        type: String,
        required: true,
    },
    forGot: {
        type: Boolean,
    },
});

const passToggle = ref(false);
</script>

<style scoped></style>
