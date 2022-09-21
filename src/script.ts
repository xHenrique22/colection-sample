import { Felino } from "./Felino";
import { Leao } from "./Leao";

const felino = new Felino();
const leao = new Leao();

felino.emitSound('Mroul');
leao.emitSound('Roar');
leao.caca('Javali');
leao.caca('Zebra', 2);
leao.caca('Girafa', 1, 'Mamífero');

const numeros: number [] = [];
const leoes: Leao[] = [];

leoes.push(leao);
