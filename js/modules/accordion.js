//accordion list
export default function accordionlist(){
    let dds = document.querySelectorAll('dd');
    let dts = document.querySelectorAll('dt');
    if(dds && dts){
        dds.forEach((e) => e.classList.add('hidden'));
        dds[0].classList.add('showdd');

        function setddFromdt(){
            this.nextElementSibling.classList.toggle('showdd');
        }
        dts.forEach((e,i) => {
            e.addEventListener('click',setddFromdt);
        });
    }
}