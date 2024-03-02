import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () => import('./website/layoutPage/layoutPage.component'),
        // children: [
        //     {
        //         path: '',
        //         title: 'Change Detection',
        //         loadComponent: () => import('./dashboard/pages/change-detection/change-detection.component'),
        //     }
        // ]
    }
];
