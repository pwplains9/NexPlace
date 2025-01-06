<template>
    <div @click="toggleTheme" class="theme">
        <svg-icon v-if="!theme" name="sun" />
        <svg-icon v-else name="moon" />
    </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { useHelperStore } from "../../stores/helpersStore.js";

let theme = ref(null);
let { helperStore } = useHelperStore();
const toggleTheme = () => {
    theme.value = theme.value === "darkMode" ? "" : "darkMode"; //toggles theme value
    document.documentElement.setAttribute("data-theme", theme.value); // sets the data-theme attribute
    localStorage.setItem("theme", theme.value); // stores theme value on local storage

    helperStore.themeName = theme.value;
};

onMounted(() => {
    let localTheme = localStorage.getItem("theme"); //gets stored theme value if any
    document.documentElement.setAttribute("data-theme", localTheme); // updates the data-theme attribute

    theme.value = localTheme;

    helperStore.themeName = theme.value;
});
</script>

<style scoped>
@import "./index.scss";
</style>
