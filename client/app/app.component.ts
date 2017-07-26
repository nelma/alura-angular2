import { Component, Inject } from '@angular/core';
import { Http } from '@angular/http';

@Component({
    moduleId: module.id, //Faz com que o componente procure o template relativo à sua pasta.
    selector: 'app',
    templateUrl: './app.component.html',
})
export class AppComponent {

    fotos: Object[] = [];


    /**
     * @Inject(Http) é a injeção de dependencia na definicao de classe.
     * @Inject(Http) http ou http: Http
     */
    constructor(@Inject(Http) http) {

        http.get('v1/fotos')
            .map(res => res.json())
            .subscribe(
                fotos => this.fotos = fotos, //toda arrow function compartilha o mesmo this léxico do escopo do pai
                error => console.log(error) //caso ocorra erro, devemos logar
            )

    }
}