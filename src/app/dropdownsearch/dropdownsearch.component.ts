import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-dropdownsearch',
  templateUrl: './dropdownsearch.component.html',
  styleUrls: ['./dropdownsearch.component.css']
})
export class DropdownsearchComponent implements OnInit {

  constructor(private router:Router) { }


  ngOnInit(): void {
    
  }

  categories = ["High-Tech", "Perfumes", "Home"];
  balance: boolean = false;
  addJsCode() {
    let test = document.querySelectorAll('.dropdown ul');
    test.forEach((x: any) => {
      x.classList.add('active');
    });

  }

  addJsCode1(item:any, i:number) {
    //console.log(item);
    document.querySelectorAll(".default_option").forEach
    ((y :any) =>{
      y.innerText = item;
      console.log(i+1);
      var c = i+1;
      this.router.navigateByUrl('/categories/'+c);
      document.querySelector(".dropdown ul")!.classList.remove('active');
    })
    
   }
  
  

}
