import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header-section/header/header.component';
import { AboutComponent } from './components/header-section/about/about.component';
import { ProjectsComponent } from './components/body-section/projects/projects.component';
import { TechnologyTableComponent } from './components/header-section/technology-table/technology-table.component';
import { ContactsComponent } from './components/footer-section/contacts/contacts.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AboutComponent,
    ProjectsComponent,
    TechnologyTableComponent,
    ContactsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
