/*
--------------------------------------------------------------------------------
variables "const" - arrays - de las clases 'Ingreso' - 'Egresp'
Las cuales son hijas de la clase padre 'Dato'
--------------------------------------------------------------------------------
*/

//Array ingreso
const ingresos = [
    new Ingreso("coca", 100),
    new Ingreso("sixPack Heineken x 24 ", 1600),
    new Ingreso("pancho", 100)
    
];

//array egreso
const egresos = [
    new Egreso("alquiler", 900),
    new Egreso("ropa", 400),
    
];

/*
--------------------------------------------------------------------------------
variable "const" - funcionesFlecha :Para dar el formato a la moneda.
En la moneda dolar , Usd . 
--------------------------------------------------------------------------------
*/

//Funcion formatoMoneda
const formatoMoneda = (valor) => {

    return valor.toLocaleString("en-US", {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 2
    });


};

//Funcion formatoPorcentaje
const formatoPorcentaje = (valor) => {

    return valor.toLocaleString("en-US", {
        style: 'percent',
        minimumFractionDigits: 2
    });

};

/*
--------------------------------------------------------------------------------
variable "const"- funcionesFlecha : La primera nos crea el HTML , atravez de los ``.
La segunda , toma la funcion "crearIngresoHTML" .Y posteriarmente se encarga , 
de cargarlo en el index.html , en la seccion determinada
--------------------------------------------------------------------------------
*/

//Funcion crearIngresoHTML
const crearIngresoHTML = (ingreso)=>{
    let ingresoHTML = `
    <div class="elemento limpiarEstilos">
    <div class="elemento_descripcion">${ingreso.descripcion}</div>
    <div class="derecha limpiarEstilos">
        <div class="elemento_valor">+ ${formatoMoneda(ingreso.valor)}</div>
        <div class="elemento_eliminar">
            <button class='elemento_eliminar--btn'>
                <ion-icon name="close-circle-outline"></ion-icon>
            </button>
        </div>
    </div>
</div>
    `;
    
    
    return ingresoHTML;

};

//Funcion cargarIngresos
const cargarIngresos = ()=>{
    const listaIngresosId = document.getElementById("lista-ingreso");
    let ingresosHTML = "";
    for(let ingreso of ingresos){
        ingresosHTML += crearIngresoHTML(ingreso);
    }
   
    listaIngresosId.innerHTML = ingresosHTML;

    
    
};

/*
--------------------------------------------------------------------------------

--------------------------------------------------------------------------------
*/

/*
--------------------------------------------------------------------------------
variable "let" - funcionesFlecha : La primera nos calcula el totalIngresado ,
segun el array ingresos.
La siguiente funchionFlecha , tiene un objetivo similar , pero ya con otro 
total . totalEgresos
--------------------------------------------------------------------------------
*/

//Function totalIngresos
let totalIngresos = () => {
    let totalIngreso = 0;

    for (let ingreso of ingresos) {
        totalIngreso += ingreso.valor;
    }

    return totalIngreso;
};

// Function totalEgresos
let totalEgresos = () => {
    let totalEgreso = 0;

    for (let egreso of egresos) {
        totalEgreso += egreso.valor;
    }
    return totalEgreso;
};

/*
--------------------------------------------------------------------------------
variable "let" - funcionesFlecha : cargarCabecero , de plasmar , en el html , tpdas funciones , antes mencionadas . en la seccion de cabecera
--------------------------------------------------------------------------------
*/

//Function cargarCabecero
let cargarCabecero = () => {

    //Recuperando los ID , en variables  

    const presupuestoId = document.getElementById("presupuesto");

    const porcentajeId = document.getElementById("porcentaje");

    const ingresosId = document.getElementById("ingresos");

    const egresosId = document.getElementById("egresos");



    let presupuesto = totalIngresos() - totalEgresos();

    let porcentajeEgreso = totalEgresos() / totalIngresos();

    //Utilizamos innerHTML

    presupuestoId.innerHTML = formatoMoneda(presupuesto);

    ingresosId.innerHTML = formatoMoneda(totalIngresos());

    egresosId.innerHTML = formatoMoneda(totalEgresos());

    porcentajeId.innerHTML = formatoPorcentaje(porcentajeEgreso);
};

/*
--------------------------------------------------------------------------------
variable "let" - funcionesFlecha : Es la funcion ejecutable , principal , donde se ejecuta nuestra app
--------------------------------------------------------------------------------
 */

//Funcion cargarApp
let cargarApp = () => {
    
    //Funcion cargarCabecero
    cargarCabecero();

    //Funcion cargarIngresos
    cargarIngresos();

   

    
};