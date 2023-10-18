import { Component, OnInit, OnDestroy } from '@angular/core';
import { OfertasService } from '../ofertas.service';
import { OfertaI } from '../shared/oferta.model';
import { ActivatedRoute } from '@angular/router';
import { Observable, interval } from 'rxjs';


@Component({
  selector: 'app-oferta',
  templateUrl: './oferta.component.html',
  styleUrls: ['./oferta.component.css']
})
export class OfertaComponent implements OnInit, OnDestroy {

  constructor(
    private ofertasService : OfertasService,
    private route: ActivatedRoute
    ) { }

 
public oferta : OfertaI = {
  id: 0,
  categoria: '',
  titulo: '',
  descricao_oferta: '',
  anunciante: '',
  valor: 0,
  destaque: false,
  imagens: [],
}


  ngOnInit(): void {

    this.route.params.subscribe({
      next: (param: any) => {
        this.ofertasService.getOfertaPorId(param['id'])
          .then((oferta: OfertaI) => {
            this.oferta = oferta;
          })
      }
    })


  }

  ngOnDestroy() {

  }

}
