import { Component, OnInit } from '@angular/core';
import { PokeApiService } from '../../service/poke-api.service';

@Component({
  selector: 'app-gen5',
  templateUrl: './gen5.component.html',
  styleUrls: ['./gen5.component.scss']
})
export class Gen5Component implements OnInit{

  private setAllPokemons55G: any;
  public getAllPokemons55G: any;

  constructor(
    private pokeApiService: PokeApiService
  ) { }

  ngOnInit(): void {
    this.pokeApiService.apiListPokemons5G.subscribe(
      (        res: { results: any; }) => {
        this.setAllPokemons55G = res.results;
        this.getAllPokemons55G = this.setAllPokemons55G;
        console.log(this.getAllPokemons55G);
      },

    );
  }

  
}
