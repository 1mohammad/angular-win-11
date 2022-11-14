import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { DragToSelectModule } from 'ngx-drag-to-select';
import { AppIconModel } from 'src/app/models/app-icon.model';
import { MouseEventModel } from 'src/app/models/mouse-event.model';
import { ContextMenuService } from 'src/app/services/context-menu.service';
import { AppIconsComponent } from '../app-icons/app-icons.component';

@Component({
	selector: 'win-desktop',
	templateUrl: './desktop.component.html',
	styleUrls: ['./desktop.component.scss'],
	standalone: true,
	imports: [
		CommonModule,
		DragToSelectModule,
		AppIconsComponent
	]
})
export class DesktopComponent implements OnInit {
	selectedDocuments = [];
	apps: AppIconModel[] = [
		{
			icon: 'assets/icons/bin0.png',
			title: 'Recycle Bin',
			active: false,
			visible: true,
			showTitle: true,
			taskbar: false
		},
		{
			icon: 'assets/icons/code.png',
			title: 'Visual Studio Code',
			active: false,
			visible: true,
			showTitle: true,
			taskbar: false
		},
		{
			icon: 'assets/icons/explorer.png',
			title: 'File Explorer',
			active: false,
			visible: true,
			showTitle: true,
			taskbar: false
		}
	]
	constructor(private contextMenuService: ContextMenuService) { }


	openMenu({ x, y }: MouseEventModel) {
		const mouseEvent = { x, y };
		this.contextMenuService.open(mouseEvent, [{title:"hello"}]);
		return false;
	}

	openAppMenu({ x, y }: MouseEventModel) {
		const mouseEvent = { x, y };
		this.contextMenuService.open(mouseEvent, [{title:"app"}]);
		return false;
	}

	ngOnInit(): void {
	}

	someMethod(ev: any) {
		console.log(ev);
	}

	onRightClick() {
		console.log('what ?');
		return false;
	}

}
