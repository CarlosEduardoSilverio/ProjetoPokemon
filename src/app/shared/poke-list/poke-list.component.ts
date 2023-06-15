import { Component, OnInit } from '@angular/core';
import { PokeApiService } from '../../service/poke-api.service';
import { DetailsComponent } from '../../pages/details/details.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'poke-list',
  templateUrl: './poke-list.component.html',
  styleUrls: ['./poke-list.component.scss']
})
export class PokeListComponent implements OnInit{

  // page: number = 0;
  // count = 0
  // totalPokemon: number = 0

  public TesteId: any;
  selectPokemons: DetailsComponent | undefined
  private setAllPokemons: any;
  public getAllPokemons: any;

  public apiError: boolean = false

  private setAllPokemons2G: any;
  public getAllPokemons2G: any;
  
  private setAllPokemons3G: any;
  public getAllPokemons3G: any;

  private setAllPokemons4G: any;
  public getAllPokemons4G: any; 

  private setAllPokemons5G: any;
  public getAllPokemons5G: any;

  private setAllPokemons6G: any;
  public getAllPokemons6G: any;

  private setAllPokemons7G: any;
  public getAllPokemons7G: any;

  private setAllPokemons8G: any;
  public getAllPokemons8G: any;

  private setAllPokemons9G: any;
  public getAllPokemons9G: any;

  classicMode: boolean = true;
  
  constructor(
    public dialog: MatDialog,
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
      this.pokeApiService.apiListPokemons2G.subscribe(
        res => {
          this.setAllPokemons2G = res.results;
          this.getAllPokemons2G = this.setAllPokemons2G;
          // console.log(this.getAllPokemons2G);
        },
        (error) => {
          this.apiError = true;
        }
      );

      this.pokeApiService.apiListPokemons3G.subscribe(
        res => {
          this.setAllPokemons3G = res.results;
          this.getAllPokemons3G = this.setAllPokemons3G;
          // console.log(this.getAllPokemons3G);
        },
        (error) => {
          this.apiError = true;
        }
      );

      this.pokeApiService.apiListPokemons4G.subscribe(
        res => {
          this.setAllPokemons4G = res.results;
          this.getAllPokemons4G = this.setAllPokemons4G;
          // console.log(this.getAllPokemons4G);
        },
        (error) => {
          this.apiError = true;
        }
      );

      this.pokeApiService.apiListPokemons5G.subscribe(
        res => {
          this.setAllPokemons5G = res.results;
          this.getAllPokemons5G = this.setAllPokemons5G;
          // console.log(this.getAllPokemons5G);
        },
      );

      this.pokeApiService.apiListPokemons6G.subscribe(
        res => {
          this.setAllPokemons6G = res.results;
          this.getAllPokemons6G = this.setAllPokemons6G;
          // console.log(this.getAllPokemons6G);
        },
        (error) => {
          this.apiError = true;
        }
      );

      this.pokeApiService.apiListPokemons7G.subscribe(
        res => {
          this.setAllPokemons7G = res.results;
          this.getAllPokemons7G = this.setAllPokemons7G;
          // console.log(this.getAllPokemons7G);
        },
        (error) => {
          this.apiError = true;
        }
      );

      this.pokeApiService.apiListPokemons8G.subscribe(
        res => {
          this.setAllPokemons8G = res.results;
          this.getAllPokemons8G = this.setAllPokemons8G;
          // console.log(this.getAllPokemons8G);
        },
        (error) => {
          this.apiError = true;
        }
      );

      this.pokeApiService.apiListPokemons9G.subscribe(
        res => {
          this.setAllPokemons9G = res.results;
          this.getAllPokemons9G = this.setAllPokemons9G;
          // console.log(this.getAllPokemons9G);
        },
        (error) => {
          this.apiError = true;
        }
      );
  }

  // loadAllPokemons(paginationMax: number = 0){
  //   this.pokeApiService.apiGetPokemons(12, this.page + paginationMax).subscribe((response:any) => {
  //     this.totalPokemon = response.count;
  //   })
  // }

  // public getSearch(value: string){
  //   const filter = this.setAllPokemons.filter( (res : any) => {
  //     return !res.name.indexOf(value.toLowerCase());
  //   });

  //   this.getAllPokemons = filter;
  // }

  // OpenDialog(TesteId: number): void {
  //   const dialogRef = this.dialog.open(DetailsComponent,  {
  //     data: { id: TesteId }
  //   });

  //   dialogRef.afterClosed().subscribe(result => {
  //     console.log('Que inferno meu deus aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa');
  //   });
  // }
}