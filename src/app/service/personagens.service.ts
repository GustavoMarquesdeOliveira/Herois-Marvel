
import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { take } from "rxjs/operators";
import * as md5 from 'md5';
import { environment } from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class PersonagensService {

  publicKey = environment.publicKey;
  privateKey = "b410e09fff4d443af37eb05216a071cc708bb6c5"
  time = Number( new Date());
  hash = md5(this.time + this.privateKey + this.publicKey);
  constructor(private readonly http: HttpClient) { }

   public getPersonagens(){
     console.log(this.time)
    return this.http.
    get<any>("https://gateway.marvel.com//v1/public/characters?ts=" + this.time + `&apikey=${environment.publicKey}&hash=` + this.hash).pipe(take(1));
  }
  public getcomics(){
    console.log(this.time)
   return this.http.
   get<any>("https://gateway.marvel.com//v1/public/comics?ts=" + this.time + `&apikey=${environment.publicKey}&hash=` + this.hash).pipe(take(1));
 }
 public getevento(){
  console.log(this.time)
 return this.http.
 get<any>("https://gateway.marvel.com//v1/public/events?ts=" + this.time + `&apikey=${environment.publicKey}&hash=` + this.hash).pipe(take(1));
}
}
