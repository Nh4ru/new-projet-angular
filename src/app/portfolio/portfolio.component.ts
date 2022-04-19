import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {

  constructor(public http:HttpClient) { }

  joke:any;
  jokeNotFound = true;
  gallery:any;
  urlPicsum='https://picsum.photos/v2/list?page=2&limit=24';
  urlChuck='https://api.chucknorris.io/jokes/random';

  getUrl(url:string){
    return this.http.get(url);
  }

  loadPics(){
    this.getUrl(this.urlPicsum).subscribe(
      data => {
        this.gallery = data;
        console.log(data);
      }
    )
  }

  ngOnInit(): void {
    this.getUrl(this.urlChuck).subscribe(
      (data) => {
        this.joke = data;
        this.jokeNotFound = false;
        console.log(data);
      }
    )
    this.loadPics();
  }
}
