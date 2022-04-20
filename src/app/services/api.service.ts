import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(public http:HttpClient,) { }

  urlChuck = 'https://api.chucknorris.io/jokes/random';
  urlPicsum = 'https://picsum.photos';
  
  // Refactorisation des fonctions
  getUrl(url:string){
    return this.http.get(url);
  }

  listPicsum(num:number){
    return this.urlPicsum+'/v2/list?page='+num+'&limit=6';
  }

  imgPicsum(id:number){
    return this.urlPicsum+'/id/'+id+'/640/480';
  }

  bigImgPicsum(id:number){
    return this.urlPicsum+'/id/'+id+'/1280/960?';
  }

  imgInfo(id:number){
    return this.urlPicsum+'/id/'+id+'/info';
  }
}
