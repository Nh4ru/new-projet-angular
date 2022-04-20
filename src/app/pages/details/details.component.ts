import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  // Constructeur
  constructor(public api:ApiService,
     private route:ActivatedRoute) { }

  itemId = 0;
  itemInfo:any;
  imgSrc = './assets/images/loader.gif';
  gray = false;
  blur=0;
  
  // Fonction qui genere la source de l'image
  generateSrc(){
    this.imgSrc = this.api.bigImgPicsum(this.itemId);
    this.gray? this.imgSrc +='grayscale&' : null;
    this.blur>0? this.imgSrc += 'blur=' + this.blur : null;
  }

  // Mettre en gris les images
  grayscale(){
    this.gray=!this.gray;
    this.generateSrc();
  }

  // Ajouter un flou sur l'image
  addBlur(){
    this.blur<10?this.blur++:this.blur=0;
    this.generateSrc();
  }

  ngOnInit(): void {
    // on récup. l'id dans la route active
    this.itemId = this.route.snapshot.params['itemId'];
    console.log('itemId:',this.itemId);
    // on charge les données correspondantes de l'image
    this.api.getUrl(this.api.imgInfo(this.itemId)).subscribe(
      data => {
        this.itemInfo = data;
        this.generateSrc();
        console.log(data); 
      }
    )
  }
}