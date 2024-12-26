import * as bodyScrollLock from "body-scroll-lock";
import helpers from "./helpers.js";

let dataScrollLocks;

export const lockScroll = (state, $element, name) => {
    if (typeof dataScrollLocks === "undefined") {
        dataScrollLocks = new Set();
    }

    let scrollLocks = dataScrollLocks;

    if (state) {
        if (typeof name === "string") {
            scrollLocks.add(name);
        }

        if (!helpers.isDevices()) {
            bodyScrollLock.disableBodyScroll($element, {
                reserveScrollBarGap: false,
            });
        }

        setTimeout(() => {
            document.documentElement.classList.add("is-lock-scroll");
        }, 0);
    } else {
        if (typeof name === "string") {
            scrollLocks.delete(name);
        }

        if (!helpers.isDevices()) {
            bodyScrollLock.enableBodyScroll($element);
        }

        if (!scrollLocks.size) {
            bodyScrollLock.clearAllBodyScrollLocks();

            document.documentElement.classList.remove("is-lock-scroll");
        }
    }
};

export const isScrollLocked = () => {
    return document.documentElement.classList.contains("is-lock-scroll");
};
