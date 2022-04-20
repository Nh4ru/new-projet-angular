import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {

  constructor(public http:HttpClient,public scroll:ViewportScroller) { }

  joke:any;
  jokeNotFound = true;
  gallery:any;
  page=1;
  urlPicsum='';
  urlChuck='https://api.chucknorris.io/jokes/random';

  // prevPage(){
  //   this.page>1 ?this.page-- : null;
  //   this.urlPicsum = 'https://picsum.photos/v2/list?page='+this.page+'&limit=6';
  //   this.loadPics();
  //   this.scroll.scrollToAnchor("top");
  //   console.log(this.page);
  //   console.log(this.urlPicsum)
  // }

  // goToPage(nbr:number){
  //   this.page=nbr;
  //   this.urlPicsum = 'https://picsum.photos/v2/list?page='+nbr+'&limit=6';
  //   this.loadPics();
  //   this.scroll.scrollToAnchor("top");
  //   console.log(this.page);
  //   console.log(this.urlPicsum)
  // }

  // nextPage(){
  //   this.page=this.page+1;
  //   this.urlPicsum = 'https://picsum.photos/v2/list?page='+this.page+'&limit=6';
  //   this.loadPics();
  //   this.scroll.scrollToAnchor("top");
  //   console.log(this.page);
  //   console.log(this.urlPicsum)
  // }

  getUrl(url:string){
    return this.http.get(url);
  }

  loadPics(way="",nbr=this.page){
    switch(way){
      case 'next':this.page++;
        break;
      case 'prev':this.page--;
        break;
      case '':this.page=nbr;
        break;  
    }
    this.urlPicsum = 'https://picsum.photos/v2/list?page='+this.page+'&limit=6';
    this.scroll.scrollToAnchor("top");
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
