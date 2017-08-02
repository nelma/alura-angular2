import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FotoComponent } from './foto.component';
import { FiltroPorTitulo } from './foto.pipes';
import { FotoService } from './foto.service';

@NgModule({
    imports: [CommonModule],
    declarations: [ FotoComponent, FiltroPorTitulo ],//pertence ao módulo
    exports: [ FotoComponent, FiltroPorTitulo ],//pra quem for usar, mastem que ter decorator
    providers: [ FotoService ]//provedor esta disponivel para injecao de dependencia
})

export class FotoModule {}