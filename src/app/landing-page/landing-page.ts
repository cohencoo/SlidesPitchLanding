import { Component, ElementRef, NgZone, ViewChild } from '@angular/core';

@Component({
	selector: 'app-landing-page',
	imports: [],
	templateUrl: './landing-page.html',
	styleUrl: './landing-page.scss',
})
export class LandingPage {
	@ViewChild('heroVideo', { static: true }) heroVideo!: ElementRef<HTMLVideoElement>;

	constructor(private zone: NgZone) {}

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

	ngAfterViewInit() {
		const v = this.heroVideo.nativeElement;

		v.muted = true;
		v.playsInline = true;
		v.autoplay = true;

		this.zone.runOutsideAngular(() => {
			// Let the browser attempt autoplay naturally first.
			// Only attempt manual play after the element is "ready enough".
			const attempt = async () => {
				try {
					if (v.readyState < 2) {
						await new Promise<void>((res) =>
							v.addEventListener('canplay', () => res(), { once: true }),
						);
					}
					await v.play();
				} catch {
					// blocked: arm first interaction to start it immediately
					const arm = async () => {
						try {
							await v.play();
						} catch {}
						window.removeEventListener('pointerdown', arm, true);
						window.removeEventListener('touchstart', arm, true);
						window.removeEventListener('keydown', arm, true);
					};
					window.addEventListener('pointerdown', arm, true);
					window.addEventListener('touchstart', arm, true);
					window.addEventListener('keydown', arm, true);
				}
			};

			requestAnimationFrame(() => void attempt());
		});
	}
}
