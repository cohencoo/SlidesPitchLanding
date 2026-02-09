import { Component } from '@angular/core';

@Component({
	selector: 'app-landing-page',
	imports: [],
	templateUrl: './landing-page.html',
	styleUrl: './landing-page.scss',
})
export class LandingPage {
	public posterSrc = 'poster.png';
	public videoSrc = 'productvideo.mp4';

	showcase = [
		{
			title: 'Real-time generation',
			desc1: 'Generated live as you watch.',
			desc2: 'No waiting. No exporting. Just press play.',
			video: 'showcase-1.mp4',
		},
		{
			title: 'Visual learning',
			desc1: 'Slides, diagrams, images, and voice.',
			desc2: 'Built for your brain, not your eyeballs.',
			image: 'showcase-2.png',
		},
		{
			title: 'Made for you',
			desc1: 'Presentations made specifically for your question.',
			desc2: 'No generic content. Just your answer.',
			image: 'showcase-3.png',
		},
	];

	showing = this.showcase[0];
}
