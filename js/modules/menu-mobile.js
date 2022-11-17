export default function initMenuMobile(){

}
let button_open = document.querySelector('.button');
let ul_menu = document.querySelector('.ul-nav');
let nav = document.querySelector('.menu-nav');
let html = document.documentElement;
let events = ['click','touchstart','onclick'];
let botaoAtivo = 'data-ativo';

events.forEach((e) => button_open.addEventListener(e,openmenu));
function openmenu(){
    this.nextElementSibling.classList.toggle('ativo');//ou ul_menu.classList.add('ativo');
    initClickoutside(this);
    //!ul_menu.classList.contains('ativo') ? this.removeAttribute(botaoAtivo) : this.setAttribute(botaoAtivo,'');
    if(!ul_menu.classList.contains('ativo')){
        this.removeAttribute(botaoAtivo);
       // events.forEach((e) => button_open.removeEventListener(e,openmenu));
    }
    else
        this.setAttribute(botaoAtivo,'');
}

function initClickoutside(elemento){
   if(!elemento.hasAttribute(botaoAtivo) && !elemento.hasAttribute('aux')){
        events.forEach(e => html.addEventListener(e,outsideclick));
        function outsideclick(event){ 
            if(!nav.contains(event.target)){
                ul_menu.classList.remove('ativo');
                events.forEach((e) => ul_menu.removeEventListener(e,outsideclick));//SEMPRE VERIFICAR SE O EVENTO É ACUMULADO E REMOVER!
                elemento.removeAttribute(botaoAtivo);
                elemento.removeAttribute('aux');
            }
        }
        elemento.setAttribute('aux','');
   }
}
