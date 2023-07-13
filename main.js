
function redondeo(valorProm) {
    return Math.round(valorProm)
}

let cantidadAlumnos = Number(prompt("Indique a cuantos alumnos quiere sacarle el promedio de sus calificaciones"));
while (isNaN(cantidadAlumnos) || (cantidadAlumnos <= 0)) {
    cantidadAlumnos = Number(prompt("Por favor ingrese un numero mayor a cero para la cantidad de alumnos"))
}

    for (let i = 1; i <= cantidadAlumnos; i++) {
        let nombreAlumno = prompt("Ingrese el nombre del alumno " + i + ":").toLocaleUpperCase();

        let calificacion1 = redondeo(Number(prompt("Ingrese la primera calificacion del alumno " + i + ":")));
            while (isNaN(calificacion1) || (calificacion1 >= 11)) {
                calificacion1 = Number(prompt("Por favor ingrese un numero del 1 al 10"))
            }

        let calificacion2 = redondeo(parseInt(prompt("Ingrese la segunda calificacion del alumno " + i + ":")));
            while (isNaN(calificacion2) || (calificacion2 >= 11)) {
                calificacion2 = Number(prompt("Por favor ingrese un numero del 1 al 10"))
            }

        let calificacion3 = redondeo(parseInt(prompt("Ingrese la tercera calificacion del alumno " + i + ":")));
            while (isNaN(calificacion3) || (calificacion3 >= 11)) {
                calificacion3 = Number(prompt("Por favor ingrese un numero del 1 al 10"))
            }  

        let promedio = redondeo((calificacion1 + calificacion2 + calificacion3) / 3);
        let mensajePromedio = "El alumno " + nombreAlumno + " tiene un promedio de " + promedio;   

        if (promedio >= 7) {
                alert("El alumno: " + nombreAlumno + " esta Aprobado");
            }
            else if (promedio < 7) {
                alert("El alumno: " + nombreAlumno + " esta Desaprobado")
            }
            else { 
                alert("ERROR: Indique números del 1 al 10")
            }
    console.log(mensajePromedio);
    }