import * as bodyScrollLock from "body-scroll-lock";
import { gsap } from "gsap";

let helpers = {
    $document: document,
    $html: document.querySelector("html"),
    isSafari: () =>
        document.documentElement.classList.contains("is-browser-safari") ||
        document.documentElement.classList.contains("is-browser-mobile-safari"),
    isDevices: () => innerWidth <= 1024,
    clearText: (text) => text.trim().replace(/\s+/g, " "),
    beforeEnter: (el) => {
        gsap.set(el, {
            yPercent: -75,
        });
    },

    beforeEnterOpacity: (el) => {
        gsap.set(el, {
            autoAlpha: 0,
        });
    },

    enter: (el) => {
        gsap.to(el, {
            duration: 1,
            autoAlpha: 1,
            ease: "power4.out",
        });
    },

    leave: (el, done) => {
        gsap.to(el, {
            duration: 1,
            yPercent: 50,
            autoAlpha: 0,
            ease: "power2.inOut",
            onComplete: done,
        });
    },

    leaveOpacity: (el, done) => {
        gsap.to(el, {
            duration: 1,
            autoAlpha: 0,
            ease: "power2.inOut",
            onComplete: done,
        });
    },
};

let dataScrollLocks;

helpers.lockScroll = (state, $element, name) => {
    const element = $element.get(0) ? $element.get(0) : $element;

    if (typeof dataScrollLocks === "undefined") {
        dataScrollLocks = new Set();
    }

    let scrollLocks = dataScrollLocks;

    if (state) {
        if (typeof name === "string") {
            scrollLocks.add(name);
        }

        bodyScrollLock.disableBodyScroll(element, {
            reserveScrollBarGap: true,
        });

        setImmediate(() => {
            helpers.$html.classList.add("is-lock-scroll");
        });
    } else {
        if (typeof name === "string") {
            scrollLocks.delete(name);
        }

        bodyScrollLock.enableBodyScroll(element);

        if (!scrollLocks.size) {
            bodyScrollLock.clearAllBodyScrollLocks();

            helpers.$html.classList.remove("is-lock-scroll");
        }
    }
};

export default helpers;
