"use strict";
exports.__esModule = true;
exports.Multiplicador = exports.Divisor = exports.Subtrador = exports.Somador = void 0;
var Somador = /** @class */ (function () {
    function Somador() {
        this.calcular = function (numero1, numero2) {
            return numero1 + numero2;
        };
    }
    return Somador;
}());
exports.Somador = Somador;
var Subtrador = /** @class */ (function () {
    function Subtrador() {
        this.calcular = function (numero1, numero2) {
            return numero1 - numero2;
        };
    }
    return Subtrador;
}());
exports.Subtrador = Subtrador;
var Divisor = /** @class */ (function () {
    function Divisor() {
        this.calcular = function (numero1, numero2) {
            return numero1 / numero2;
        };
    }
    return Divisor;
}());
exports.Divisor = Divisor;
var Multiplicador = /** @class */ (function () {
    function Multiplicador() {
        this.calcular = function (numero1, numero2) {
            return numero1 * numero2;
        };
    }
    return Multiplicador;
}());
exports.Multiplicador = Multiplicador;