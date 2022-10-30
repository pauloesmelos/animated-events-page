//efeito de aparecer section no scroll do mouse
export default function sectionsmooth(){
    let sections = document.querySelectorAll('.js-section');
    sections[0].classList.add('showsection');
    window.addEventListener('scroll',() => {
        sections.forEach((e) => {
            let position = e.getBoundingClientRect().top;
            let halfscreen = window.innerHeight * 0.6;    
            //console.log('elemento: ' + e.getAttribute('id') +',posição: ' + position);    
            
            if((position - halfscreen) < 0){
                e.classList.add('showsection');
                //console.log(position);
            }
            else if(position > window.innerHeight * 0.9)//testa se a distância até o topo da seção é maior que a altura da janela do cliente, ou seja, se for verdadeiro, nós passamos por completo pela seção e estamos acima dela!!
                e.classList.remove('showsection');
        });
    })
}
