export default function initModal(){

}
let login = document.querySelector('[data-modal="entrar"]');
let close = document.querySelector('[data-modal="sair"]');
let sectionmodal = document.querySelector('[data-modal="section-modal"]');

if(login && close && sectionmodal){
    function controllingModal(event){
        event.preventDefault();
        sectionmodal.classList.toggle('ativo');
    }
    function closeBySection(event){
        if(event.target.dataset.modal === 'section-modal')
            sectionmodal.classList.remove('ativo');
    }
    login.addEventListener('click',controllingModal);
    close.addEventListener('click',controllingModal);
    sectionmodal.addEventListener('click',closeBySection);
}