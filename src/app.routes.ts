import {Routes} from '@angular/router';
import {ContactsComponent} from './app/components/footer/contacts/contacts.component';
import {AboutComponent} from './app/pages/about/about.component';
import {HomePageComponent} from './app/pages/home/home-page/home-page.component';
import {ProjectsComponent} from './app/pages/projects/projects/projects.component';

export const routes: Routes = [
    {path: 'home', component: HomePageComponent},
    {path: 'projects', component: ProjectsComponent},
    {path: 'about', component: AboutComponent},
    {path: 'contact', component: ContactsComponent},
    {path: '', redirectTo: 'home', pathMatch: 'full'},
];
