<template>
    <button :class="'button ' + props.className">
        {{ props.name }} <svg-icon v-if="props.arrow" name="arrow" />
    </button>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
    name: "Button",
});
</script>
<script setup>
const props = defineProps({
    name: {
        type: String,
        required: true,
    },
    className: {
        type: String,
        required: true,
        default: "button--simple",
    },
    arrow: {
        type: Boolean,
    },
});
</script>

<style scoped></style>
