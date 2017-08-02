import { FotoComponent } from './../foto/foto.component';
import { Component } from '@angular/core';
import { Http } from '@angular/http';
import { FotoService } from '../foto/foto.service';

@Component({
    moduleId: module.id,
    selector: 'listagem',
    templateUrl: './listagem.component.html'
})
export class ListagemComponent{
    fotos: FotoComponent[] = [];


    /**
     * @Inject(Http) é a injeção de dependencia na definicao de classe.
     * @Inject(Http) http ou http: Http
     */
    constructor(service: FotoService) {
        service.lista()
            .subscribe(
                fotos => this.fotos = fotos,
                erro => console.log(erro)
            );
    }
}