import { FotoComponent } from './../foto/foto.component';
import { Component } from '@angular/core';
import { Http, Headers } from '@angular/http';

@Component({
    moduleId: module.id,
    selector: 'cadastro',
    templateUrl: './cadastro.component.html'
})
export class CadastroComponent {
    foto: FotoComponent = new FotoComponent();
    http: Http;

    constructor(http: Http) {
        this.http = http;
    }

    cadastrar(event) {
        event.preventDefault();

        // cria uma instância de Headers
        let headers = new Headers();
        headers.append('Content-type', 'application/json');

        this.http.post('v1/fotos', JSON.stringify(this.foto), {headers: headers})
                .subscribe(() => {
                    this.foto = new FotoComponent(); //limpa o form apos consegui cadastrar
                    console.log("Foto salva com sucesso");
                }, error => console.log(error)
        );

        console.log(this.foto);
    }
}