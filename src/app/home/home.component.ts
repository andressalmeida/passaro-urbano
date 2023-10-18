import { Component, OnInit } from '@angular/core';
import { OfertasService } from '../ofertas.service';
import { OfertaI } from '../shared/oferta.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public ofertas: OfertaI[] = []

  constructor(private ofertasService: OfertasService) {}

  ngOnInit(): void {
   this.ofertasService.getOfertas()
   .then((ofertas: OfertaI[]) => {
    this.ofertas = ofertas
   })
   .catch((error: Error) => {
    console.error(error)
   })
  
  }

}
