"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Felino_1 = require("./Felino");
var Leao_1 = require("./Leao");
var felino = new Felino_1.Felino();
var leao = new Leao_1.Leao('Simba');
felino.emitSound('Mroul');
leao.emitSound('Roar');
leao.caca('Javali');
leao.caca('Zebra', 2);
leao.caca('Girafa', 1, 'Mamífero');
var leoes = [];
var leao1 = new Leao_1.Leao('Scar');
var leao2 = new Leao_1.Leao('Mufasa');
var leao3 = new Leao_1.Leao('Kofu');
leoes.push(leao, leao1, leao2, leao3);
leoes.pop();
leoes.forEach(function (leao) {
    console.log(leao.name);
});
