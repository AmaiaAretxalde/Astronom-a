let fechaFech = '';
let fecha = '';
let fechaLimite = new Date(year,month-1,day);
arrayFecha = [];
function recogerFecha() {
    let year = parseInt(document.getElementById('year').value);
    let month = parseInt(document.getElementById('month').value);
    let day = parseInt(document.getElementById('day').value);
    fecha = new Date(year, month - 1, day);
    arrayFecha.push(fecha);

    for (let i = -1; i > -15; i--) {
        fechaLimite = /*new Date*/fecha.setDate(fecha.getDate() - i);
        console.log(fechaLimite.year, fechaLimite.month, fechaLimite.day);
    }
}


//fechaFech='https://api.nasa.gov/planetary/apod?api_key=GujhtXFNEICaLGFpFXQOibuOYY5bNpRCiwh0bfbu&date=';