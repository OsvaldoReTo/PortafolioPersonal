// Variables
let nombre = document.getElementById("nombre");
let apellidos = document.getElementById("apellidos");
let correo = document.getElementById("correo");
let estado = document.getElementById("estado");
let horas = document.getElementById("hora");
let diseno = 1000;
let hosting = 1500;
let soporte = 1500;
let propaganda = 500;
let precioHora = 20;
let cardTitle = document.getElementById("cardtitle")
let resumen = document.getElementById("cardText");
let btnCotizar = document.getElementById("cotiza");
let btnEnviar = document.getElementById("enviar");
let btnImp = document.getElementById("imprimir");
const costoFijo = 1500;

resumen.innerHTML = `<thead>
<tr>
  <th scope="col">Concepto</th>
  <th scope="col">Costo ($) </th>
</tr>
</thead>`


// Validaciones
validar = (nm, apel, mail) =>{
err1 = 0; //Contador de invalidación en nombre
err2 = 0; //Contador de invalidación en apellidos
// Validación de nombre
nom = nm.value.split(" "); //Array de cada nombre
if ((isNaN(nm.value))
    ) {
        nom.forEach(element => {
            if (element.length<3){
                err1++;
            }
            n = element.split(""); //Array de cada letra en el nombre
            n.forEach(el => {
                if (!isNaN(parseInt(el))) {
                    err1++;
                }
            });
        })
} else {err1++;}

if (err1>0){
    nm.classList.remove("is-valid")
    nm.classList.add("is-invalid") 
} else {
    nm.classList.remove("is-invalid")
    nm.classList.add("is-valid")

        }
// Validación de apellido
 ape = apel.value.split(" "); //Array de cada apellido
 if ((isNaN(apel.value))
    &&
    (ape.length <= 2)
 ) {
     ape.forEach(elem => {
         if (elem.length<3){
             err2++;
         }
         a = elem.split(""); //Array de cada letra en el apellido
         a.forEach(ele => {
             if (!isNaN(parseInt(ele))) {
                 err2++;
             }
         });
     })
} else {err2++;}

if (err2>0){
    apel.classList.remove("is-valid")
    apel.classList.add("is-invalid") 
} else {
    apel.classList.remove("is-invalid")
    apel.classList.add("is-valid") 
}

// Validación de correo

if ((!mail.validity.typeMismatch)
    &&
    (mail.value.length >=10)
) {     mail.classList.remove("is-invalid")
        mail.classList.add("is-valid") 
} else {
        mail.classList.remove("is-invalid")
        mail.classList.add("is-valid")     
}

} // Función validar


 // Botón Cotizar

btnCotizar.addEventListener("click", function cotizar(x) {
    x.preventDefault();
    validar(nombre, apellidos, correo);
    cardTitle.innerHTML= `<p> Cotización para ${nombre.value} ${apellidos.value} de ${estado.value}</p>`
    arr=[]
    let checking = document.querySelectorAll(".form-check-input")
    checking.forEach(element => {
        arr.push(element.checked)
    });
    let pagoHora = parseFloat(horas.value)*parseFloat(precioHora);
    let extras = diseno*arr[0] + hosting*arr[1] + soporte*arr[2] + propaganda*arr[3];

    resumen.innerHTML += `<tbody>
    <tr>
    <th scope="row">Costos Fijos</th>
    <td>${costoFijo}</td>
    </tr>
    <tr>
    <th scope="row">Pago por horas trabajadas</th>
    <td>${pagoHora}</td>
    </tr>
    <tr>
    <th scope="row">Extras</th>
    <td>${extras}</td>
    </tr>
    </tbody>`

    let total = costoFijo + pagoHora + extras;

    resumen.innerHTML += `<div class="alert alert-light" role="alert">
    Total: $ ${total}
  </div>`

  x.target.removeEventListener(x.type, cotizar);
    
})


// Botón Enviar

btnEnviar.addEventListener("click", function (e) {
        e.preventDefault();
        validar(nombre, apellidos, correo);

}) //Evento click

// Botón Imprimir

btnImp.addEventListener("click", function (e){
    e.preventDefault();
    window.print();
});


