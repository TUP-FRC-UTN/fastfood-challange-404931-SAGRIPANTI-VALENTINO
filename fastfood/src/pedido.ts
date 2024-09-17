export class Pedido{
    number: number; // Numero de pedido random de 1 a 1000
    name: string;  // Nombre del cliente
    description: string;  // Descripción del pedido
    date: Date; // Fecha de creación del pedido
    constructor();
    constructor(num: number, name: string, desc: string, date: Date);
    constructor(num?: number, name?: string, desc?: string, date?: Date) {
        // Inicializa con valores predeterminados
        this.number = num ?? 0;
        this.name = name ?? "";
        this.description = desc ?? "";
        this.date = date ?? new Date();
    }
}