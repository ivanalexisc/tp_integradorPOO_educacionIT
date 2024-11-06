// cuenta.js
import Movimiento from './movimiento.js';

class Cuenta {
    constructor(codigo, cliente, saldoInicial = 0) {
        this.codigo = codigo;
        this.cliente = cliente;
        this.saldo = saldoInicial;
        this.movimientos = [];
    }

    depositar(monto) {
        if (monto > 0) {
            this.saldo += monto;
            this.movimientos.push(new Movimiento("depósito", monto));
        }
    }

    retirar(monto) {
        if (monto > 0 && monto <= this.saldo) {
            this.saldo -= monto;
            this.movimientos.push(new Movimiento("retiro", monto));
        } else {
            console.log("Fondos insuficientes");
        }
    }

    consultarSaldo() {
        return `El saldo actual es ${this.saldo}`;
    }

    obtenerMovimientos() {
        return this.movimientos;
    }
}

export default Cuenta;
