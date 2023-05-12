// @todo Add an SVG grain texture to smooth out the gradient steps.
class MobileNavBar{
    constructor(mobileMenu,navList,navLinks) {
        this.mobileMenu = document.querySelector(mobileMenu);
        this.navList = document.querySelector(navList);
        this.navLinks = document.querySelectorAll(navLinks);
        this.activeClass = "active";

        this.handleClick = this.handleClick.bind();
    }

    animateLinks(){
        this.navLinks.forEach((link,index) =>{
            link.style.animation
            ?(link.style.animation)
            :(link.style.animation =`navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`);
        });
    }

    handleClick() {
        this.navList.classList.toggle(this.activeClass);
        this.mobileMenu.classList.toggle(this.activeClass);
        this.animateLinks();
    }
    addClickEvent(){
        this.mobileMenu.addEvenListener("click", this.handleClick);
    }

    init(){
        if(this.mobileMenu){
            this.addClickEvent();
        }
        return this;
    }
}

const MobileNavBar = new MobileNavBar(
    ".mobile-menu",
    ".nav-list",
    ".nav-list li",
);
/*confifuração de formulario*/ 
const nome = document.getElementById("nome")

const email = document.querySelector(".email2")//Precisa definir o tipo do atributo
let txtNome = document.getElementById("txtNome")
function validaNome(){
    if(nome.value.length < 2){
        txtNome.innerHTML = "O nome deve ter ais de 2 caracteres"
        txtNome.style.color='red'
    }else{
    txtNome.innerHTML = "Campo preenchido corretamente"
    txtNome.style.color='green'
    }
    console.log(nome.value)
}
