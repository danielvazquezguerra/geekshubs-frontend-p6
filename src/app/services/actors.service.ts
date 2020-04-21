import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ActorsService {

  route = 'http://localhost:3000/';

  constructor(
    private http: HttpClient
  ) { }

  getActorsAll(){
    return this.http.get(`${this.route}actors`);
  }

  getActorById(id: number){
    return this.http.get(`${this.route}actors/id=${id}`);
  }

  getActorByName(name: string){
    return this.http.get(`${this.route}actors/name=${name}`);
  }

}
