import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { SwiperOptions } from 'swiper';




@Component({
	selector: 'app-navigation',
	templateUrl: './navigation.component.html',
	styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent {
	MENU_DATA: any= [
		{
			name: 'Dashboard',
			link: '/admin/dashboard',
			expandable: false,
		}, 
		{
			name: 'tour package',
			expandable: true,
			dropDown: [
				{
					name: 'tour categories',
					link: '/admin/tour-category',
					expandable: false,
					level: 1,
				}, 
				{
					name: 'tours',
					link: '/admin/tours',
					expandable: false,
					level: 1,
				},
				{
					name: 'destinations',
					link: '/admin/destination',
					expandable: false,
					level: 1,
				}, 
			],
		}, 	
		{
			name: 'bookings',
			link: '/admin/booking',
			expandable: false,
		}, 
		{
			name: 'customers',
			expandable: false,
			link: 'fg'
		}, 
		{
			name: 'reviews',
			expandable: false,
		},
		{
			name: 'email subscriptions',
			expandable: false,
		}, 
		{
			name: 'blog',
			expandable: true,
			dropDown: [
				{
					name: 'Categories',
					expandable: false,
					level: 1,
				},
				{
					name: 'articles',
					expandable: false,
					level: 1,
				}
			]
		}, 
		
		{
			name: 'system',
			expandable: true,
			dropDown: [
				{
					name: 'settings',
					expandable: false,
				},
				{
					name: 'users',
					expandable: false,
				
				},
				{
					name: 'user groups',
					expandable: false,			
				}
			]
		}	
	];

	isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
	.pipe(
		map(result => result.matches),
		shareReplay()
	);
	isWeb$: Observable<boolean> = this.breakpointObserver.observe([Breakpoints.Medium,
									Breakpoints.Web,Breakpoints.Large,Breakpoints.XLarge,Breakpoints.WebLandscape])
	.pipe(
		map(result => result.matches),
		shareReplay()
	);

	

	constructor(private breakpointObserver: BreakpointObserver) {}
}
