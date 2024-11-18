import {appConfig} from './routes/app.config';
import {AppComponent} from './routes/app.component';

import {bootstrapApplication} from '@angular/platform-browser';

bootstrapApplication(AppComponent, appConfig).catch((err) =>
    console.error(err)
);
