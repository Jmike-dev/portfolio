// modules
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// components
import { AppComponent } from './app.component';
import { HeaderComponent } from './pages/home/header/header.component';
import { AboutComponent } from './pages/home/about/about.component';
import { ProjectsComponent } from './pages/projects/projects/projects.component';
import { TechnologyTableComponent } from './pages/home/technology-table/technology-table.component';
import { ContactsComponent } from './layout/footer/contacts/contacts.component';
import { PopFormComponent } from './pop-ups/pop-form/pop-form.component';
import { HomePageComponent } from './pages/home/home-page/home-page.component';
import { NavbarComponent } from './layout/navbar/navbar.component';

const routes: Routes = [
  {path:'', redirectTo:'home', pathMatch:'full'},
  {path: 'home', component: HomePageComponent},
  {path: 'projects', component: ProjectsComponent},
  {path: 'about', component: AboutComponent}
]
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AboutComponent,
    ProjectsComponent,
    TechnologyTableComponent,
    ContactsComponent,
    PopFormComponent,
    HomePageComponent,
    NavbarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      timeOut: 1500,
      preventDuplicates: true,
    }),
    RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
