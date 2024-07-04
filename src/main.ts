import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';


import { importProvidersFrom } from '@angular/core';
import { AppComponent } from './app/app.component';
import { ContactsComponent } from './app/components/footer/contacts/contacts.component';
import { AboutComponent } from './app/pages/about/about.component';
import { ProjectsComponent } from './app/pages/projects/projects/projects.component';
import { HomePageComponent } from './app/pages/home/home-page/home-page.component';
import { withInMemoryScrolling, provideRouter, Routes } from '@angular/router';
import { ToastrModule } from 'ngx-toastr';
import { provideAnimations } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AppRoutingModule } from './app/app-routing.module';
import { BrowserModule, bootstrapApplication } from '@angular/platform-browser';

const routes: Routes = [
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    {path: 'home', component: HomePageComponent},
    {path: 'projects', component: ProjectsComponent},
    {path: 'about', component: AboutComponent},
    {path: 'contact', component: ContactsComponent},
];



bootstrapApplication(AppComponent, {
    providers: [
        importProvidersFrom(BrowserModule, AppRoutingModule, FontAwesomeModule, ReactiveFormsModule, ToastrModule.forRoot({
            timeOut: 1500,
            preventDuplicates: true,
        })),
        provideAnimations(),
        provideRouter(routes, withInMemoryScrolling({ scrollPositionRestoration: 'enabled' })),
    ]
})
    .catch((err) => console.error(err));
