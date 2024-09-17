import { Injectable } from '@angular/core';
import { Pedido } from '../pedido';

@Injectable({
  providedIn: 'root'
})
export class PedidoService {
  private listaPedidosIngresados : Pedido[] = []
  private listaPedidosEnCoccion : Pedido[] = [] 
  private listaPedidosEntregados : Pedido[] = []
  
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
    this.listaPedidosEntregados.slice(index, 1)
  }
}
