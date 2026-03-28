// header scroll change start

document.addEventListener("DOMContentLoaded", function () {

    const header = document.getElementById("mainHeader");
    const links = document.querySelectorAll(".menu-link");

    function handleScroll() {

        // Only apply if screen width < 992px
        if (window.innerWidth > 992) {

            if (window.scrollY > 50) {

                header.classList.remove("bg-transparent");
                header.classList.add("bg-white/95", "backdrop-blur-md", "shadow-lg", "shadow-gray-200/50");

                links.forEach(link => {
                    link.classList.remove("text-white", "hover:text-pink-400");
                    link.classList.add("text-gray-700", "hover:text-pink-600");
                });

            } else {

                header.classList.add("bg-transparent");
                header.classList.remove("bg-white/95", "backdrop-blur-md", "shadow-lg", "shadow-gray-200/50");

                links.forEach(link => {
                    link.classList.add("text-white", "hover:text-pink-400");
                    link.classList.remove("text-gray-700", "hover:text-pink-600");
                });

            }

        } else {
            // Desktop pe always transparent rakho
            header.classList.add("bg-white");
            header.classList.remove("bg-white/95", "backdrop-blur-md", "shadow-lg", "shadow-gray-200/50");

            links.forEach(link => {
                link.classList.add("text-white", "hover:text-pink-400");
                link.classList.remove("text-gray-700", "hover:text-pink-600");
            });
        }
    }

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleScroll);

});
// header scroll change end















// hover open in web
const menuBtn = document.getElementById("mobileMenuBtn");
const mobileMenuBtn = document.getElementById("mobileMenu");

menuBtn.addEventListener("click", function () {
    mobileMenuBtn.classList.toggle("hidden");
});


// mobile resp.. opne acc
document.addEventListener("DOMContentLoaded", function () {
    const buttons = document.querySelectorAll("#mobile-drop-btn");
    buttons.forEach(function (btn) {
        btn.addEventListener("click", function () {
            const content = btn.parentElement.querySelector("#mobile-drop-content");
            const arrow = btn.querySelector(".lucide-chevron-down");
            content.classList.toggle("hidden");
            arrow.classList.toggle("rotate-180");
        });
    });
});











