import { Component, Input } from '@angular/core';
import { FotoComponent } from '../foto/foto.component';
import { FotoService } from '../foto/foto.service';

//FormBuilder ajuda a criar uma instancia do formGroup
import { FormGroup, FormBuilder, Validators } from '@angular/forms'; //para gerenciar um ou mais inputs do controle

@Component({
    moduleId: module.id,
    selector: 'cadastro',
    templateUrl: './cadastro.component.html'
})
export class CadastroComponent {
    foto: FotoComponent = new FotoComponent();
    meuForm: FormGroup;
    service: FotoService;

    //injecao de dependencia no construtor
    constructor(service: FotoService, fb: FormBuilder) {
        this.service = service;

        this.meuForm = fb.group({
            titulo: ['', Validators.compose(
                [Validators.required, Validators.minLength(4)]
            )],
            url: ['', Validators.required],
            descricao: [''],
        });
    }

    cadastrar(event) {
        event.preventDefault();

        this.service.cadastra(this.foto)
            .subscribe(() => {
                this.foto = new FotoComponent();
                console.log('Foto salva com sucesso');
            }, erro => {
                console.log(erro);
            });

        console.log(this.foto); 
    }
}