export default function initDropDown(){

}
let li_dropdown = document.querySelectorAll('[data-dropdown]');
let menu_dropdown = document.querySelectorAll('.menu-dropdown');
let eventos = ['click','touchstart'];

eventos.forEach((e) => {
    li_dropdown.forEach((elemento) => elemento.addEventListener(e,active));
});
function active(event){

    event.preventDefault();
    if(event.target.nextElementSibling){
        event.target.nextElementSibling.classList.toggle('active');
        outsideClick(this);
    }   
}

/*clique fora do drodpwn fecha o menu*/
function outsideClick(elemento){
    const estado = 'data-dpAtivo';//impede vários eventos serem chamados juntos
    let html = document.documentElement;
    if(!elemento.hasAttribute(estado)){
        eventos.forEach((e) => {
            html.addEventListener(e,activeOutside);
            elemento.setAttribute(estado,'');
        });
       function activeOutside(event){
            if(!elemento.contains(event.target)){
                menu_dropdown.forEach(menu => menu.classList.remove('active'));
                eventos.forEach(events => html.removeEventListener(events,activeOutside));
                elemento.removeAttribute(estado);
            }
       }
    } 
}