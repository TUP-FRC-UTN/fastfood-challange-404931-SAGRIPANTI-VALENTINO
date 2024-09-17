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
    this.pedidoService.addPedidoACocinar(this.listaPedidosPendientes(this.listaPedidosPendientes.at(index)))
  }
}
