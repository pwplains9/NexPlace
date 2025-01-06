import { defineStore } from "pinia";
import { computed, reactive } from "vue";

export const useHelperStore = defineStore("helperStore", () => {
    const isDesktop = computed(() => window.innerWidth > 1024);
    const isDevices = computed(() => !isDesktop.value);
    const popups = reactive({
        signUpOpen: false,
        signInOpen: false,
        emailConfigOpen: false,
        phoneConfigOpen: false,
    });

    let baseDir = import.meta.env.BASE_URL;

    let helperStore = reactive({
        themeName: false,
    });

    return {
        isDesktop: isDesktop.value,
        baseDir,
        isDevices: isDevices.value,
        popups,
        signUpOpen: popups.signUpOpen,
        signInOpen: popups.signInOpen,
        emailConfigOpen: popups.emailConfigOpen,
        phoneConfigOpen: popups.phoneConfigOpen,
        helperStore,
    };
});
