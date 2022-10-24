//efeito de aparecer section no scroll do mouse
export default function sectionsmooth(){
    let sections = document.querySelectorAll('.js-section');
    sections[0].classList.add('showsection');
    window.addEventListener('scroll',() => {
        sections.forEach((e) => {
            let position = e.getBoundingClientRect().top;
            let halfscreen = window.innerHeight * 0.6;
            
            if((position - halfscreen) < 0){
                e.classList.add('showsection');
                //console.log(position);
            }
        });
    })
}
