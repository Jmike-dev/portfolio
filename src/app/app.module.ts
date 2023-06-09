import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/sections/header-section/header/header.component';
import { AboutComponent } from './components/sections/header-section/about/about.component';
import { ProjectsComponent } from './components/sections/body-section/projects/projects.component';
import { TechnologyTableComponent } from './components/sections/header-section/technology-table/technology-table.component';
import { ContactsComponent } from './components/sections/footer-section/contacts/contacts.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ReactiveFormsModule } from '@angular/forms';
import { PopFormComponent } from './components/pop-ups/pop-form/pop-form.component';

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
