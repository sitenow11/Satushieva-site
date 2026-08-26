const sections = document.querySelectorAll("main section");
const links = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop;

        if (window.scrollY >= sectionTop - 180) {
            current = section.getAttribute("id");
        }

    });

    links.forEach(link => {

        link.style.background = "";

        if (link.getAttribute("href") === "#" + current) {
            link.style.background = "#a88755";
        }

    });

});