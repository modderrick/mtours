import { Component, OnInit } from '@angular/core';
import { BreadCrumbs } from '../../interfaces/bread-crumbs';

@Component({
	selector: 'app-content-header',
	templateUrl: './content-header.component.html',
	styleUrls: ['./content-header.component.scss']
})
export class ContentHeaderComponent implements OnInit {
	page_title  = "dashboard";
	bread_crumbs: BreadCrumbs[] = [
		{
			title: "home",
			link: "/admin"
		},
		{
			title: "Dashboard",
			link: "/admin/dashboard"
		}
	];

	constructor() { }

	ngOnInit(): void {}

}
