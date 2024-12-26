<template>
    <div :class="'title ' + props.className"><slot></slot></div>
</template>
<script>
import { defineComponent } from "vue";

export default defineComponent({
    name: "CustomTitle",
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
