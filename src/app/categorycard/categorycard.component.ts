import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { CategoriesService } from '../services/categories.service';

@Component({
  selector: 'app-categorycard',
  templateUrl: './categorycard.component.html',
  styleUrls: ['./categorycard.component.css']
})
export class CategorycardComponent implements OnInit {

  public categories: any;

  constructor(public servicesCategories: CategoriesService,
    private route: ActivatedRoute,
    private router: Router) {
    this.router.events.subscribe((val) => {
      if (val instanceof NavigationEnd) {
        let url = val.url;
        console.log(url);
        let param = this.route.snapshot.params['id'];
        if (param == "all") {
          this.getAllCategories();
        }
        else if (!(param == "all")) {
          this.getCategoriesByParent();
        }
      }
    })
  }

  ngOnInit(): void {

  }

  public getAllCategories() {
    this.servicesCategories.getRessources("/category/getAll")
      .forEach(data => {
        this.categories = data;
      });
  }

  public getCategoriesByParent() {
    this.servicesCategories.getRessources("/category/getByParent/" + this.route.snapshot.params['id'])
      .forEach(data => {
        this.categories = data;
      })
  }

}
