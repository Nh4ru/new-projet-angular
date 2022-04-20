import { Component, OnDestroy, OnInit } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

  constructor() { }

  title = "Home";

  // déclaration du tableau
  arrayImg = [
    'avenue-815297_640.jpg',
    'road-1072821_640.jpg',
    'tree-276014_640.jpg'];
    
  jsonImg = [
    {
      url: 'avenue-815297_640.jpg',
      alt: 'Avenue dans les bois...'
    },
    {
      url: 'road-1072821_640.jpg',
      alt: 'Vue d\'Automne'
    },
    {
      url: 'tree-276014_640.jpg',
      alt: 'Arbre du printemps'
    }
  ];
  // déclaration de propriétés utilisées dans mon code
  randomIndex = 0;
  sourceImg = '';
  compteur = 0;

  myProp = 'block';
  myValue = false;

  myAlert(msg: string) {
    alert(msg);
  }

  changeImage() {
    // on tire un nombre aléatoire entre 0 et 2
    this.randomIndex = Math.floor(Math.random() * 3);
    this.sourceImg = this.arrayImg[this.randomIndex];
    this.compteur++;
    console.log('Nombre de changement de source:', this.compteur);
    console.log('La nouvelle source est:', this.sourceImg);
  }

  ngOnInit(): void {
    this.changeImage();

  }

  ngOnDestroy(): void {
    console.log("Au revoir la home")
  }

}
