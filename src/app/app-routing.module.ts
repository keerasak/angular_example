import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AlbumComponent } from './components/album/album.component';
import { PersonComponent } from './components/person/person.component';
import { OrdersComponent } from './components/orders/orders.component';
import { ProductsComponent} from './components/products/products.component'
const routes: Routes = [
  { path: 'orders', component: OrdersComponent },
  { path: 'persons', component: PersonComponent },
  //{ path: 'product/1', component: ProductsComponent },
  { path: '', redirectTo: '/orders', pathMatch: 'full' },
  { path: 'customers', loadChildren: () => import('./customers/customers.module').then(m => m.CustomersModule) }, // redirect to `first-component`
  // { path: '**', component: PageNotFoundComponent },  // Wildcard route for a 404 page
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }