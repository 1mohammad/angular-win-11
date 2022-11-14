import { Component, Input, OnInit } from '@angular/core';

@Component({
	selector: 'win-context-menu',
	templateUrl: './context-menu.component.html',
	styleUrls: ['./context-menu.component.scss']
})
export class ContextMenuComponent implements OnInit {
	@Input() items!: { title: string }[]
	constructor() { }

	ngOnInit(): void {
	}

}
