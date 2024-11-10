class MobileNavbar {
    constructor(mobileMenu, navLinks) {
        this.mobileMenu = document.querySelector(mobileMenu);  // Seleciona o ícone do menu mobile
        this.navLinks = document.querySelectorAll(navLinks);  // Seleciona os links de navegação
        this.activeClass = "active";  // Classe ativa que será adicionada aos links e ao menu
        this.nav = document.querySelector('nav'); // O menu de navegação em si
        this.handleClick = this.handleClick.bind(this);  // Garante o contexto correto
    }

    handleClick() {
        // Alterna a classe 'active' nos links
        this.navLinks.forEach((link) => {
            link.classList.toggle(this.activeClass);
        });

        // Alterna a classe 'active' no menu (para mostrar/ocultar)
        this.nav.classList.toggle(this.activeClass);
    }

    addClickEvent() {
        if (this.mobileMenu) {
            this.mobileMenu.addEventListener("click", this.handleClick);  // Adiciona o evento de clique
        }
    }

    init() {
        if (this.mobileMenu) {
            this.addClickEvent();  // Inicia o evento de clique
        }
        return this;
    }
}

// Cria a instância e passa os seletores
const mobileNavbar = new MobileNavbar(
    ".mobile-menu",  // Seleciona o ícone do menu mobile
    ".menu-links"    // Seleciona os links de navegação dentro do menu
);

// Inicializa a instância
mobileNavbar.init();
