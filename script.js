document.addEventListener("DOMContentLoaded", function () {
    const navbar = document.querySelector("nav");
    let lastScrollY = window.scrollY;
    let isScrollingDown = false;

    function handleScroll() {
        const currentScrollY = window.scrollY;

        if (currentScrollY === 0) {
            navbar.classList.remove("scrolled", "hidden"); // Show navbar at top
            navbar.classList.add("visible");
        } else if (currentScrollY > lastScrollY) {
            // User is scrolling down
            isScrollingDown = true;
            navbar.classList.add("hidden"); // Hide navbar
        } else {
            // User is scrolling up
            isScrollingDown = false;
            navbar.classList.remove("hidden");
            navbar.classList.add("scrolled", "visible");
        }

        lastScrollY = currentScrollY;
    }

    window.addEventListener("scroll", handleScroll);
});
