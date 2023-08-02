let caja = document.querySelector('.calculadora');
let res = document.querySelector('.res');

document.addEventListener('click', e =>{
    if(e.target.matches('.suma')){
        let numb1 = parseInt(document.getElementById("numb1").value);
        let numb2 = parseInt(document.getElementById("numb2").value);
        let resultado1 = numb1 + numb2;
       res.innerHTML = resultado1;
    }else if(e.target.matches('.resta')){
        let numb1 = parseInt(document.getElementById("numb1").value);
        let numb2 = parseInt(document.getElementById("numb2").value);
        let resultado1 = numb1 - numb2;
       res.innerHTML = resultado1;
    }else if(e.target.matches('.multiplicacion')){
        let numb1 = parseInt(document.getElementById("numb1").value);
        let numb2 = parseInt(document.getElementById("numb2").value);
        let resultado1 = numb1 * numb2;
       res.innerHTML = resultado1;   
    }else if(e.target.matches('.division')){
    let numb1 = parseInt(document.getElementById("numb1").value);
    let numb2 = parseInt(document.getElementById("numb2").value);
    let resultado1 = numb1 / numb2;
     res.innerHTML = resultado1;  
}})