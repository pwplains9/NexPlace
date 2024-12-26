<template>
    <img :class="props.className" :src="props.url" :alt="props.alt" />
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
    name: "Image",
});
</script>
<script setup>
const props = defineProps({
    url: {
        type: String,
        required: true,
    },
    alt: {
        type: String,
        default: "image",
    },
    className: {
        type: String,
        default: "image",
    },
});
</script>

<style scoped></style>
