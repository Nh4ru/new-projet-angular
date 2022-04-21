import { Component, OnInit } from '@angular/core';
import { ViewportScroller } from '@angular/common';
import { ApiService } from 'src/app/services/api.service';
import { SettingsService } from 'src/app/services/settings.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {

  constructor(
    public scroll:ViewportScroller,
    public api:ApiService,
    public settings:SettingsService) { }

  joke:any;
  jokeNotFound = true;
  gallery:any;
  page=1;
  urlPicsum='';
  urlChuck= this.api.urlChuck;

  

  loadPics(way="",nbr=this.page){
    switch(way){
      case 'next':this.page++;
        break;
      case 'prev':this.page--;
        break;
      case '':this.page=nbr;
        break;  
    }
    this.urlPicsum = this.api.listPicsum(this.page);
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
    this.settings.displayCarousel = false;
  }
}
