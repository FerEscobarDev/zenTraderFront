import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-button',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './button.component.html',
})

export class ButtonComponent {
    @Input() variant: 'button' | 'link' | 'outline' = 'button';
    @Input() type: 'button' | 'submit' | 'reset' = 'button';
    @Input() color: 'primary' | 'secondary' | 'tertiary' | 'success' | 'warning' | 'danger' | 'info' = 'primary';
    @Input() size: 'small' | 'regular' | 'large' = 'small';
    @Input() disabled: boolean = false;

    getLinkClass() {
        const primary = 'text-sky-700 hover:text-sky-800 active:text-sky-600';
        const secondary = 'text-gray-700 hover:text-gray-800 active:text-gray-600';
        const tertiary = 'text-gray-700 hover:text-gray-800 active:text-gray-600';
        const success = 'text-green-700 hover:text-green-800 active:text-green-600';
        const warning = 'text-orange-500 hover:text-orange-600 active:text-orange-400';
        const danger = 'text-red-700 hover:text-red-800 active:text-red-600';
        const info = 'text-blue-500 hover:text-blue-600 active:text-blue-400';

        let classesButton = '';

        switch (this.color) {
            case 'primary':
                classesButton = primary;
                break;
            case 'secondary':
                classesButton = secondary;
                break;
            case 'tertiary':
                classesButton = tertiary;
                break;
            case 'success':
                classesButton = success;
                break;
            case 'warning':
                classesButton = warning;
                break;
            case 'danger':
                classesButton = danger;
                break;
            case 'info':
                classesButton = info;
                break;
        }

        return classesButton;
    }

    getOulineClass() {
        const primary = 'text-sky-700 border-sky-700 hover:bg-sky-100 active:bg-sky-100/50';
        const secondary = 'text-gray-700 border-gray-700 hover:bg-gray-100 active:bg-gray-100/50';
        const tertiary = 'text-gray-700 border-gray-700 hover:bg-gray-100 active:bg-gray-100/50';
        const success = 'text-green-700 border-green-700 hover:bg-green-100 active:bg-green-100/50';
        const warning = 'text-orange-500 border-orange-500 hover:bg-orange-100 active:bg-orange-100/50';
        const danger = 'text-red-700 border-red-700 hover:bg-red-100 active:bg-red-100/50';
        const info = 'text-blue-500 border-blue-500 hover:bg-blue-100 active:bg-blue-100/50';

        let classesButton = '';

        switch (this.color) {
            case 'primary':
                classesButton = primary;
                break;
            case 'secondary':
                classesButton = secondary;
                break;
            case 'tertiary':
                classesButton = tertiary;
                break;
            case 'success':
                classesButton = success;
                break;
            case 'warning':
                classesButton = warning;
                break;
            case 'danger':
                classesButton = danger;
                break;
            case 'info':
                classesButton = info;
                break;
        }

        return classesButton;
    }

    getButtonClass() {
        const primary = 'text-white bg-sky-700 hover:bg-sky-800 active:bg-sky-600 border-transparent';
        const secondary = 'text-white bg-gray-700 hover:bg-gray-800 active:bg-gray-600 border-transparent';
        const tertiary = 'text-white bg-white hover:bg-gray-100 active:bg-gray-200 border-transparent';
        const success = 'text-white bg-green-700 hover:bg-green-800 active:bg-green-600 border-transparent';
        const warning = 'text-white bg-orange-500 hover:bg-orange-600 active:bg-orange-400 border-transparent';
        const danger = 'text-white bg-red-700 hover:bg-red-800 active:bg-red-600 border-transparent';
        const info = 'text-white bg-blue-500 hover:bg-blue-600 active:bg-blue-400 border-transparent';

        let classesButton = '';

        switch (this.color) {
            case 'primary':
                classesButton = primary;
                break;
            case 'secondary':
                classesButton = secondary;
                break;
            case 'tertiary':
                classesButton = tertiary;
                break;
            case 'success':
                classesButton = success;
                break;
            case 'warning':
                classesButton = warning;
                break;
            case 'danger':
                classesButton = danger;
                break;
            case 'info':
                classesButton = info;
                break;
        }

        return classesButton;
    }

    getVariantClass() {
        let classesButton = '';

        switch (this.variant) {
            case 'button':
                classesButton = this.getButtonClass();
                break;
            case 'link':
                classesButton = this.getLinkClass();
                break;
            case 'outline':
                classesButton = this.getOulineClass();
                break;
        }

        return classesButton;
    }

    getSizeClass() {
        const small = 'text-sm px-4 py-2 shadow hover:shadow-md';
        const regular = 'text-sm px-6 py-3 shadow hover:shadow-lg';
        const large = 'text-base px-8 py-3 shadow-md hover:shadow-lg';

        let classesButton = '';

        switch (this.size) {
            case 'small':
                classesButton = small;
                break;
            case 'regular':
                classesButton = regular;
                break;
            case 'large':
                classesButton = large;
                break;
        }

        return classesButton;
    }

    getTypeClass() {
        const button = 'border font-bold inline-flex items-center justify-center outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 min-w-24';
        const link = 'bg-transparent font-base inline-flex items-center justify-center shadow-none bg-white/10 hover:bg-white/20 focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 min-w-24';
        const outline = 'bg-white/80 border font-bold inline-flex items-center justify-center outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 min-w-24';

        let classesButton = '';

        switch (this.variant) {
            case 'button':
                classesButton = button;
                break;
            case 'link':
                classesButton = link;
                break;
            case 'outline':
                classesButton = outline;
                break;
        }

        return classesButton;
    }

    getAllClasses() {
        const variantClass = this.getVariantClass();
        const sizeClass = this.getSizeClass();
        const typeClass = this.getTypeClass();
        const disabledClass = this.disabled ? 'opacity-50 cursor-not-allowed' : '';

        return `${variantClass} ${sizeClass} ${typeClass} ${disabledClass}`;
    }
}
