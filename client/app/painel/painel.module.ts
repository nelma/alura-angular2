import { NgModule } from '@angular/core';
import { PainelComponent } from './painel.component';

@NgModule({
    declarations: [PainelComponent],
    exports: [PainelComponent] //para outro modulo poder usar entao exporta
})
export class PainelModule{}