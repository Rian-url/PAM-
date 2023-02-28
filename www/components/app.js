// This is a JavaScript file

function ola() {
    alert('linda');
}

function calcularConsumo() {
 const km = document.getElementById("NUM1").value;
 const gas = document.getElementById("NUM2").value;

 var result = km / gas

 const text = document.getElementById("content").innerHTML = result + 'KM/L';
}


