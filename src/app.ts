import { yarg } from './config/plugins/args.plugin';
import { ServerApp } from './presentation/server-app';

/**
 * Anonymous function that will be executed immediately
 */
(async () => await main())();

/**
 * Entry point of the application
 */
async function main() {
    const { b:base, l:limit, s:showTable, n:fileName, d:fileDestination } = yarg;
    ServerApp.run({ base, limit, showTable, fileName, fileDestination});
}

