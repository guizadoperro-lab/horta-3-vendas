/* =========================================================
   HORTA DO 3º VENDAS
   SCRIPT.JS
========================================================= */


/* =========================================================
   ELEMENTOS DO MENU
========================================================= */

const menuBtn = document.getElementById("menuBtn");
const closeBtn = document.getElementById("closeBtn");
const sideMenu = document.getElementById("sideMenu");
const overlay = document.getElementById("overlay");


/* =========================================================
   ABRIR MENU
========================================================= */

function openMenu() {

    if (!sideMenu || !overlay || !menuBtn) {
        return;
    }

    sideMenu.classList.add("open");

    overlay.classList.add("show");

    document.body.classList.add("menu-open");

    menuBtn.setAttribute(
        "aria-expanded",
        "true"
    );

    menuBtn.setAttribute(
        "aria-label",
        "Fechar menu"
    );
}


/* =========================================================
   FECHAR MENU
========================================================= */

function closeMenu() {

    if (!sideMenu || !overlay || !menuBtn) {
        return;
    }

    sideMenu.classList.remove("open");

    overlay.classList.remove("show");

    document.body.classList.remove("menu-open");

    menuBtn.setAttribute(
        "aria-expanded",
        "false"
    );

    menuBtn.setAttribute(
        "aria-label",
        "Abrir menu"
    );
}


/* =========================================================
   EVENTO DO BOTÃO DO MENU
========================================================= */

if (menuBtn) {

    menuBtn.addEventListener(
        "click",
        () => {

            const menuIsOpen =
                sideMenu.classList.contains("open");

            if (menuIsOpen) {
                closeMenu();
            } else {
                openMenu();
            }

        }
    );
}


/* =========================================================
   BOTÃO FECHAR
========================================================= */

if (closeBtn) {

    closeBtn.addEventListener(
        "click",
        closeMenu
    );

}


/* =========================================================
   CLICAR NO FUNDO ESCURO FECHA O MENU
========================================================= */

if (overlay) {

    overlay.addEventListener(
        "click",
        closeMenu
    );

}


/* =========================================================
   TECLA ESC FECHA O MENU
========================================================= */

document.addEventListener(
    "keydown",
    (event) => {

        if (
            event.key === "Escape" &&
            sideMenu &&
            sideMenu.classList.contains("open")
        ) {

            closeMenu();

        }

    }
);


/* =========================================================
   FECHAR MENU AO CLICAR EM UM LINK
========================================================= */

const menuLinks = document.querySelectorAll(".menu-link");

menuLinks.forEach((link) => {
    link.addEventListener("click", () => {
        closeMenu();
    });
});


/* =========================================
   ITEM ATIVO DO MENU
========================================= */

const currentPage =
    window.location.pathname
        .split("/")
        .pop()
        .toLowerCase();

menuLinks.forEach((link) => {

    const linkPage =
        link.getAttribute("href")
            .split("/")
            .pop()
            .toLowerCase();

    link.classList.remove("active");

    if (
        linkPage === currentPage ||
        (
            currentPage === "" &&
            linkPage === "index.html"
        )
    ) {
        link.classList.add("active");
    }

});

menuLinks.forEach(
    (link) => {

        link.addEventListener(
            "click",
            () => {

                closeMenu();

            }
        );

    }
);


/* =========================================================
   ANIMAÇÃO DE ENTRADA DOS ELEMENTOS
========================================================= */

const animatedElements =
    document.querySelectorAll(".fade-in");


/*
    O IntersectionObserver verifica quando
    um elemento aparece na tela.
*/

if (
    animatedElements.length > 0 &&
    "IntersectionObserver" in window
) {

    const observer =
        new IntersectionObserver(
            (entries) => {

                entries.forEach(
                    (entry) => {

                        if (
                            entry.isIntersecting
                        ) {

                            entry.target.classList.add(
                                "visible"
                            );

                            observer.unobserve(
                                entry.target
                            );

                        }

                    }
                );

            },
            {
                threshold: 0.15
            }
        );


    animatedElements.forEach(
        (element) => {

            observer.observe(element);

        }
    );

}


/* =========================================================
   FALLBACK PARA NAVEGADORES SEM
   INTERSECTIONOBSERVER
========================================================= */

else {

    animatedElements.forEach(
        (element) => {

            element.classList.add(
                "visible"
            );

        }
    );

}


/* =========================================================
   ANO AUTOMÁTICO
========================================================= */

const currentYear =
    document.querySelector(".current-year");

if (currentYear) {

    currentYear.textContent =
        new Date().getFullYear();

}


/* =========================================================
   LOG DO PROJETO
========================================================= */

console.log(
    "🌱 Horta do 3º Vendas carregada com sucesso!"
);