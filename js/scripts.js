var posY = 0
var gravedad = 0
var tiempo = 100

function simulacion() {
    interval = setInterval(function () {
        document.querySelector("#object").style.marginTop = posY + 'px'
        posY += 1
        if (posY > 320 )   {
            posY = 0
            clearInterval(interval)
            clearInterval(interval)

        }
    }, gravedad);
}

function reiniciar() {
    posY = 0
    clearInterval(interval)
    document.querySelector("#object").style.marginTop = '0px'
}

function setgrav(a) {
    switch (a) {
        case 1:
            document.querySelector("#about").style.backgroundImage= url('assets\img\Fondos\LunaBGD.jpg') 
            return gravedad = 100;

            break;
        case 2:
            return gravedad = 200;

        case 3:
            return gravedad = 10;


        case 4:
            return gravedad = 50;

        case 5:
            return gravedad = 2000;

        case 6:
            return gravedad = 1;

        default:
            break;
    }

}








