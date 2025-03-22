import { Routes } from '@angular/router';
import { LandmarkListComponent } from './components/landmark-list/landmark-list.component';
import { LandmarkFullpageComponent } from './components/landmark-fullpage/landmark-fullpage.component';

export const routes: Routes = [
    {
        path: '',
        component: LandmarkListComponent,
        title: 'Home Page'
    },
    {
        path: 'details/:order',
        component: LandmarkFullpageComponent,
        title: 'Details Page'
    }
];
