import { Component } from '@angular/core';
import { Http } from '@angular/http';

@Component({
    moduleId: module.id, //Faz com que o componente procure o template relativo à sua pasta.
    selector: 'app',
    templateUrl: './app.component.html',
})
export class AppComponent {}