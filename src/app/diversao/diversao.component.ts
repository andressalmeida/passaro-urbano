import { Component, OnInit } from '@angular/core';
import { OfertasService } from '../ofertas.service';
import { OfertaI } from '../shared/oferta.model';

@Component({
  selector: 'app-diversao',
  templateUrl: './diversao.component.html',
  styleUrls: ['./diversao.component.css']
})
export class DiversaoComponent implements OnInit {
  constructor(private ofertasService : OfertasService) {}

  public ofertas: OfertaI[] = [] 

  ngOnInit(): void {
    this.ofertasService.getOfertasPorCateoria('diversao')
    .then((ofertas: OfertaI[]) => {
      this.ofertas = ofertas
    })
  }

}
