import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './pages/home/header/header.component';
import { AboutComponent } from './pages/home/about/about.component';
import { ProjectsComponent } from './pages/projects/projects/projects.component';
import { TechnologyTableComponent } from './pages/home/technology-table/technology-table.component';
import { ContactsComponent } from './layout/footer/contacts/contacts.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ReactiveFormsModule } from '@angular/forms';
import { PopFormComponent } from './pop-ups/pop-form/pop-form.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AboutComponent,
    ProjectsComponent,
    TechnologyTableComponent,
    ContactsComponent,
    PopFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
