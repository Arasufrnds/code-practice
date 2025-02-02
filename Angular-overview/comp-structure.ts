import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {}


//Routing Structure:
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { ContactComponent } from './contact/contact.component';
import { ProductComponent } from './product/product.component';

const routes: Routes = [
  { path: '', component: HomeComponent }, 
  { path: 'contact', component: ContactComponent, }, 
  { path: 'product', component: ProductComponent},
  { path: '**', component: NotfoundComponent }, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

//(2):
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CheckDirectiveDirective } from './check-directive.directive';
import { CheckPipePipe } from './check-pipe.pipe';
import { HomeComponent } from './home/home.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { ContactComponent } from './contact/contact.component';
import { FormsModule } from '@angular/forms';
import { ProductComponent } from './product/product.component';
import { ExampleComponent } from './example/example.component';

@NgModule({
  declarations: [
    AppComponent,
    CheckDirectiveDirective,
    CheckPipePipe,
    HomeComponent,
    NotfoundComponent,
    ContactComponent,
    ProductComponent,
    ExampleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

//(3):
// <ul> 
// <li><a routerLink="/" >Home</a></li> 

// <li><a routerLink="/contact" >Contact Us</a></li> 
// <li><a routerLink="/product" >Product</a></li>
// <li><a routerLink="/**" >NotFound</a></li> 
// </ul> 


//Directive structure:
import { Directive } from '@angular/core';

@Directive({
  selector: '[appCheckDirective]'
})
export class CheckDirectiveDirective {

  constructor() { }

}


//service structure:
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CheckServiceService {

  constructor() { }
}


//pipe structure:
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'checkPipe'
})
export class CheckPipePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
