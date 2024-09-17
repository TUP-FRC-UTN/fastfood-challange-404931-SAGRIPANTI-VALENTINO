import { Injectable } from '@angular/core';
import { Pedido } from '../pedido';
import { PEDIDOS } from './datos/datos';

@Injectable({
  providedIn: 'root'
})
export class PedidoService {
  private listaPedidosIngresados : Pedido[] = []
  private listaPedidosEnCoccion : Pedido[] = [] 
  private listaPedidosEntregados : Pedido[] = PEDIDOS
  
  getPedidosIngresados(){
    return this.listaPedidosIngresados
  }
  getPedidosEnCoccion(){
    return this.listaPedidosEnCoccion
  }
  getPedidosEntregados(){
    return this.listaPedidosEntregados
  }
  addPedidoAIngresar(p : Pedido){
    this.listaPedidosIngresados.push(p)
  }
  addPedidoACocinar(p : Pedido){
    this.listaPedidosEnCoccion.push(p)
  }
  addPedidoAEntregar(p : Pedido){
    this.listaPedidosEntregados.push(p)
  }
  entregar(index : number){
    this.listaPedidosEntregados.splice(index, 1)
    console.log("se entrego")
  }
}
