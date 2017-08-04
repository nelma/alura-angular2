import {Component, ElementRef, Output, Input, EventEmitter, AfterViewInit} from '@angular/core';


@Component({
    moduleId: module.id,
    selector: 'modal',
    templateUrl: './modal.component.html'
})
export class ModalComponent implements AfterViewInit {

    @Input() private titulo: string = 'Tem certeza?';
    @Input() private frase: string;
    @Output() confirma = new EventEmitter();
    _element;

    constructor(private element: ElementRef) {
        this._element = element;
    }

    ngAfterViewInit(): void {
        $(this._element.nativeElement).dialog({
            title: this.titulo,
            autoOpen: false,
            resizable: false,
            modal: true,
            buttons: {
                Cancelar: ()=> {
                    $(this._element.nativeElement).dialog( "close" );
                },
                Confirmar: ()=> {
                    $(this._element.nativeElement).dialog( "close" );
                    this.confirma.emit();
                }
            }
        });
    }


    show() {    
       // quando chamado, exibe o modal!
       $(this._element.nativeElement).dialog('open');
    }
}