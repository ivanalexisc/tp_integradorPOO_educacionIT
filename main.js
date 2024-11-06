import Cliente from './cliente.js';
import Cuenta from './cuenta.js';

let clienteActual = null;
let cuentaActual = null;

// Registro de cliente
document.getElementById("registroForm")?.addEventListener("submit", function(e) {
    e.preventDefault();
    const nombre = document.getElementById("nombre").value;
    const apellido = document.getElementById("apellido").value;
    const dni = document.getElementById("dni").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    clienteActual = new Cliente(Date.now(), nombre, apellido, dni, email, password);
    cuentaActual = new Cuenta(Date.now(), clienteActual, 0);
    alert("Registro exitoso");
    window.location.href = "panel.html";
});

// Inicio de sesión
document.getElementById("loginForm")?.addEventListener("submit", function(e) {
    e.preventDefault();
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    if (clienteActual && clienteActual.email === email && clienteActual.password === password) {
        alert("Inicio de sesión exitoso");
        window.location.href = "panel.html";
    } else {
        alert("Credenciales incorrectas");
    }
});

// Mostrar saldo en el panel
if (window.location.pathname.endsWith("panel.html")) {
    document.getElementById("nombreUsuario").textContent = clienteActual.nombre || "Usuario";
    document.getElementById("saldo").textContent = cuentaActual.consultarSaldo() || 0;

    // Agregar el eventListener para el botón
    document.getElementById("ejecutarMovimiento").addEventListener("click", function() {
        realizarMovimiento();
    });
}

// Realizar movimiento
function realizarMovimiento() {
    const tipo = document.getElementById("tipoMovimiento").value;
    const monto = parseFloat(document.getElementById("monto").value);

    if (!isNaN(monto) && monto > 0) {
        if (tipo === "deposito") {
            cuentaActual.depositar(monto);
        } else if (tipo === "retiro") {
            cuentaActual.retirar(monto);
        }

        document.getElementById("saldo").textContent = cuentaActual.consultarSaldo();
        actualizarHistorial();
    } else {
        alert("Por favor, ingresa un monto válido.");
    }
}

// Actualizar historial de movimientos
function actualizarHistorial() {
    const historial = cuentaActual.obtenerMovimientos();
    const historialContainer = document.getElementById("historialMovimientos");
    historialContainer.innerHTML = "";
    historial.forEach(mov => {
        const li = document.createElement("li");
        li.textContent = `${mov.tipo}: $${mov.monto} - ${mov.fecha}`;
        historialContainer.appendChild(li);
    });
}
