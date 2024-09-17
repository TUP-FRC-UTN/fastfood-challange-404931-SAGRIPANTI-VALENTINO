import { Component, inject } from '@angular/core';
import { PedidoService } from '../pedido-service.service';
import { Pedido } from '../../pedido';

@Component({
  selector: 'app-restaurant',
  standalone: true,
  imports: [],
  templateUrl: './restaurant.component.html',
  styleUrl: './restaurant.component.css'
})
export class RestaurantComponent {
  pedidoService = inject(PedidoService)
  pedidosIngresados : Pedido[] = this.pedidoService.getPedidosIngresados()
}
