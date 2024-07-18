import { ApplicationConfig, importProvidersFrom } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { provideAnimations } from "@angular/platform-browser/animations";
import { provideRouter, withInMemoryScrolling } from "@angular/router";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { ToastrModule } from "ngx-toastr";
import { routes } from "./app.routes";
import { AppRoutingModule } from "./app/app-routing.module";

export const appConfig: ApplicationConfig = {
    providers: [
        importProvidersFrom(
            BrowserModule,
            AppRoutingModule,
            FontAwesomeModule,
            ReactiveFormsModule,
            ToastrModule.forRoot({
                timeOut: 1500,
                preventDuplicates: true,
            })
        ),
        provideAnimations(),
        provideRouter(
            routes,
            withInMemoryScrolling({scrollPositionRestoration: 'enabled'})
        ),
    ],
};