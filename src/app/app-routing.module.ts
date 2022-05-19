import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { BeneficiaryComponent } from './beneficiary/beneficiary.component';
import { BlogandeventComponent } from './blogandevent/blogandevent.component';
import { ContactComponent } from './contact/contact.component';
import { GalleryComponent } from './gallery/gallery.component';
import { HomeComponent } from './home/home.component';
import { SingleblogeventComponent } from './singleblogevent/singleblogevent.component';

const routes: Routes = [
{path:'',component:HomeComponent},
  { path: 'home', component: HomeComponent},
  { path: 'about', component: AboutComponent },
  { path: 'beneficiary', component: BeneficiaryComponent },
  { path: 'blog-event', component: BlogandeventComponent },
  {path:'blog_event/:id/:slug',component:SingleblogeventComponent},
  { path: 'contact', component: ContactComponent },
  { path: '**', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
