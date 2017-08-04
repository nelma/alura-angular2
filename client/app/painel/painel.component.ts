import { Component, Input, OnInit, ElementRef } from '@angular/core';
//ElementRef: o elemento do DOM do nosso componente

@Component({
    moduleId: module.id,
    selector: 'painel',
    templateUrl: './painel.component.html',
    styleUrls: ['./painel.component.css']
})
export class PainelComponent implements OnInit {


    @Input() titulo: string;
    private elemento: ElementRef;

    constructor(elemento: ElementRef) {
        this.elemento = elemento; 
    }

    //ngOnInit eh execuatado apos o titulo receber o input
    ngOnInit(): void {
        this.titulo = this.titulo.length > 7 ?
             this.titulo.substr(0,7)+'...' :
             this.titulo;
    }

    fadeOut(cb) {   
       // erro de compilação! Não entra o $!
        $(this.elemento.nativeElement).fadeOut(cb);
    }
}