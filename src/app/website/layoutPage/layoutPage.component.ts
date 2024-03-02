import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ButtonComponent } from '../../shared/buttons';

@Component({
    selector: 'app-layout-page',
    standalone: true,
    imports: [CommonModule, ButtonComponent],
    templateUrl: './layoutPage.component.html',
})
export default class LayoutPageComponent {}
