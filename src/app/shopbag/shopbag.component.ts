import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shopbag',
  templateUrl: './shopbag.component.html',
  styleUrls: ['./shopbag.component.css']
})
export class ShopbagComponent implements OnInit {

  articleInfo={
    quantite: 1
  }

  addedArticlesList = [

    {
      id: 1,
      image: "assets/images/phone.png",
      title: "Phone",
      description:"Lorem ipsum dolor sit amet.",
      price: 549,
      quantite: 1,
    },

    {
      id: 2,
      image: "assets/images/applewatch.jpg",
      title: "Watch",
      description:"Lorem ipsum dolor sit amet.",
      price: 870,
      quantite: 1,
    },

    {
      id: 3,
      image: "assets/images/airpods.jpg",
      title: "Airpods",
      description:"Lorem ipsum dolor sit amet.",
      price: 349,
      quantite: 1,
    }

  ]

  inc(article:any){
    console.log(article.quantite);
    article.quantite = article.quantite + 1;
    
  }

  dec(article:any){
    console.log(article.quantite);
    if(article.quantite > 0)
    article.quantite = article.quantite - 1;
    
  }

  constructor() { }

  ngOnInit(): void {
  }
    

}
