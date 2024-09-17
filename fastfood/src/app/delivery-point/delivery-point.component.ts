import { Component, inject } from '@angular/core';
import { PedidoService } from '../pedido-service';
import { Pedido } from '../../pedido';
import { PEDIDOS } from '../datos/datos';

@Component({
  selector: 'app-delivery-point',
  standalone: true,
  imports: [],
  templateUrl: './delivery-point.component.html',
  styleUrl: './delivery-point.component.css'
})
export class DeliveryPointComponent{
  
  pedidoService = inject(PedidoService);
  lstPedidosParaEntregar : Pedido[] = this.pedidoService.getPedidosEntregados()
  //lstPedidosParaEntregar : Pedido[] = PEDIDOS

  entregar(index: number) {
    this.pedidoService.entregar(index)
  }
}
