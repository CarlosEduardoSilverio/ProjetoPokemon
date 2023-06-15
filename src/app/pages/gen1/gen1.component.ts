import { Component, OnInit } from '@angular/core';
import { PokeApiService } from '../../service/poke-api.service';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-gen1',
  templateUrl: './gen1.component.html',
  styleUrls: ['./gen1.component.scss']
})


export class Gen1Component implements OnInit{
  
  private setAllPokemons: any;
  public getAllPokemons: any;

  public apiError: boolean = false

  constructor(
    // public dialogRef: MatDialogRef<Gen1Component>,
    private pokeApiService: PokeApiService
  ) { }

  ngOnInit(): void {
    this.pokeApiService.apiListAllPokemons.subscribe(
      res => {
        this.setAllPokemons = res.results;
        this.getAllPokemons = this.setAllPokemons;
        // console.log(this.getAllPokemons);
      },
      (error) => {
        this.apiError = true;
      }
    );
  }

  
}
