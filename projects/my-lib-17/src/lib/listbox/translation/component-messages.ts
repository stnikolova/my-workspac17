import { OnChanges, SimpleChanges, OnInit, OnDestroy, Directive } from '@angular/core';
import { skip } from "rxjs/operators";
import { Subscription } from 'rxjs';
import { TestTranslationService } from './translation.service';

/**
 * Base class that acts as a component messages container.
 *
 * For internal use.
 * @hidden
 */
@Directive({
  'selector': 'translationComponentMessaces'
})
export class TranslationComponentMessages implements OnChanges, OnInit, OnDestroy {
  protected service: TestTranslationService;

  private subscription: Subscription;

  protected get override(): boolean {
    return false;
  }

  public ngOnChanges(changes: SimpleChanges): void {
    console.log('changes', changes)
    this.register(changes);

    if (Object.keys(changes).some(field => !changes[field].isFirstChange())) {
      this.service.notifyChanges();
    }
  }

  public ngOnInit(): void {
    this.subscription = this.service.changes.pipe(skip(1)).subscribe(() => this.register(this));
  }

  // eslint-disable-next-line @typescript-eslint/ban-types
  protected register(changes: Object): void {
    const keys = Object.keys(changes);

    keys.forEach(key => this.service.register(key, (this as any)[key], this.override));
  }

  public ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
