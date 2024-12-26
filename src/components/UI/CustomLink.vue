<template>
    <a :href="props.link" :class="'link ' + props.className"
        >{{ props.name }}
        <!--        <svg-icon v-if="props.arrow" name="arrow"/>-->
    </a>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
    name: "CustomLink",
});
</script>
<script setup>
import SvgIcon from "@/components/UI/SvgIcon.vue";

const props = defineProps({
    name: {
        type: String,
        required: true,
    },
    className: {
        type: String,
        default: "link--simple",
    },
    link: {
        type: String,

        default: "#",
    },
    arrow: {
        type: Boolean,
    },
});
</script>

<style scoped></style>
