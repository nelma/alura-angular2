import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { FotoModule } from './foto/foto.module';

//importar módulo que já possui um proovider configurado
import { HttpModule } from '@angular/http';

//importando extensao map
import 'rxjs/add/operator/map';

//NgModule transforma a classe numa classe do Angular
@NgModule({
    imports: [ BrowserModule, FotoModule, HttpModule ], //injecao de dependência
    declarations: [ AppComponent ], //importar componentes do projeto. O que faz parte do Modulo
    bootstrap: [ AppComponent ] //O que sera inicializado primeiro

})
export class AppModule {}