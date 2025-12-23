const header = document.getElementById("main-header");
const usedClass = "scroll-down";
let lastScroll = 0;
let isTicking = false;

/**
 * Sticky header animation
 * ---
 * The header **disappears** when _scrolling down_.
 * 
 * The header **appears** when _scrolling up_.
 */
window.addEventListener("scroll", () => {
    if (!isTicking) {
        window.requestAnimationFrame(() => {
            const currentScroll = window.scrollY;
            const threshold = 50;

            if (currentScroll <= 0 || currentScroll <= lastScroll) {
                header.classList.remove(usedClass);
            } else if (currentScroll > lastScroll && currentScroll > threshold) {
                header.classList.add(usedClass);
            }

            lastScroll = currentScroll;
            isTicking = false;
        });

        isTicking = true;
    }
});


const main = document.getElementById("main-block")
/**
 * Position the main block correctly after the header.
 * ---
 * The position is calculated based on the _size of the header_ and
 * updated by **reloading** and **resizing** the page.
 */
function FixMainPosition() {
    const headerHeight = header.offsetHeight;
    const extraSpace = 45;
    const unit = "px";

    main.style.top = headerHeight + extraSpace + unit;
}

window.addEventListener("load", FixMainPosition);
window.addEventListener("resize", FixMainPosition);