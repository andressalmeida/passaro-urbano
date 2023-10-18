import { Component, OnInit } from '@angular/core';
import { OfertasService } from '../ofertas.service';
import { Observable, Subject } from 'rxjs';
import { OfertaI } from '../shared/oferta.model';
import { debounceTime, switchMap, catchError } from 'rxjs/operators';
import {of} from "rxjs";

@Component({
  selector: 'app-topo',
  templateUrl: './topo.component.html',
  styleUrls: ['./topo.component.css']
})
export class TopoComponent implements OnInit {
 
  public ofertas: Observable<OfertaI[]>;
  public ofertasArray: OfertaI[] = [];
  private subjectPesquisa: Subject<string>;

  constructor(private ofertasService: OfertasService) {
      this.ofertas = new Observable<OfertaI[]>();
      this.subjectPesquisa = new Subject<string>();
    }

    ngOnInit(): void {
     this.ofertas = this.subjectPesquisa.pipe(
      debounceTime(1000),
      switchMap((pesquisaInput: string) => {
        if(pesquisaInput.trim() === '') {
          return of<OfertaI[]>([])
        }
        return this.ofertasService.pesquisaOfertas(pesquisaInput)
      }),
      catchError((error: any) => {
        console.log(error);
        return of<OfertaI[]>([])
       }) 
     )

     this.ofertas.subscribe({
      next: (ofertas: OfertaI[]) => this.ofertasArray = ofertas,
      error: (err) => console.log(err),
      complete: () => console.log('Fluxo de eventos completo')
     })
    }
    
  public pesquisa(pesquisaInput: string): void {
    this.subjectPesquisa.next(pesquisaInput)
  } 

  public limpaPesquisa(): void {
    this.subjectPesquisa.next('')
  }
}
