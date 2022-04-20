import { Component, OnInit } from '@angular/core';

import { ViewportScroller } from '@angular/common';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {

  constructor(
    public scroll:ViewportScroller,
    public api:ApiService) { }

  joke:any;
  jokeNotFound = true;
  gallery:any;
  page=1;
  urlPicsum='';
  urlChuck= this.api.urlChuck;

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
    this.api.getUrl(this.urlPicsum).subscribe(
      data => {
        this.gallery = data;
        console.log(data);
      }
    )
  }

  ngOnInit(): void {
    this.api.getUrl(this.urlChuck).subscribe(
      (data) => {
        this.joke = data;
        this.jokeNotFound = false;
        console.log(data);
      }
    )
    this.loadPics();
  }
}
