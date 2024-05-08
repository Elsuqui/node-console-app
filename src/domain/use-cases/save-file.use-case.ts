import fs from 'fs';

export interface SafeFileUseCase {
    execute: (options: Options) => boolean;
}

export interface Options {
    fileContent: string;
    fileDestination?: string;
    fileName?: string;
}

export class SaveFile implements SafeFileUseCase {
    constructor(
        /**
         * DI: Dependency Injection
         */
    ) {}

    execute({ fileContent, fileDestination = 'outputs', fileName = 'table' }: Options): boolean {
        //const outputDir = 'outputs';
        fs.mkdir(fileDestination, { recursive: true }, (err) => {
            if (err) {
                throw new Error(`Error al crear el directorio: ${err}`);
            }
            console.log(`Directorio creado en la siguiente ruta: ${fileDestination}`);
            fs.writeFile(`${fileDestination}/${fileName}.txt`, fileContent, (err) => {
                if (err) {
                    throw new Error(`Error al escribir el archivo: ${err}`);
                }
                console.log(`Archivo creado en la siguiente ruta: ${fileName}`);
            });
        });
        //const fileName = `outputs/tabla-${number}.txt`;
        return true;
    }
}