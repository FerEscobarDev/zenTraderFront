import { CommonModule } from '@angular/common';
import { Component, Input,OnInit } from '@angular/core';
import { FaIconLibrary, FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { far } from '@fortawesome/free-regular-svg-icons';
import { IconName, fas } from '@fortawesome/free-solid-svg-icons';

@Component({
    selector: 'app-button',
    standalone: true,
    imports: [CommonModule, FontAwesomeModule],
    templateUrl: './button.component.html',
})

type IconParams = { icon: IconName, position: 'left' | 'right', type: 'fas' | 'far' };

export class ButtonComponent {
    @Input() variant: 'button' | 'link' | 'iconButton' = 'button';
    @Input() type: 'button' | 'submit' | 'reset' = 'button';
    @Input({required:true}) color: string;
    @Input({required:true}) text: string;
    @Input() size: 'small' | 'regular' | 'large';
    @Input() disabled: boolean;
    @Input() iconParams: IconParams | null;

    constructor(library: FaIconLibrary) {
        library.addIconPacks(fas, far);
        this.type = 'button';
        this.color = 'blue';
        this.text = '';
        this.size = 'regular';
        this.disabled = false;
    }

    OnInit(){
        console.log(this.icon);
    }
    

}
