import { Component } from '@angular/core';
import { Http } from '@angular/http';

@Component({
    moduleId: module.id,
    selector: 'listagem',
    templateUrl: './listagem.component.html'
})
export class ListagemComponent{
    fotos: Object[] = [];


    /**
     * @Inject(Http) é a injeção de dependencia na definicao de classe.
     * @Inject(Http) http ou http: Http
     */
    constructor(http: Http) {

        http.get('v1/fotos')
            .map(res => res.json())
            .subscribe(
                fotos => this.fotos = fotos, //toda arrow function compartilha o mesmo this léxico do escopo do pai
                error => console.log(error) //caso ocorra erro, devemos logar
            )

    }
}