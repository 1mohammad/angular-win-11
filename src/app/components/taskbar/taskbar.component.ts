import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { AppIconModel } from 'src/app/models/app-icon.model';
import { MouseEventModel } from 'src/app/models/mouse-event.model';
import { ContextMenuService } from 'src/app/services/context-menu.service';
import { AppIconsComponent } from '../app-icons/app-icons.component';

@Component({
  selector: 'win-taskbar',
  templateUrl: './taskbar.component.html',
  styleUrls: ['./taskbar.component.scss'],
  standalone: true,
  imports: [CommonModule, AppIconsComponent]
})
export class TaskbarComponent implements OnInit {
	menuIcons: AppIconModel[] = [
		{
			icon: 'assets/icons/home.png',
			title: 'home',
			active: false,
			visible: true,
			showTitle: false,
			taskbar: true
		}
	]
  constructor(private contextMenuService: ContextMenuService) { }

  ngOnInit(): void {
  }

  openTaskbarMenu({ x, y }: MouseEventModel) {
	const mouseEvent = { x, y };
	this.contextMenuService.open(mouseEvent, [{ title: "taskbar" }]);
	return false;
}

}
