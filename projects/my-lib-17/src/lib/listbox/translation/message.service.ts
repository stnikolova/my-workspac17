import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

/**
 * A base class for a service that returns localized messages.
 *
 * For more information, refer to the section on [using the message service]({% slug messages_l10n %}#toc-using-the-message-service).
 */
@Injectable()
export class TestTranslationMessageService {
  /**
   * @hidden
   */
  constructor() {
    /* noop */
  }

  /**
   * @hidden
   */
  public readonly changes: Subject<{ rtl: boolean }> = new BehaviorSubject<{ rtl: boolean }>({ rtl: false });

  /**
   * Notifies the components that the messages were changed.
   *
   * @param rtl - (Optional) A new value for the [text direction token]({% slug api_l10n_rtl %}).
   */
  public notify(rtl: boolean = false): void {
    this.changes.next({ rtl });
  }

  /**
   * Returns a localized message for the supplied key.
   *
   * @param _key - The message key. For example, `"kendo.grid.noRecords"`.
   * @return - The localized message for this key or `undefined` if not found.
   */
  public get(_key: string): string | undefined {
    return undefined;
  }
}
