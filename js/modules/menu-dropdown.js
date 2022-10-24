export default function initDropDown(){

}
let li_dropdown = document.querySelectorAll('[data-dropdown]');
let menu_dropdown = document.querySelectorAll('.menu-dropdown');
let html = document.documentElement;

['click','touchstart'].forEach((e) => {
    li_dropdown.forEach((elemento) => elemento.addEventListener(e,active));
});
function active(event){
    event.preventDefault();
    event.target.nextElementSibling.classList.toggle('active');
}
/*clique fora do drodpwn fecha o menu*/
html.addEventListener('click',exitClickHtml);
function exitClickHtml(event){
    if(event.target.getAttribute('class') !== 'a-nav'){
        menu_dropdown.forEach((e) => e.classList.remove('active'));
    }
}
