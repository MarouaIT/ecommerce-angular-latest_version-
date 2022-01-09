import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { WelcomepageComponent } from './welcomepage/welcomepage.component';
import { CategorycardComponent } from './categorycard/categorycard.component';
import { ShopbagComponent } from './shopbag/shopbag.component';
import { RouterModule, Routes } from '@angular/router';
import { DropdownsearchComponent } from './dropdownsearch/dropdownsearch.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

const routes: Routes=[

  {
    path: 'shopbag', component: ShopbagComponent,
  },
  {
    path: 'categories/:id', component: CategorycardComponent,
  },
  // {
  //   path: '', redirectTo:'categories/1', pathMatch: 'full',
  // },
  // {path: "", redirectTo:"/login", pathMatch: 'full'},
  // {path:"login" , component: LoginComponent},
  // {path:"register", component:RegisterComponent},
  // {path:"**", component:PageNotFoundComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    WelcomepageComponent,
    CategorycardComponent,
    ShopbagComponent,
    DropdownsearchComponent,
    LoginComponent,
    RegisterComponent,
    NavbarComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
