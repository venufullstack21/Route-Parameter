import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { AddUserComponent } from './components/add-user/add-user.component';
import { AddressComponent } from './components/address/address.component';
import { CompanyComponent } from './components/company/company.component';
import { ContactComponent } from './components/contact/contact.component';
import { ContactadminComponent } from './components/contactadmin/contactadmin.component';
import { FeedbackComponent } from './components/feedback/feedback.component';
import { HomeComponent } from './components/home/home.component';
import { LocationComponent } from './components/location/location.component';
import { ResolveGuardExComponent } from './components/resolve-guard-ex/resolve-guard-ex.component';
import { UserComponent } from './components/user/user.component';
import { UsersComponent } from './components/users/users.component';
import { AdminGuard } from './guards/admin.guard';
import { AuthGuard } from './guards/auth.guard';
import { ResolveGuard } from './guards/resolve.guard';
import { UnSavedChangesGuard } from './guards/un-saved-changes.guard';
import { ObservableExComponent } from './observable-ex/observable-ex.component';
import { ProductsDashboardComponent } from './products/components/products-dashboard/products-dashboard.component';

const routes: Routes = [
  // Default Path 
  {
    path:'',
    redirectTo:'home',
    pathMatch:'full'
  },
  {
    path:'home',
    component:HomeComponent
  },
  {
    path:'about',
    component:AboutComponent,
    // named router outlet
    children:[
      {outlet:'map', path:'location',component:LocationComponent},
      {outlet:'feeds', path:'feedback',component:FeedbackComponent}
    ]
  },
  // CanActivate Route Guard
  {
    path:'users',
    component:UsersComponent,
    // canActivate:[AuthGuard]
  },
  // CanDeactivate Route Guard
  {
    path:'users/adduser',
    component:AddUserComponent,
    canDeactivate:[UnSavedChangesGuard]
  },
  {
    path:'contact',
    component:ContactComponent
  },
  {
    path:'contact-admin',
    component:ContactComponent
  },
  // Resolve Route Guard(Custom)
  {
    path:'resolve',
    component:ResolveGuardExComponent,
    resolve:{
      data:ResolveGuard
    }
  },
  // Routing Parameter, Nested/Child Routing, CanActivateChild Route Guard
  {
    path:'user/:id',
    component:UserComponent,
    canActivate:[AuthGuard],
    canActivateChild:[AdminGuard],
    children:[
      // {path:'',redirectTo:'address',pathMatch:'full'},
      {path:'address',component:AddressComponent},
      {path:'company',component:CompanyComponent}
    ]
  },
  // Working with featured module(lazy Loading)
  {
    path:'products',
    loadChildren: () => import('./products/products.module').then(m => m.ProductsModule)
  },
  {
    path:'observable',
    component:ObservableExComponent
  },
  // Handling invalid routing
  // redirect to Contact page, if there is any error while loading path
  {
    path:'**',
    component:ContactadminComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
