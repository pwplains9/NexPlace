<template>
    <div
        ref="item"
        class="faq__item border-theme"
        :class="{ 'is-active': props.open }"
        :style="'height:' + activeHeight + 'px'"
    >
        <div class="faq__item-top" @click="toggle">
            <div class="faq__item-title">{{ props.title }}</div>

            <div class="faq__item-arrow">
                <svg-icon v-if="!props.open" name="plus" />
                <svg-icon v-else name="minus" />
            </div>
        </div>

        <div class="faq__item-content" :class="{ 'is-active': props.open }" v-html="props.text">

        </div>
    </div>
</template>

<script setup>
import { computed, onMounted, ref } from "vue";

const props = defineProps({
    open: Boolean,
    title: String,
    text: String,
});

const item = ref(null);

let activeHeight = ref(null);

const emits = defineEmits(["open", "close"]);

const toggle = (event) => {
    if (!props.open) {
        // activeHeight = event.currentTarget.closest('.faq__item').scrollHeight + event.currentTarget.closest('.faq__item').querySelector('.faq__item-content').scrollHeight;

        console.log(activeHeight);
        emits(
            "open",
            event.currentTarget.closest(".faq__item").getAttribute("data-key"),
        );
    } else {
        emits(
            "close",
            event.currentTarget.closest(".faq__item").getAttribute("data-key"),
        );
        // activeHeight = 0;
    }
};

onMounted(() => {
    // console.log(item.value.scrollHeight)
    // activeHeight.value =  item.scrollHeight;
});
</script>

<style scoped>
@import "index.scss";
</style>
