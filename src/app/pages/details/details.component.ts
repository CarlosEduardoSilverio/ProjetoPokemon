import { Component, Inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PokeApiService } from 'src/app/service/poke-api.service';
import { forkJoin } from 'rxjs';

import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';


@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  // mostrar: boolean = false;
  classicMode: boolean = true;
  isBack: boolean = false;
  isShiny: boolean = false

  // toggle () {
  //   this.mostrar = !this.mostrar;
  // }

  private urlPokemon: string = 'https://pokeapi.co/api/v2/pokemon';
  private urlName: string = 'https://pokeapi.co/api/v2/pokemon-species';

  public pokemon: any;
  public isLoading: boolean = false;
  public apiError: boolean = false;

  constructor(
    public dialogRef: MatDialogRef<DetailsComponent>,
    private activatedRoute: ActivatedRoute,
    private pokeApiService: PokeApiService,
    // @Inject(MAT_DIALOG_DATA) public data: any 
  ) {};

  ngOnInit(): void {
    this.getPokemon();

    // console.log(this.data)

    this.pokeApiService.apiDescriçaoPokemons.subscribe(
      // res => console.log(res)
    );
  }

  public getPokemon() {
    const id = this.activatedRoute.snapshot.params['id'];
    const pokemon = this.pokeApiService.apiGetPokemons(`${this.urlPokemon}/${id}`);
    const name = this.pokeApiService.apiGetPokemons(`${this.urlName}/${id}`);

    return forkJoin([pokemon, name]).subscribe(
      res => {
        this.pokemon = res
        this.isLoading = true;
        console.log(this.pokemon)
      },
      error => {
        this.apiError = true;
      }
    );
  }

  effectBar(valor: number) {

    return (valor / 2) + "%"
  }

  effectColorBar(valor:number){
    var color;
    if(valor <= 30){
      color = "#E15656";
    }else if(valor > 30 && valor <= 70){
      color = "#F69F26"
    }else if(valor > 70 && valor <= 100){
      color = "#F7CC3A"
    }else{
      color = "#75AB5B"
    }

    return color
  }

  cancel(): void {
    this.dialogRef.close();
  }
}