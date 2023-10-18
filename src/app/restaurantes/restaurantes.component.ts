import { Component, OnInit } from '@angular/core';
import { OfertasService } from '../ofertas.service';
import { OfertaI } from '../shared/oferta.model';

@Component({
  selector: 'app-restaurantes',
  templateUrl: './restaurantes.component.html',
  styleUrls: ['./restaurantes.component.css']
})
export class RestaurantesComponent implements OnInit {

  constructor(private ofertasService : OfertasService) {}

  public ofertas: OfertaI[] = [] 

  ngOnInit(): void {
    this.ofertasService.getOfertasPorCateoria('restaurante')
    .then((ofertas: OfertaI[]) => {
      this.ofertas = ofertas;
    })
  }

}
