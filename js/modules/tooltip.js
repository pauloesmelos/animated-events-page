export default function initTooltip(){

}
let div_tooltip;
let section_tooltip = document.querySelector('[data-tooltip]');
section_tooltip.addEventListener('mouseover',mouseOver);

function mouseOver(event){//event: MouseEvent
    div_tooltip = createDiv(this);//object html

    mouseLeave.removeElement = div_tooltip;//criado a propriedade pro objeto de callback
    mouseLeave.tooltip = this;

    mouseMove.positiontooltip = div_tooltip;//mouseMove só precisa receber a div que vamos posicionar sobre a imagem
    this.addEventListener('mouseleave',mouseLeave);
    this.addEventListener('mousemove',mouseMove);

}
function createDiv(event){//usar o event captura o this passado como parametro acima(div tooltip que chama a função mouseOver)
   let newtooltip = document.createElement('div');
   newtooltip.classList.add('tooltip');
   newtooltip.innerText = event.getAttribute('aria-label');
   document.body.appendChild(newtooltip);
   return newtooltip;
}
const mouseLeave = {
    handleEvent(){
        this.removeElement.remove();
        this.tooltip.removeEventListener('mouseleave',mouseLeave);//boa prática remover o evento quando não é usado
        this.tooltip.removeEventListener('mousemove',mouseMove);
    }
}
const mouseMove = {
    handleEvent(event){
        this.positiontooltip.style.top = event.pageY + 20 + 'px';//se não capturar o event como evento e sim pegá-lo como propriedade o efeito congela!!!
        this.positiontooltip.style.left = event.pageX + 20 + 'px';
    }
}
