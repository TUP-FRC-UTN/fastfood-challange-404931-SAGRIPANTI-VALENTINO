import { Pedido } from "../../pedido";

export const p1 : Pedido = new Pedido(1, "Tino", "Hamburguesa", new Date(Date.now()))
export const p2 : Pedido = new Pedido(2, "German", "Pizza", new Date(Date.now()))
export const p3 : Pedido = new Pedido(3, "Laura", "Papas Fritas", new Date(Date.now()))

export const PEDIDOS : Pedido[] = [
    p1,
    p2,
    p3
]