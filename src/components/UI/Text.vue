<template>
    <div :class="'text ' + props.className"><slot></slot></div>
</template>
<script>
import { defineComponent } from "vue";

export default defineComponent({
    name: "Text",
});
</script>
<script setup>
const props = defineProps({
    className: {
        type: String,
        required: true,
    },
});
</script>

<style scoped></style>
