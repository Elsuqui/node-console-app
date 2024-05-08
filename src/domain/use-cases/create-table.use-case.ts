
export interface CreateTableUseCase {
    execute: ( options: CreateTableOptions ) => string;
}

export interface CreateTableOptions {
    base: number;
    limit?: number;
}

export class CreateTable implements CreateTableUseCase {
    constructor(
        /**
         * DI: Dependency Injection
         */
    ) {}

    execute({ base, limit = 10}: CreateTableOptions): string {
        let outputTable = '';
        for (let i = 1; i <= limit; i++) {
            outputTable += `${base} x ${i} = ${base * i}\n`;
        }
        return outputTable;
    }
}