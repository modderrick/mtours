import { Component, OnInit } from '@angular/core';
import { SwiperOptions } from 'swiper';

@Component({
  selector: 'app-destination',
  templateUrl: './destination.component.html',
  styleUrls: ['./destination.component.scss']
})
export class DestinationComponent implements OnInit {

	

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
		/*{
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
		}*/
	];

  constructor() { }

  ngOnInit(): void {
  }

}
