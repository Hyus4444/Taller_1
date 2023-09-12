var posY = 0
var gravedad = 9.8
var tiempo = 100
var velocidad = 0
var nombre=''
let planeta= new Map();

planeta.set("luna", 18.9)
planeta.set("jupiter", 1.9)
planeta.set("marte", 3.9)
planeta.set("mercurio", )
planeta.set("saturno", 5.9)
planeta.set("tierra", 5.9)

function simulacion(nombrePlaneta) { 
    $( ".fondo" ).removeClass(nombre).addClass(nombrePlaneta)   
    $("#titulo >h1").append(planeta.get(nombrePlaneta))
    nombre=nombrePlaneta
    $(".fondo").addClass(nombrePlaneta);
    console.log(planeta.get(nombrePlaneta))

    $("#object").on("click", 
    function () {
        interval = setInterval(
        function () {        
        document.querySelector("#object").style.marginTop = posY + 'px'        
        posY+=5
        if (posY >= 320) {
            posY = 0
            clearInterval(interval)
        }

    }, planeta.get(nombrePlaneta) *10);
})
    
}
    


function reiniciar() {
    posY = 0
    $(".fondo").removeClass(nombre).addClass("fondo");        
    clearInterval(interval)
    document.querySelector("#object").style.marginTop = '0px'
}









