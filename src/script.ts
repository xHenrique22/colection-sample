import { Felino } from "./Felino";
import { Leao } from "./Leao";

const felino = new Felino();
const leao = new Leao('Simba');

felino.emitSound('Mroul');
leao.emitSound('Roar');
leao.caca('Javali');
leao.caca('Zebra', 2);
leao.caca('Girafa', 1, 'Mamífero');

const leoes: Leao [] = [];

const leao1 = new Leao('Scar');
const leao2 = new Leao('Mufasa');
const leao3 = new Leao('Kofu');

leoes.push(leao,leao1,leao2,leao3);
leoes.pop();

leoes.forEach((leao) => {
    console.log(leao.name)
})
