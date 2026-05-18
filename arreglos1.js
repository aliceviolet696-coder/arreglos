// 1. Crear los arreglos
let arregloIzquierdo = [12, 15];
let arregloDerecho = [20, 25];

// Referencias a tablas
const tablaIzquierda = document.getElementById("tablaIzquierda");
const tablaDerecha = document.getElementById("tablaDerecha");

// 2. Función agregarEdad
function agregarEdad() {
    const input = document.getElementById("edad");
    let valor = parseInt(input.value);

    if (!isNaN(valor)) {
        arregloIzquierdo.push(valor);
        input.value = "";
        pintarArregloIzquierda();
    } else {
        alert("Ingrese una edad válida");
    }
}

// Evento botón agregar
document.querySelector("button").addEventListener("click", agregarEdad);


// 3. Pintar arreglo izquierdo
function pintarArregloIzquierda() {
    tablaIzquierda.innerHTML = "";

    for (let i = 0; i < arregloIzquierdo.length; i++) {
        let fila = `
            <tr>
                <td>${arregloIzquierdo[i]}</td>
                <td>
                    <button class="btn-eliminar" onclick="eliminarIzquierdo(${i})">
                        Eliminar
                    </button>
                </td>
                <td>
                    <button class="btn-mover" onclick="moverHaciaDerecha(${i})">
                        ➜
                    </button>
                </td>
            </tr>
        `;

        tablaIzquierda.innerHTML += fila;
    }
}


// 4. Eliminar izquierdo
function eliminarIzquierdo(indice) {
    arregloIzquierdo.splice(indice, 1);
    pintarArregloIzquierda();
}


// 5. Pintar arreglo derecho
function pintarArregloDerecha() {
    tablaDerecha.innerHTML = "";

    for (let i = 0; i < arregloDerecho.length; i++) {
        let fila = `
            <tr>
                <td>
                    <button class="btn-mover" onclick="moverHaciaIzquierda(${i})">
                        ⬅
                    </button>
                </td>
                <td>${arregloDerecho[i]}</td>
                <td>
                    <button class="btn-eliminar" onclick="eliminarDerecho(${i})">
                        Eliminar
                    </button>
                </td>
            </tr>
        `;

        tablaDerecha.innerHTML += fila;
    }
}


// 6. Eliminar derecho
function eliminarDerecho(indice) {
    arregloDerecho.splice(indice, 1);
    pintarArregloDerecha();
}


// 7. Mover hacia derecha
function moverHaciaDerecha(indice) {
    let valor = arregloIzquierdo[indice];

    arregloDerecho.push(valor);
    arregloIzquierdo.splice(indice, 1);

    pintarArregloIzquierda();
    pintarArregloDerecha();
}


// 8. Mover hacia izquierda
function moverHaciaIzquierda(indice) {
    let valor = arregloDerecho[indice];

    arregloIzquierdo.push(valor);
    arregloDerecho.splice(indice, 1);

    pintarArregloIzquierda();
    pintarArregloDerecha();
}


// Pintar al iniciar
pintarArregloIzquierda();
pintarArregloDerecha();