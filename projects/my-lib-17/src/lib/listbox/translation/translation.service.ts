import { Inject, Injectable, Optional, InjectionToken, OnDestroy } from '@angular/core';
import { TestTranslationMessageService } from './message.service';
import { RTL } from './rtl';

import { Subject, Subscription, BehaviorSubject } from 'rxjs';
import { map, tap } from 'rxjs/operators';

/**
 * Localization prefix for the component messages.
 *
 * For internal use.
 * @hidden
 */
export const L10N_PREFIX = new InjectionToken<string>('Localization key prefix');

/**
 * Component localization service.
 *
 * For internal use.
 * @hidden
 */
@Injectable()
export class TestTranslationService implements OnDestroy {
  public readonly changes: Subject<{ rtl: boolean }> = new BehaviorSubject({ rtl: this._rtl });

  private subscription: Subscription;
  private dictionary: { [key: string]: string } = {};

  constructor(
    @Inject(L10N_PREFIX) private prefix: string,
    @Optional() private messageService: TestTranslationMessageService,
    @Optional() @Inject(RTL) private _rtl: boolean
  ) {

    if (messageService) {
      this.subscription = messageService.changes
        .pipe(
          map(({ rtl }) => rtl !== undefined ? rtl : this._rtl),
          tap(rtl => this._rtl = rtl)
        )
        .subscribe(rtl => {
          this.dictionary = {};
          this.changes.next({ rtl });
        });
    }
  }

  public get rtl(): boolean {
    return this._rtl;
  }

  public ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  public get(shortKey: string): string {
    const key = this.key(shortKey);

    return this.dictionary[key];
  }

  public register(shortKey: string, value: string, override = false): void {
    const key = this.key(shortKey);
    let message = value;
    console.log('register')
    if (!override) {
      if (Object.hasOwnProperty.call(this.dictionary, key)) {
        return;
      }

      message = this.defaultValue(key, value);
    }

    this.dictionary[key] = message;
  }

  public notifyChanges(): void {
    this.changes.next({ rtl: this.rtl });
  }

  private key(shortKey: string): string {
    return this.prefix + '.' + shortKey;
  }

  private defaultValue(key: string, value: string): string {
    if (!this.messageService) {
      return value;
    }

    const alt = this.messageService.get(key);
    return (alt === undefined) ? value : alt;
  }
}
