import { FotoComponent } from './../foto/foto.component';
import { Component } from '@angular/core';
import { Http } from '@angular/http';
import { FotoService } from '../foto/foto.service';
import { PainelComponent } from '../painel/painel.component';

@Component({
    moduleId: module.id,
    selector: 'listagem',
    templateUrl: './listagem.component.html'
})
export class ListagemComponent{
    fotos: FotoComponent[] = [];
    service: FotoService;
    mensagem: string = '';


    /**
     * @Inject(Http) é a injeção de dependencia na definicao de classe.
     * @Inject(Http) http ou http: Http
     */
    constructor(service: FotoService) {
        this.service = service;

        this.service.lista()
            .subscribe(
                fotos => this.fotos = fotos,
                erro => console.log(erro)
            );
    }

    remove(foto: FotoComponent, painel: PainelComponent): void {
        console.log(foto);

        this.service.remove(foto).subscribe(
            () => {

                painel.fadeOut(() => {
                    console.log("Foto removida");
                    let novasFotos = this.fotos.slice(0);
                    let indice = novasFotos.indexOf(foto);
                    novasFotos.splice(indice, 1);
                    this.fotos = novasFotos;
                    this.mensagem = 'Foto removida com sucesso';
                });
            },  
            erro => {
                console.log(erro)
                this.mensagem = 'Não foi possível remover a foto';
            }
        )
    }
}