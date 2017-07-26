import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FotoModule } from './foto/foto.module';
import { PainelModule } from './painel/painel.module';
import { AppComponent } from './app.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { ListagemComponent } from './listagem/listagem.component';

//importar módulo que já possui um proovider configurado
import { HttpModule } from '@angular/http';

import { routing } from './app.routes';

//importando extensao map
import 'rxjs/add/operator/map';

//NgModule transforma a classe numa classe do Angular
@NgModule({
    imports: [ 
        BrowserModule, 
        FotoModule, 
        HttpModule, 
        PainelModule, 
        routing ], //injecao de dependência
    declarations: [ AppComponent, CadastroComponent, ListagemComponent ], //importar componentes do projeto. O que faz parte do Modulo
    bootstrap: [ AppComponent ] //O que sera inicializado primeiro

})
export class AppModule {}