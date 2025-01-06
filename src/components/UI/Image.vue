<template>
    <img
        v-if="!props.isColor"
        :class="props.className"
        :src="props.url"
        :alt="props.alt"
    />
    <img
        v-else
        :class="props.className"
        :src="themeName ? props.url : '123'"
        :alt="props.alt"
    />
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
    name: "Image",
});
</script>
<script setup>
import { useHelperStore } from "../../stores/helpersStore.js";

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
    isColor: {
        type: Boolean,
    },
});
</script>

<style scoped></style>
