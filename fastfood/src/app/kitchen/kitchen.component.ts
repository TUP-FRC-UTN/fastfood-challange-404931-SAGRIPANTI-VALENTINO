import { Component, inject } from '@angular/core';
import { PedidoService } from '../pedido-service';
import { Pedido } from '../../pedido';

@Component({
  selector: 'app-kitchen',
  standalone: true,
  imports: [],
  templateUrl: './kitchen.component.html',
  styleUrl: './kitchen.component.css'
})
export class KitchenComponent {
  pedidoService = inject(PedidoService)
  listaPedidosPendientes : Pedido[] = this.pedidoService.getPedidosIngresados()
  listaParaCocinar : Pedido[] = this.pedidoService.getPedidosEnCoccion()

  cocinar(index : number){
    const p : Pedido = this.listaPedidosPendientes[index]
    this.pedidoService.addPedidoACocinar(p)
    this.listaPedidosPendientes.splice(index, 1)
  }
  terminar(index : number){
    this.pedidoService.addPedidoAEntregar(this.listaParaCocinar[index])
    this.listaParaCocinar.splice(0, 100)
  }
}
