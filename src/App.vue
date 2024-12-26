<script setup>
import Header from "@/components/Header/Header.vue";
import Footer from "./components/Footer/Footer.vue";
import SignUp from "./components/Popups/SignUp.vue";
import EmailConfirm from "./components/Popups/EmailConfirm.vue";
import MobileConfirm from "./components/Popups/MobileConfirm.vue";
import SignIn from "./components/Popups/SignIn.vue";
</script>

<template>
    <div class="site-container">
        <Header />
        <router-view v-slot="{ Component }">
            <transition name="fade">
                <component :is="Component" />
            </transition>
        </router-view>
    </div>
    <Footer />
    <SignUp />
    <EmailConfirm />
    <MobileConfirm />
    <SignIn />
</template>

<style scoped></style>
