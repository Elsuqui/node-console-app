
export const generateMultiplierTable = (
    tableNumber: number, 
    maxMultiplier: number = 9
): string => {
    /* Generate header */
    let tableOuput = "========================\n";
    tableOuput += `Tabla del ${tableNumber}\n`;
    tableOuput += "========================\n";

    /* Add Body */
    for (let i = 1; i <= maxMultiplier; i++) {
        tableOuput += `${tableNumber} x ${i} = ${tableNumber * i}\n`;
    }
    return tableOuput;
}