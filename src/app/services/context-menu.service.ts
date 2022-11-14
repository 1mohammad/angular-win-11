import { Injectable } from '@angular/core';
import { filter, fromEvent, Subscription, take } from 'rxjs';
import { Overlay, OverlayRef } from "@angular/cdk/overlay";
import { ComponentPortal } from '@angular/cdk/portal';
import { ContextMenuComponent } from '../components/context-menu/context-menu.component';
import { MouseEventModel } from '../models/mouse-event.model';

@Injectable({
  providedIn: 'root'
})
export class ContextMenuService {

	sub!: Subscription;

	overlayRef!: OverlayRef | null;

	constructor(
		public overlay: Overlay) {
	}

	open({ x, y }: MouseEventModel, items: any) {
		this.close();
		const positionStrategy = this.overlay.position()
			.flexibleConnectedTo({ x, y })
			.withPositions([
				{
					originX: 'start',
					originY: 'bottom',
					overlayX: 'start',
					overlayY: 'top',
				}
			]);

		this.overlayRef = this.overlay.create({
			positionStrategy,
			scrollStrategy: this.overlay.scrollStrategies.close()
		});
		const componentRef = this.overlayRef.attach(new ComponentPortal(ContextMenuComponent));
		componentRef.instance.items = items;


		this.sub = fromEvent<MouseEvent>(document, 'click')
			.pipe(
				filter(event => {
					const clickTarget = event.target as HTMLElement;
					return !!this.overlayRef && !this.overlayRef.overlayElement.contains(clickTarget);
				}),
				take(1)
			).subscribe(() => this.close());
		return false;
	}

	delete(user: any) {
		// delete user
		this.close();
	}

	close() {
		this.sub && this.sub.unsubscribe();
		if (this.overlayRef) {
			this.overlayRef.dispose();
			this.overlayRef = null;
		}
	}
}
