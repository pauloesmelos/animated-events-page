export default function initAnimateNumbers(){
    console.log('anima');
    const text = document.querySelectorAll('[data-anima="numero"]');
    function animatenumbers(){
        if(text.length){
            text.forEach((e) => {
                const toNumber = +e.innerText;
                let contador = 0;

                let interval = setInterval(() => {
                    contador += Math.ceil(toNumber / 100);
                    e.innerText = contador;

                    if(contador > toNumber){
                        clearInterval(interval);
                        e.innerText = toNumber;
                    }
                },100 * Math.random());//anima um elemento num tempo diferente do outro
            });
        }
    }
    function callback(mutations){
        mutations.forEach((e) => {
            //console.log(e.target.classList.contains('showsection'));
            if(e.target.classList.contains('showsection')){
                animatenumbers();
                observador.disconnect();
            }
        });
    }
    let sectionalvo = document.getElementById('numeros');
    let observador = new MutationObserver(callback);
    observador.observe(sectionalvo,{
        attributes: true,
        attributeOldValue: true,
    });
}
