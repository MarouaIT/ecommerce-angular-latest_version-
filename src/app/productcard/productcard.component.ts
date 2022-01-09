import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-productcard',
  templateUrl: './productcard.component.html',
  styleUrls: ['./productcard.component.css']
})
export class ProductcardComponent implements OnInit {

  categories=[

    {
      idCategory: 1,
      nameCategory: "High-Tech",
      descriptionCategory: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      imageCategory: "",
    },
    {
      idCategory: 2,
      nameCategory: "Maison",
      descriptionCategory: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      imageCategory: "",

    },
    {
      idCategory: 3,
      nameCategory: "Bureau",
      descriptionCategory: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      imageCategory: "",

    }

  ];

  constructor() { }

  ngOnInit(): void {
  }

}
