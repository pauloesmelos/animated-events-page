export default function initBitcoin(){

}
//fazer com then ou com async/await
const url = 'https://www.blockchain.com/ticker';
const btc = document.querySelector('.btc');

async function fetchBtc(caminho){
    try{
        const response = await fetch(caminho);
        const json = await response.json();
        btc.innerText = (100 / json.BRL.buy).toFixed(5);
    }
    catch(erro){
        window.alert(erro);
    }
}
fetchBtc(url);