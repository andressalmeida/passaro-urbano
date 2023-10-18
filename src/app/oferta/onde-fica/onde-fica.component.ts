import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OfertasService } from 'src/app/ofertas.service';

@Component({
  selector: 'app-onde-fica',
  templateUrl: './onde-fica.component.html',
  styleUrls: ['./onde-fica.component.css']
})
export class OndeFicaComponent implements OnInit {

  public ondeFica: string = '';

  constructor(
    private route: ActivatedRoute,
    private ofertasService: OfertasService
    ) {}

  ngOnInit(): void {
    this.route.parent?.params.subscribe({
      next: (param: any) => {
        this.ofertasService.getOndeFicaPorId(param['id'])
          .then((response: string) => {
            this.ondeFica = response;
          })
      }
    })
  }
}
