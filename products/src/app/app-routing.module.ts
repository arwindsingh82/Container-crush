import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { ContactusComponent } from './contactus/contactus.component';

const routes: Routes = [
  {path: '', component: ProductsComponent},
  {path: 'Product', component: ProductsComponent},
  {path: 'Contactus/Product', component: ProductsComponent},
  {path: 'Contactus', component: ContactusComponent}
  // {path: 'Webspeech', component: WebspeechComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
