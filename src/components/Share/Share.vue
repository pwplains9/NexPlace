<template>
    <div class="share">
        <button type="button" class="share-arrow">
            <svg-icon name="arrow-up" />
        </button>
        <button type="button" class="share-btn" @click="share('vk')">
            <svg-icon name="vk" />
        </button>
        <button type="button" class="share-btn" @click="share('tg')">
            <svg-icon name="tg" />
        </button>
        <button type="button" class="share-btn" @click="share('ok')">
            <svg-icon name="ok" />
        </button>
    </div>
</template>

<script setup>
import Share from "ninelines-sharing";

const share = (social) => {
    const url = location.origin + location.pathname;

    Share[social](url);
};
</script>

<style scoped lang="scss">
@import "./style.scss";
</style>
