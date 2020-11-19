import { Component, OnInit } from '@angular/core';
import { Parallax, SwiperOptions } from 'swiper';
//import { Swiper,SwiperOptions } from 'swiper/bundle';
import { SwiperComponent, SwiperDirective } from 'ngx-swiper-wrapper';
import {DomSanitizer} from '@angular/platform-browser';

import { faMapMarkerAlt,faArrowLeft,faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { faClock} from '@fortawesome/free-regular-svg-icons'
import { NgbRatingConfig } from '@ng-bootstrap/ng-bootstrap';
import { from } from 'rxjs';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';

@Component({
	selector: 'app-index',
	templateUrl: './index.component.html',
	styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {

	mapMaker = faMapMarkerAlt;
	faClock = faClock;

	currentRate = 3.5;
	date: string = new Date().toDateString();


	options: FormGroup;
  
  //main slider
	public config1: SwiperOptions = {
		a11y: { enabled: true },
		direction: 'horizontal',
		slidesPerView: 1,
		keyboard: false,
		mousewheel: false,
		scrollbar: false,
		grabCursor:true,
		autoplay: {
			disableOnInteraction: true
		},
		loop: true,
		pagination: false,
		
	};

	//swiper two
	public config2: SwiperOptions ={
		a11y: { enabled: true },
		direction: 'horizontal',
		slidesPerView: 3,
		keyboard: false,
		mousewheel: false,
		scrollbar: false,
		pagination: false,
		autoplay: false,
		navigation: {
			nextEl: '.swiper-two-next-nav',
			prevEl: '.swiper-two-prev-nav'
		},
		breakpoints: {
			576: {
				slidesPerView: 4,
				spaceBetween: 10,
			},
			768: {
				slidesPerView: 5,
				spaceBetween: 20,
			},
			992: {
        		slidesPerView: 6,
				spaceBetween: 20,
			},
			1024: {
				slidesPerView: 8,
				spaceBetween: 20,
			}
		}
	};

	//popular tours
	public config3: SwiperOptions ={
		a11y: { enabled: true },
		direction: 'horizontal',
		spaceBetween: 10,
		
		freeMode: true,
		freeModeMomentum: true,
		slidesPerView: 1,
		loop: true,
		keyboard: false,
		mousewheel: false,
		scrollbar: false,
		pagination: false,
		navigation: {
			nextEl: '.next-3',
			prevEl: '.prev-3'
		},
		autoplay: false,
		breakpoints: {
			576: {
				slidesPerView: 1,
				spaceBetween: 20,
			},
			768: {
				slidesPerView: 2,
				spaceBetween: 20,
			},
			992: {
				slidesPerView: 2,
				spaceBetween: 20,
				slidesOffsetAfter:  70,
				slidesOffsetBefore: 80,
			},
			1024: {
				slidesPerView: 2,
				spaceBetween: 20,
				slidesOffsetAfter:  70,
				slidesOffsetBefore: 80,
			}
		}
	};

	//popular destinations
	public config4: SwiperOptions ={
		a11y: { enabled: true },
		direction: 'horizontal',
		freeMode: true,
		freeModeMomentum: true,
		slidesPerView: 1,
		spaceBetween: 10,
		keyboard: false,
		mousewheel: false,
		scrollbar: false,
		pagination: false,
		loop: true,
		navigation: {
			nextEl: '.next-4',
			prevEl: '.prev-4'
		},
		autoplay: {
			disableOnInteraction: true
		},
		breakpoints: {
			576: {
				slidesPerView: 1,
				spaceBetween: 5,
			},
			768: {
				slidesPerView: 2,
				spaceBetween: 5,
			},
			992: {
				slidesPerView: 3,
				spaceBetween: 10,
				// slidesOffsetAfter:  30,
				slidesOffsetBefore: 70,
			},
			1024: {
				slidesPerView: 3,
				spaceBetween: 20,
				//slidesOffsetAfter:  40,
				slidesOffsetBefore: 70,
			}
		}
	};

	//Top destinations
	public config5: SwiperOptions ={
		a11y: { enabled: true },
		direction: 'horizontal',
		spaceBetween: 10,
		slidesOffsetAfter:  0,
		slidesOffsetBefore: 0,
		freeMode: true,
		freeModeMomentum: true,
		slidesPerView: 2,
		keyboard: false,
		mousewheel: false,
		scrollbar: false,
		pagination: false,
		autoplay: {
			disableOnInteraction: true
		},
		breakpoints: {
			576: {
				slidesPerView: 2,
				spaceBetween: 5,
			},
			768: {
				slidesPerView: 3,
				spaceBetween: 5,
			},
			992: {
				slidesPerView: 6,
				spaceBetween: 10,
			},
			1024: {
				slidesPerView: 6,
				spaceBetween: 10,
			}
		}
	};

	public config6: SwiperOptions ={
		a11y: { enabled: true },
		direction: 'horizontal',
		slidesPerView: 1,
		keyboard: false,
		mousewheel: false,
		scrollbar: false,
		autoplay: {
			disableOnInteraction: true
		},
		loop: true,
		pagination: false,
		breakpoints: {
			768: {
				slidesPerView: 2,
				spaceBetween: 5,
			},
			992: {
				slidesPerView: 4,
				spaceBetween: 10,
			}	
		}
	};

	//@ViewChild(SwiperComponent, { static: false }) componentRef?: SwiperComponent;
	//@ViewChild(SwiperDirective, { static: false }) directiveRef?: SwiperDirective;

	//this.componentRef.directiveRef.setIndex(0);

	slidesData = [
		{
			id: 1,
			name: "image one"
		},
		{
			id: 2,
			name: "image two"
		},
		{
			id: 3,
			name: "image three"
		},
		{
			id: 4,
			name: "image five"
		},
		{
			id: 5,
			name: "image six"
		},
		{
			id: 6,
			name: "image seven"
		},
		{
			id: 7,
			name: "image eight"
		},
		{
			id: 8,
			name: "image nine"
		},
		{
			id: 9,
			name: "image ten"
		},
		{
			id: 10,
			name: "image eleven"
		}
	];



	tourData1= [
		{
			id: 1,
			name: "image one"
		},
		{
			id: 2,
			name: "image two"
		},
		{
			id: 3,
			name: "image three"
		},
		{
			id: 4,
			name: "image five"
		},
		{
			id: 5,
			name: "image six"
		},
		{
			id: 6,
			name: "image seven"
		},
		{
			id: 7,
			name: "image eight"
		},
		{
			id: 8,
			name: "image nine"
		},
		{
			id: 9,
			name: "image ten"
		},
		{
			id: 10,
			name: "image eleven"
		}
	];

	tourData2 = [
		{
			id: 11,
			name: "image eleven"
		},
		{
			id: 12,
			name: "image eleven"
		},
		{
			id: 13,
			name: "image eleven"
		},
		{
			id: 14,
			name: "image eleven"
		},
		{
			id: 15,
			name: "image eleven"
		},
		{
			id: 16,
			name: "image eleven"
		},
		{
			id: 17,
			name: "image eleven"
		},
		{
			id: 13,
			name: "image eleven"
		},
		{
			id: 19,
			name: "image eleven"
		},
		{
			id: 1,
			name: "image eleven"
		}
	];

	tourData3 = [
		{
			id: 1,
			name: "image eleven"
		},
		{
			id: 2,
			name: "image eleven"
		},
		{
			id: 3,
			name: "image eleven"
		},
		{
			id: 4,
			name: "image eleven"
		},
		{
			id: 5,
			name: "image eleven"
		},
		{
			id: 6,
			name: "image eleven"
		},
		{
			id: 7,
			name: "image eleven"
		},
		{
			id: 8,
			name: "image eleven"
		},
		{
			id: 9,
			name: "image eleven"
		},
		{
			id: 10,
			name: "image eleven"
		}
	];

	tourData4 = [
		{
			id: 31,
			name: "image eleven"
		},
		{
			id: 32,
			name: "image eleven"
		},
		{
			id: 33,
			name: "image eleven"
		},
		{
			id: 34,
			name: "image eleven"
		},
		{
			id: 35,
			name: "image eleven"
		},
		{
			id: 36,
			name: "image eleven"
		},
		{
			id: 37,
			name: "image eleven"
		},
		{
			id: 38,
			name: "image eleven"
		},
		{
			id: 39,
			name: "image eleven"
		},
		{
			id: 40,
			name: "image eleven"
		}
	];


	tourMandate = [
		{
			id: 20,
			mandate: "any route",
			description: "We will help you to make any route for travel",
		},
		{
			id: 30,
			mandate: "your dream",
			description: "Your dreams of an unforgettable journey can come true with us"
		},
		{
			id: 40,
			name: "image eleven",
			mandate: "our guarantee",
			description: "We guarantee you an unforgettable journey and a lot of impressions"
		}
	];

	searchToureForm = new FormGroup({
		keyWord: new  FormControl(''),
		activity: new FormControl,
		destination: new FormControl,
		duration: new FormControl(''),
		date: new FormControl('')

	});


	constructor(rateConfig: NgbRatingConfig) { 		
		rateConfig.max = 5;
		rateConfig.readonly = true;
	}

	ngOnInit(): void {}
}
