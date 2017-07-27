import { FotoComponent } from './../foto/foto.component';
import { Component } from '@angular/core';
import { Http, Headers } from '@angular/http';

//FormBuilder ajuda a criar uma instancia do formGroup
import { FormGroup, FormBuilder, Validators } from '@angular/forms'; //para gerenciar um ou mais inputs do controle

@Component({
    moduleId: module.id,
    selector: 'cadastro',
    templateUrl: './cadastro.component.html'
})
export class CadastroComponent {
    foto: FotoComponent = new FotoComponent();
    http: Http;
    meuForm: FormGroup;

    //injecao de dependencia no construtor
    constructor(http: Http, fb: FormBuilder) {
        this.http = http;
        this.meuForm = fb.group({
            titulo: ['', Validators.compose(
                [Validators.required, Validators.minLength(4)]
            )],
            url: ['', Validators.required],
            descricao: ['']
        })
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