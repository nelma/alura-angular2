import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app.module';

//Primero modulo platformBrowserDynamic
const platform = platformBrowserDynamic();
platform.bootstrapModule(AppModule);
