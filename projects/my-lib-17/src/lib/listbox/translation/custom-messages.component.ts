import { Component, forwardRef } from '@angular/core';
import { TranslationMessages } from './messages';
import { TestTranslationService } from './translation.service';

/**
 * Custom component messages override default component messages
 * ([see example]({% slug globalization_listbox %}#toc-localization)).
 */
@Component({
  providers: [
      {
          provide: TranslationMessages,
          useExisting: forwardRef(() => TranslationCustomMessagesComponent)
      }
  ],
  selector: 'test-translation-messages',
  template: ``
})
export class TranslationCustomMessagesComponent extends TranslationMessages {
    constructor(protected override service: TestTranslationService) {
        super();
    }

    protected override get override(): boolean {
        return true;
    }
}
