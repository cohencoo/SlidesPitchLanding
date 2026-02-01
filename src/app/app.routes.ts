import { Routes } from '@angular/router';
import { LandingPage } from './landing-page/landing-page';
import { PrivacyPage } from './privacy-page/privacy-page';

export const routes: Routes = [
	{ path: '', component: LandingPage },
	{ path: 'privacy', component: PrivacyPage },
	{ path: '**', redirectTo: '' },
];
