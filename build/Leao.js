"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.Leao = void 0;
var Felino_1 = require("./Felino");
var Leao = /** @class */ (function (_super) {
    __extends(Leao, _super);
    function Leao() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Leao.prototype.emitSound = function (sound) {
        console.log("Le\u00E3o emite ".concat(sound));
    };
    Leao.prototype.caca = function (presa, qtdPresas, tipoPresa) {
        if (tipoPresa != undefined) {
            console.log("Le\u00E3o est\u00E1 ca\u00E7ando um ".concat(tipoPresa));
        }
        var numPresas = (qtdPresas == undefined) ? 1 : qtdPresas;
        console.log("Le\u00E3o est\u00E1 ca\u00E7ando ".concat(numPresas, " ").concat(presa));
    };
    return Leao;
}(Felino_1.Felino));
exports.Leao = Leao;
