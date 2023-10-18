import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OfertasService } from 'src/app/ofertas.service';

@Component({
  selector: 'app-como-usar',
  templateUrl: './como-usar.component.html',
  styleUrls: ['./como-usar.component.css']
})
export class ComoUsarComponent implements OnInit {

  public comoUsar: string = ''

  constructor(
    private route: ActivatedRoute,
    private ofertasService: OfertasService
    ) {}

  ngOnInit(): void {

    this.route.parent?.params.subscribe({
      next: (param: any) => {
        this.ofertasService.getComoUsarPorId(param['id'])
          .then((response: string) => {
            this.comoUsar = response;
          })
      }
    })

  }

}
