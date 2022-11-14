import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { AppIconModel } from 'src/app/models/app-icon.model';
import { MouseEventModel } from 'src/app/models/mouse-event.model';
import { ContextMenuService } from 'src/app/services/context-menu.service';

@Component({
	selector: 'win-app-icon',
	templateUrl: './app-icons.component.html',
	styleUrls: ['./app-icons.component.scss'],
	standalone: true,
	imports: [CommonModule]
})
export class AppIconsComponent implements OnInit {
	@Input() item!: AppIconModel
	constructor(private contextMenuService: ContextMenuService) { }

	ngOnInit(): void {
	}

	openAppMenu({ x, y }: MouseEventModel) {
		const mouseEvent = { x, y };
		this.contextMenuService.open(mouseEvent, [{ title: "appIcon" }]);
		return false;
	}

}
