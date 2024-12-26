<template>
    <Transition
        name="popup"
        @before-enter="helpers.beforeEnterOpacity"
        @enter="helpers.enter"
        @leave="helpers.leaveOpacity"
    >
        <div v-if="props.open" class="popup">
            <div class="popup__bg" @click="emits('close')"></div>
            <div class="popup__content border-theme">
                <div class="popup__close" @click="emits('close')">
                    <svg-icon name="close" />
                </div>
                <slot />
            </div>
        </div>
    </Transition>
</template>

<script setup>
import helpers from "../../utils/helpers.js";
import { onMounted, watch } from "vue";
import { lockScroll } from "../../utils/lock-scroll.js";

const props = defineProps({
    open: Boolean,
});

const emits = defineEmits(["close"]);

watch(props, () => {
    if (props.open) {
        lockScroll(true, document.querySelector("body"), "body");
    }
});
</script>

<style scoped>
@import "index.scss";
</style>
