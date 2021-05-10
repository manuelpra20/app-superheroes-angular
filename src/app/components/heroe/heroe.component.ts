import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {HeroesService} from '../../servicios/heroes.service';


@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html'
})
export class HeroeComponent  {

  heroe: any = {};
  constructor(private activatedRoute: ActivatedRoute,
              private bheroesService: HeroesService
    ) {

  this.activatedRoute.params.subscribe(params => {
  this.heroe = this.bheroesService.getHeroe ( params [ 'id' ] );
  });
  }
}
