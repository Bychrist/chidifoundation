import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './partials/header/header.component';
import { AboutComponent } from './about/about.component';
import { BeneficiaryComponent } from './beneficiary/beneficiary.component';
import { GalleryComponent } from './gallery/gallery.component';
import { BlogandeventComponent } from './blogandevent/blogandevent.component';
import { ApiService } from './services/api.service';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CoolHttpModule } from '@angular-cool/http';
import { CoolLoadingIndicatorModule } from '@angular-cool/loading-indicator';
import { SingleblogeventComponent } from './singleblogevent/singleblogevent.component';
import { ContactComponent } from './contact/contact.component';
import { JwPaginationModule } from 'jw-angular-pagination';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    AboutComponent,
    BeneficiaryComponent,
    GalleryComponent,
    BlogandeventComponent,
    SingleblogeventComponent,
    ContactComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    CoolHttpModule.forRoot(),
    CoolLoadingIndicatorModule,
    JwPaginationModule
  ],
  providers: [
    { provide: LocationStrategy, useClass: HashLocationStrategy },

    ApiService,
],
  bootstrap: [AppComponent]
})
export class AppModule { }
