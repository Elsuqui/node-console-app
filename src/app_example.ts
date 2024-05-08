import { generateMultiplierTable } from './mutiplier';
import { writeFile, mkdir } from 'fs';
import { yarg } from './config/plugins/args.plugin';

const userName: string = 'Gorky Suquinagua';
console.log(`Hello ${userName}`);

const number = yarg.b;
const limit = yarg.l;
const showTable = yarg.s;
const table = generateMultiplierTable(number, limit);
if (showTable) {
    console.log(table);
}
const outputDir = 'outputs';
mkdir(outputDir, { recursive: true }, (err) => {
    if (err) {
        throw new Error(`Error al crear el directorio: ${err}`);
    }
    console.log(`Directorio creado en la siguiente ruta: ${outputDir}`);
});
const fileName = `outputs/tabla-${number}.txt`;
writeFile(fileName, table, (err) => {
    if (err) {
        throw new Error(`Error al escribir el archivo: ${err}`);
    }
    console.log(`Archivo creado en la siguiente ruta: ${fileName}`);
});