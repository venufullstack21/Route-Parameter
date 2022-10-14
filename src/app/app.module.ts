import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { UsersComponent } from './components/users/users.component';
import { ContactComponent } from './components/contact/contact.component';
import { ContactadminComponent } from './components/contactadmin/contactadmin.component';
import { UserComponent } from './components/user/user.component';
import { AddressComponent } from './components/address/address.component';
import { CompanyComponent } from './components/company/company.component';
import { LocationComponent } from './components/location/location.component';
import { FeedbackComponent } from './components/feedback/feedback.component';
import { AuthGuard } from './guards/auth.guard';
import { AdminGuard } from './guards/admin.guard';
import { AddUserComponent } from './components/add-user/add-user.component';
import { UnSavedChangesGuard } from './guards/un-saved-changes.guard';
import { ResolveGuardExComponent } from './components/resolve-guard-ex/resolve-guard-ex.component';
import { ResolveGuard } from './guards/resolve.guard';
import {Ng2SearchPipeModule} from 'ng2-search-filter';
import { FilterPipe } from './pipes/filter.pipe';
import { ObservableExComponent } from './observable-ex/observable-ex.component'
import { NotificationService } from './services/notification.service';
import { NotificationdashboardComponent } from './components/notificationdashboard/notificationdashboard.component';
@NgModule({
  // Components
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    UsersComponent,
    ContactComponent,
    ContactadminComponent,
    UserComponent,
    AddressComponent,
    CompanyComponent,
    LocationComponent,
    FeedbackComponent,
    AddUserComponent,
    ResolveGuardExComponent,
    FilterPipe,
    ObservableExComponent,
    NotificationdashboardComponent
  ],
  // Modules
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    Ng2SearchPipeModule
  ],
  // Guards
  providers: [AuthGuard,AdminGuard,UnSavedChangesGuard,ResolveGuard,NotificationService],
  bootstrap: [AppComponent],
  exports:[FilterPipe]
})
export class AppModule { }
