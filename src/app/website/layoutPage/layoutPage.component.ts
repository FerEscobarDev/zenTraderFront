import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet, Router, RouterLink } from '@angular/router';
import { ButtonComponent } from '../../shared/buttons';
import LoginComponent from '../pages/login/login.component';

@Component({
    selector: 'app-layout-page',
    standalone: true,
    imports: [CommonModule, RouterOutlet, RouterLink, ButtonComponent, LoginComponent],
    templateUrl: './layoutPage.component.html',
})
export default class LayoutPageComponent {
    title = 'zenTraderFront';
    constructor(private router: Router) {}
}
