//navegação por tabs
export default function navtabs(){
    let sections = document.querySelectorAll('.desc section');
    let images = document.querySelectorAll('.ul-imagens img');

    images.forEach((e) => e.style.cssText = 'cursor: pointer;');//testando passar css via js

    if(sections && images){
        sections.forEach((e) => e.classList.add('hidden'));
        if(sections[0].dataset.show === 'down')
            sections[0].classList.add('showdown');
        else
            sections[0].classList.add('showright');

        function setsection(index){
            sections.forEach((e) => e.classList.remove('showright'));
            sections.forEach((e) => e.classList.remove('showdown'));
            sections[index].dataset.show === 'down' ? sections[index].classList.add('showdown') : undefined;
            sections[index].dataset.show ==='right' ? sections[index].classList.add('showright') : undefined;
        }

        images.forEach((e,i) => e.addEventListener('click', () => {//pegando o elemento e indice da imagem clicada
            setsection(i);
        }));
    }
}