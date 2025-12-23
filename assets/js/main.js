// animation of the (main) header
const mainHeader = document.getElementById("main-header");

let lastScroll = 0;
let isTicking = false;

window.addEventListener("scroll", () => {
    if (!isTicking) {
        window.requestAnimationFrame(() => {
            const currentScroll = window.scrollY;
            const threshold = 50;

            if (currentScroll <= 0) {
                mainHeader.classList.remove("scroll-down");
            }
            else if (currentScroll > lastScroll && currentScroll > threshold) {
                mainHeader.classList.add("scroll-down");
            }
            else if (currentScroll < lastScroll) {
                mainHeader.classList.remove("scroll-down");
            }

            lastScroll = currentScroll;
            isTicking = false;
        });

        isTicking = true;
    }
});