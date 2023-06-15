import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, from} from 'rxjs';
import { map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PokeApiService {

  private url: string = 'https://pokeapi.co/api/v2/pokemon?offset=0&limit=151';
  private url2: string ='https://pokeapi.co/api/v2/pokemon?offset=151&limit=100';
  private url3: string = 'https://pokeapi.co/api/v2/pokemon?offset=251&limit=135';
  private url4: string = 'https://pokeapi.co/api/v2/pokemon?offset=386&limit=108';
  private url5: string = 'https://pokeapi.co/api/v2/pokemon?offset=494&limit=155';
  private url6: string = 'https://pokeapi.co/api/v2/pokemon?offset=649&limit=72';
  private url7: string = 'https://pokeapi.co/api/v2/pokemon?offset=721&limit=88';
  private url8: string = 'https://pokeapi.co/api/v2/pokemon?offset=809&limit=96';
  private url9: string = 'https://pokeapi.co/api/v2/pokemon?offset=905&limit=105';

  // private PokemonImage: string = ;

  private urll: string = 'https://pokeapi.co/api/v2/characteristic/?offset=20&limit=10';

  constructor(
    private http: HttpClient
  ) { }

  // Pokemons 1 Geração
  get apiListAllPokemons():Observable<any>{
    return this.http.get<any>(this.url).pipe(
      tap(res => res),
      tap( res => {
        res.results.map( (resPokemons: any) => {
         
          this.apiGetPokemons(resPokemons.url).subscribe(
            res => resPokemons.status = res
          )
        })
      })
    )
  }
  public apiGetPokemons( url: string ):Observable<any>{
    return this.http.get<any>( url ).pipe(
      map(
        res => res
      )
    );
  }

  // Pokemons 2 Geração
  get apiListPokemons2G():Observable<any>{
    return this.http.get<any>(this.url2).pipe(
      tap(res => res),
      tap( res => {
        res.results.map( (resPokemons2G: any) => {
          this.apiGetPokemons2G(resPokemons2G.url).subscribe(
            res => resPokemons2G.status = res
          )
        })
      })
    )
  }
  public apiGetPokemons2G( url: string ):Observable<any>{
    return this.http.get<any>( url ).pipe(
      map(
        res => res
      )
    );
  }

  // Pokemons 3 Geração
  get apiListPokemons3G():Observable<any>{
    return this.http.get<any>(this.url3).pipe(
      tap(res => res),
      tap( res => {
        res.results.map( (resPokemons3G: any) => {
         
          this.apiGetPokemons3G(resPokemons3G.url).subscribe(
            res => resPokemons3G.status = res
          )
        })
      })
    )
  }
  public apiGetPokemons3G( url: string ):Observable<any>{
    return this.http.get<any>( url ).pipe(
      map(
        res => res
      )
    );
  }

  // Pokemons 4 Geração
  get apiListPokemons4G():Observable<any>{
    return this.http.get<any>(this.url4).pipe(
      tap(res => res),
      tap( res => {
        res.results.map( (resPokemons4G: any) => {
          this.apiGetPokemons4G(resPokemons4G.url).subscribe(
            res => resPokemons4G.status = res
          )
        })
      })
    )
  }
  public apiGetPokemons4G( url: string ):Observable<any>{
    return this.http.get<any>( url ).pipe(
      map(
        res => res
      )
    );
  }

  // Pokemons 5 Geração
  get apiListPokemons5G():Observable<any>{
    return this.http.get<any>(this.url5).pipe(
      tap(res => res),
      tap( res => {
        res.results.map( (resPokemons5G: any) => {
          this.apiGetPokemons5G(resPokemons5G.url).subscribe(
            res => resPokemons5G.status = res
          )
        })
      })
    )
  }
  public apiGetPokemons5G( url: string ):Observable<any>{
    return this.http.get<any>( url ).pipe(
      map(
        res => res
      )
    );
  }

  // Pokemons 6 Geração
  get apiListPokemons6G():Observable<any>{
    return this.http.get<any>(this.url6).pipe(
      tap(res => res),
      tap( res => {
        res.results.map( (resPokemons6G: any) => {
          this.apiGetPokemons6G(resPokemons6G.url).subscribe(
            res => resPokemons6G.status = res
          )
        })
      })
    )
  }
  public apiGetPokemons6G( url: string ):Observable<any>{
    return this.http.get<any>( url ).pipe(
      map(
        res => res
      )
    );
  }

  // Pokemons 7 Geração
  get apiListPokemons7G():Observable<any>{
    return this.http.get<any>(this.url7).pipe(
      tap(res => res),
      tap( res => {
        res.results.map( (resPokemons7G: any) => {
         
          this.apiGetPokemons7G(resPokemons7G.url).subscribe(
            res => resPokemons7G.status = res
          )
        })
      })
    )
  }
  public apiGetPokemons7G( url: string ):Observable<any>{
    return this.http.get<any>( url ).pipe(
      map(
        res => res
      )
    );
  }

  // Pokemons 8 Geração
  get apiListPokemons8G():Observable<any>{
    return this.http.get<any>(this.url8).pipe(
      tap(res => res),
      tap( res => {
        res.results.map( (resPokemons8G: any) => {
          this.apiGetPokemons8G(resPokemons8G.url).subscribe(
            res => resPokemons8G.status = res
          )
        })
      })
    )
  }
  public apiGetPokemons8G( url: string ):Observable<any>{
    return this.http.get<any>( url ).pipe(
      map(
        res => res
      )
    );
  }

  // Pokemons 9 Geração
  get apiListPokemons9G():Observable<any>{
    return this.http.get<any>(this.url9).pipe(
      tap(res => res),
      tap( res => {
        res.results.map( (resPokemons9G: any) => {
         
          this.apiGetPokemons9G(resPokemons9G.url).subscribe(
            res => resPokemons9G.status = res
          )
        })
      })
    )
  }
  public apiGetPokemons9G( url: string ):Observable<any>{
    return this.http.get<any>( url ).pipe(
      map(
        res => res
      )
    );
  }

  get apiDescriçaoPokemons():Observable<any>{
    return this.http.get<any>(this.urll).pipe(
      tap( res => res),
      tap( res => {
        res.results.map( (resPokemonsDescri: any) => {
          this.http.get<any>(resPokemonsDescri.url).pipe(
            map(
              res => res
            )
          ).subscribe(
            res => resPokemonsDescri.status = res
          )
        } )
      })
    )
  }
}