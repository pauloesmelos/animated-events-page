export default function initDateHour(){

}
const day = document.querySelector('[data-dia]').dataset.dia.split(',').map(Number);
const hour = document.querySelector('[data-horario]').dataset.horario.split(',').map(Number);
const liInformacao = document.querySelector('[data-dia]');//ou [data-horario] tbm !

function checkTime(){
    if(day.length && hour.length){
        let data = new Date();
        let hournow = data.getHours();
        let daynow = data.getDay();//dia da semana (0 === domingo, 1 === segunda etc)
        
        let isOpen = (day.includes(daynow) && (hournow >= hour[0] && hournow < hour[1]));
        isOpen ? liInformacao.classList.add('ativo') : undefined;
    }
}
checkTime();