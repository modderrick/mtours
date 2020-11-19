import { Component, OnInit } from '@angular/core';
import { SwiperOptions } from 'swiper';

@Component({
	selector: 'app-blog-article',
	templateUrl: './blog-article.component.html',
	styleUrls: ['./blog-article.component.scss']
	})
export class BlogArticleComponent implements OnInit {
	date: string = new Date().toDateString();

	public config0: SwiperOptions ={
		a11y: { enabled: true },
		direction: 'horizontal',
		spaceBetween: 30,
		slidesOffsetAfter:  0,
		slidesOffsetBefore: 0,
		freeMode: true,
		freeModeMomentum: true,
		slidesPerView: 1,
		keyboard: false,
		mousewheel: false,
		scrollbar: false,
		pagination: false,
		navigation: {
		nextEl: '.next-article',
		prevEl: '.prev-article'
		},
		autoplay: {
		disableOnInteraction: false
		},
		breakpoints: {
			768: {
				slidesPerView: 2,
				spaceBetween: 5,
			},
			992:{
				slidesPerView: 2,
				spaceBetween: 30,
			}
		}
	};
	
	recentArticleData = [
		{
			id: 21,
			name: "image eleven"
		},
		{
			id: 22,
			name: "image eleven"
		},
		{
			id: 23,
			name: "image eleven"
		}
	];

	constructor() { }

	ngOnInit(): void {}

}
