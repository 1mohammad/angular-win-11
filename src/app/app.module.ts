import { OverlayModule } from '@angular/cdk/overlay';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DragToSelectModule } from 'ngx-drag-to-select';

import { AppComponent } from './app.component';
import { DesktopComponent } from './components/desktop/desktop.component';
import { TaskbarComponent } from './components/taskbar/taskbar.component';
import { ContextMenuComponent } from './components/context-menu/context-menu.component';

@NgModule({
  declarations: [
    AppComponent,
    ContextMenuComponent,
  ],
  imports: [
    BrowserModule,
	TaskbarComponent,
	DesktopComponent,
	DragToSelectModule.forRoot(),
	OverlayModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
