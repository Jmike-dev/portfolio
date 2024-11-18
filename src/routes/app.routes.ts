import {Routes} from '@angular/router';
import {ContactsComponent} from 'src/layouts/footer/contacts/contacts.component';
import {AboutComponent} from 'src/pages/about/about.component';
import {HomePageComponent} from 'src/pages/home/home-page/home-page.component';
import {ProjectsComponent} from 'src/pages/projects/projects/projects.component';

export const routes: Routes = [
    {path: 'home', component: HomePageComponent},
    {path: 'projects', component: ProjectsComponent},
    {path: 'about', component: AboutComponent},
    {path: 'contact', component: ContactsComponent},
    {path: '', redirectTo: 'home', pathMatch: 'full'},
];
