import yargs from 'yargs';
import { hideBin } from 'yargs/helpers';

/**
 * hideBin will remove the first array of elements related to the path of the file
 */
export const yarg = yargs(hideBin(process.argv))
  .option('b',{
    alias: 'base',
    type: 'number',
    demandOption: true,
    describe: 'Es la base de la tabla de multiplicar'
  })
  .option('l', {
    alias: 'limit',
    type: 'number',
    default: 10,
    describe: 'Es el límite de la tabla de multiplicar'
  })
  .option('s', {
    alias: 'show',
    type: 'boolean',
    default: false,
    describe: 'Muestra la tabla de multiplicar en consola'
  })
  .option('n', {
    alias: 'name',
    type: 'string',
    default: 'table',
    describe: 'Nombre del archivo a guardar'
  })
  .option('d', {
    alias: 'destination',
    type: 'string',
    default: 'outputs',
    describe: 'Directorio donde se guardará el archivo'
  })
  .check((argv, options) => {
    if (argv.b < 1) {
        throw new Error('La base debe ser mayor a 0');
    }
    return true;
  })
  .parseSync();