const kg = document.getElementById('kg')
const mtr = document.getElementById('mtr')
const btn = document.getElementById('btn');
const amarillo = document.getElementById('amarillo');
const verde = document.getElementById('verde');
const naranja = document.getElementById('naranja');
const rojo = document.getElementById('rojo');
const error = document.getElementById('error');




btn.addEventListener('click', ()=>{
   let imc = kg.value / (mtr.value * mtr.value);
   console.log(imc);

   if(imc == NaN || imc == Infinity || imc == -Infinity  || kg.value=='' || mtr.value==''|| imc == 0
   || kg.value <= 0 || mtr.value<=0){
    //alert('Ingrese datos validos')
    error.innerHTML = 'Ingrese datos validos'
   }
   else if (imc <= 18.4){
    amarillo.style.background = 'yellow'
    verde.style.background = 'white'
    naranja.style.background = 'white'
    rojo.style.background = 'white'
    error.innerHTML = ''
   }
   else if (imc > 18.4  && imc <= 24.9){
    amarillo.style.background = 'white'
    verde.style.background = 'green '
    naranja.style.background = 'white'
    rojo.style.background = 'white'
    error.innerHTML = ''
   }
   else if (imc >= 25  && imc <= 29.9){
    amarillo.style.background = 'white'
    verde.style.background = 'white'
    naranja.style.background = 'orange'
    rojo.style.background = 'white'
    error.innerHTML = ''
   }
   else if (imc >= 30){
    amarillo.style.background = 'white'
    verde.style.background = 'white'
    naranja.style.background = 'white'
    rojo.style.background = 'red'
    error.innerHTML = ''
   }

})